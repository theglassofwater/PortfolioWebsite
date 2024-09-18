from django.db import models

# Create your models here.

class User(models.Model):
    email = models.EmailField(unique=True) # Username
    name = models.CharField(max_length=50)
    password = models.CharField(max_length=50, blank=True, null=True)   # Implement user authentication next patch

    def __str__(self):
        return self.email

    def get_dict(self):
        return {
            'email': self.email,
            'name': self.name,
        }   
class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message