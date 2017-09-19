from django.conf.urls import url
from . import views           # import views.py from this folder
urlpatterns = [
  url(r'^$', views.index),
  url(r'^register$', views.register),
  url(r'^login$', views.login),
  url(r'^new$', views.register)
]