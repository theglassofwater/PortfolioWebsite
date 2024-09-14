from django.urls import path
from .views import *
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
# from views import UserViewSet, MessageViewSet

router = DefaultRouter()
router.register('users', UserViewSet, basename='user')
router.register('message', MessageViewSet, basename='message')
urlpatterns = router.urls

# urlpatterns = [
#     path('homee/', home),
#     path('', TemplateView.as_view(template_name='index.html')),

# ]