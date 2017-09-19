from django.conf.urls import url
from . import views           # import views.py from this folder
urlpatterns = [
  url(r'^random_word$', views.random),
  url(r'^random_word/reset$', views.reset)
]