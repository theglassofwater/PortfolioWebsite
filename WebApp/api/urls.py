from django.urls import path
from .views import *
from django.views.generic import TemplateView

urlpatterns = [
    # path('', home),
    path('', TemplateView.as_view(template_name='index.html')),

]