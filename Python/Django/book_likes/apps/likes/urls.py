from django.conf.urls import url
from . import views           # . is the current folder
urlpatterns = [
  url(r'^$', views.home)
]