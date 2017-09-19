from django.conf.urls import url
from . import views           # import views.py from this folder
urlpatterns = [
  url(r'^$', views.form),
  url(r'^surveys/process$', views.process),
  url(r'^result$', views.result)
]