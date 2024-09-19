from django.urls import path, include
from .views import *
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('messages', MessageViewSet, basename='messages')

urlpatterns = [
    # path('homee/', home),
    path('', include(router.urls)),
    path('generate_song/', generate_download_song, name='generate_song'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)