from django.conf.urls import url
from . import views           # import views.py from this folder
urlpatterns = [
  url(r'^$', views.form),
  url(r'^newWord$', views.newWord),
  url(r'^reset$', views.reset)
]