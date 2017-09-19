from django.conf.urls import url
from . import views           # import views.py from this folder
urlpatterns = [
  url(r'^$', views.index),
  url(r'^$', views.index), 
  url(r'^new$', views.new),
  url(r'^create$', views.create),
  url(r'^(?P<number>\d+)$', views.show), # number must be one or more digits
  url(r'^(?P<number>\d+)/edit$', views.edit),
  url(r'^(?P<number>\d+)/delete$', views.destroy)
]