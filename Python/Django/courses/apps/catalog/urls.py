from django.conf.urls import url
from . import views           # . is the current folder
urlpatterns = [
  url(r'^$', views.home),
  url(r'^courses$', views.home),
  url(r'^courses/create$', views.create),
  url(r'^courses/destroy/(?P<id>\d+)$', views.delete),
  url(r'^courses/destroy/(?P<id>\d+)/actual$', views.actual_delete),
  url(r'^courses/comments/(?P<id>\d+)$', views.comments),
  url(r'^courses/comments/(?P<id>\d+)/create$', views.new_comment)
]