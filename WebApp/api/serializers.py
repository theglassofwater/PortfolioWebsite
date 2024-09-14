from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("email", "name", "password")# '__all__'





class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ("user", "message")# '__all__'
    