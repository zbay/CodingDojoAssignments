from django.conf.urls import url
from . import views           # import views.py from this folder
urlpatterns = [
  url(r'^$', views.index),
  url(r'^time_display$', views.index)
]