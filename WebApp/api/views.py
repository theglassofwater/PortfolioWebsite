from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response

# Create your views here.

# def home(request):
#     return HttpResponse("Hello, World!")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

    def list(self, request, *args, **kwargs):
        # return super().list(request, *args, **kwargs)
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        # return super().create(request, *args, **kwargs)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, *args, **kwargs):    
        # return super().retrieve(request, *args, **kwargs)
        user = self.queryset.get(pk=kwargs['pk'])
        if user:
            serializer = self.serializer_class(user)
            return Response(serializer.data)
        return Response(status=404)

    def update(self, request, *args, **kwargs):
        # return super().update(request, *args, **kwargs)
        user = self.queryset.get(pk=kwargs['pk'])
        if user:
            serializer = self.serializer_class(user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        return Response(status=404)


    def destroy(self, request, *args, **kwargs):
        # return super().destroy(request, *args, **kwargs)
        user = self.queryset.get(pk=kwargs['pk'])
        if user:
            user.delete()
            return Response(status=204)
        return Response(status=404)


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MessageSerializer
    
    def list(self, request, *args, **kwargs):
        # return super().list(request, *args, **kwargs)
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        # return super().create(request, *args, **kwargs)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, *args, **kwargs):    
        # return super().retrieve(request, *args, **kwargs)
        message = self.queryset.get(pk=kwargs['pk'])
        if message:
            serializer = self.serializer_class(message)
            return Response(serializer.data)
        return Response(status=404)

    def update(self, request, *args, **kwargs):
        # return super().update(request, *args, **kwargs)
        message = self.queryset.get(pk=kwargs['pk'])
        if message:
            serializer = self.serializer_class(message, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        return Response(status=404)
        
    def destroy(self, request, *args, **kwargs):
        # return super().destroy(request, *args, **kwargs)
        message = self.queryset.get(pk=kwargs['pk'])
        if message:
            message.delete()
            return Response(status=204)
        return Response(status=404)