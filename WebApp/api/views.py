from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response

# Create your views here.

def home(request):
    return HttpResponse("Hello, World!")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

    def list(self, request, *args, **kwargs):
        # return super().list(request, *args, **kwargs)
        pass
    
    def create(self, request, *args, **kwargs):
        # return super().create(request, *args, **kwargs)
        pass

    def retrieve(self, request, *args, **kwargs):    
        # return super().retrieve(request, *args, **kwargs)
        pass

    def update(self, request, *args, **kwargs):
        # return super().update(request, *args, **kwargs)
        pass

    def destroy(self, request, *args, **kwargs):
        # return super().destroy(request, *args, **kwargs)
        pass


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MessageSerializer

    def create(self, request, *args, **kwargs):
        # return super().create(request, *args, **kwargs)
        pass

    def retrieve(self, request, *args, **kwargs):    
        # return super().retrieve(request, *args, **kwargs)
        pass

    def update(self, request, *args, **kwargs):
        # return super().update(request, *args, **kwargs)
        pass
        
    def destroy(self, request, *args, **kwargs):
        # return super().destroy(request, *args, **kwargs)
        pass