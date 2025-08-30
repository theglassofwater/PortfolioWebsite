from .models import *
from .serializers import *
import os
from django.conf import settings

# from django.http.Http import JsonResponse
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view

import torch
from transformers import AutoModelForCausalLM, GenerationConfig, BitsAndBytesConfig
import numpy as np
from miditok import REMI
from .common.util import *

model_name = "finetuning_16.0epochs"
model = AutoModelForCausalLM.from_pretrained("theglassofwater/"+model_name)
if torch.cuda.is_available():
    model.to("cuda")
tokenizer = REMI.from_pretrained("theglassofwater/remi_12500")



@api_view(['GET'])
def generate_download_song(request, *args, **kwargs):

    max_length  = request.query_params.get('max_length', 200)
    try:
        max_length = int(max_length)
    except ValueError:
        return Response({"error": "max_length must be an integer"}, status=400)
        
    base_dir = str(settings.BASE_DIR)
    assets_dir = base_dir + "/api/common/assets"
    song_path = assets_dir + "/song.mid"
    img_path = assets_dir + "/song.png"
    mp3_path = assets_dir + "/song.mp3"

    print(mp3_path)

    tokens = generate_song(model, tokenizer, max_length=max_length, song_filename=song_path, pianoroll_filename=img_path)
    audio_data = midi_to_mp3(song_path, mp3_path)

    song_data = {
        "tokens": tokens,
        "song_url" : "http://127.0.0.1:8000/common/assets/song.mp3",
        "img_url" : "http://127.0.0.1:8000/common/assets/song.png",
        "midi_url" : "http://127.0.0.1:8000/common/assets/song.mid",
    }
    return Response(song_data)
    



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

    # def list(self, request, *args, **kwargs):
    #     # return super().list(request, *args, **kwargs)
    #     queryset = self.queryset
    #     serializer = self.serializer_class(queryset, many=True)
    #     return Response(serializer.data)
    
    def create(self, request, *args, **kwargs): ## NO PASSWORD GIVEN / NEEDED
        # email validation happens in model and frontend, but have different restraints, 
        # model is more strict, frontend is more lenient
        # change email validation in front end to match model

        user_data = {
            'name': request.data['name'],
            'email': request.data['email'],
        }
        user_serializer = self.serializer_class(data=user_data)

        if User.objects.filter(email=user_data['email']).exists(): # if user already exists
            user_exists = True
        elif user_serializer.is_valid():
            user_serializer.save()
        else:
            print(user_serializer.errors)
            return Response(user_serializer.errors, status=401)
        


        if "message" not in request.data: # this should never happend as front end should always send a message
            return Response(user_serializer.data, status=201)
        
        user_query = User.objects.filter(email=request.data['email'])

        message_data = {
            'user': user_query[0].id,
            'message': request.data['message'],
        }
        message_serializer = MessageSerializer(data=message_data)
        if message_serializer.is_valid():
            message_serializer.save()
            return Response({"user": user_query[0].get_dict(),
                            "message": message_serializer.data,
                            "status": "User and Message created" if not user_exists else "Message created, user already exists"
                            },
                            status=201)
        return Response(message_serializer.errors, status=402)
        

    # def retrieve(self, request, *args, **kwargs):    
    #     # return super().retrieve(request, *args, **kwargs)
    #     user = self.queryset.get(pk=kwargs['pk'])
    #     if user:
    #         serializer = self.serializer_class(user)
    #         return Response(serializer.data)
    #     return Response(status=404)

    # def update(self, request, *args, **kwargs):
    #     # return super().update(request, *args, **kwargs)
    #     user = self.queryset.get(pk=kwargs['pk'])
    #     if user:
    #         serializer = self.serializer_class(user, data=request.data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return Response(serializer.data)
    #         return Response(serializer.errors, status=400)
    #     return Response(status=404)


    # def destroy(self, request, *args, **kwargs):
    #     # return super().destroy(request, *args, **kwargs)
    #     user = self.queryset.get(pk=kwargs['pk'])
    #     if user:
    #         user.delete()
    #         return Response(status=204)
    #     return Response(status=404)

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MessageSerializer
    
    # def list(self, request, *args, **kwargs):
    #     # return super().list(request, *args, **kwargs)
    #     queryset = self.queryset
    #     serializer = self.serializer_class(queryset, many=True)
    #     return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        # return super().create(request, *args, **kwargs)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    # def retrieve(self, request, *args, **kwargs):    
    #     # return super().retrieve(request, *args, **kwargs)
    #     message = self.queryset.get(pk=kwargs['pk'])
    #     if message:
    #         serializer = self.serializer_class(message)
    #         return Response(serializer.data)
    #     return Response(status=404)

    # def update(self, request, *args, **kwargs):
    #     # return super().update(request, *args, **kwargs)
    #     message = self.queryset.get(pk=kwargs['pk'])
    #     if message:
    #         serializer = self.serializer_class(message, data=request.data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return Response(serializer.data)
    #         return Response(serializer.errors, status=400)
    #     return Response(status=404)
        
    # def destroy(self, request, *args, **kwargs):
    #     # return super().destroy(request, *args, **kwargs)
    #     message = self.queryset.get(pk=kwargs['pk'])
    #     if message:
    #         message.delete()
    #         return Response(status=204)
    #     return Response(status=404)