 from django.conf.urls import url
  from . import views           # import views.py from this folder
  urlpatterns = [
    url(r'^$', views.index)     # url is an empty string. method doesn't matter, it's handled by request.method elsewhere
  ]