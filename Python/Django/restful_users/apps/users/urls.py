from django.conf.urls import url
from . import views           
urlpatterns = [
  url(r'^$', views.index),
  url(r'^new$', views.new),
  url(r'^(?P<id>\d+)/edit$', views.edit),
  url(r'^(?P<id>\d+)$', views.specific_user), # specific_user() will check the method. GET redirects to show(). POST redirects to update()
  url(r'^create$', views.create),
  url(r'^(?P<id>\d+)/destroy$', views.destroy)
]