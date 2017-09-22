from django.conf.urls import url
from . import views           
urlpatterns = [
  url(r'^$', views.home),
  url(r'^signin$', views.signin),
  url(r'^register$', views.register),
  url(r'^users/new$', views.new),
  url(r'^users/show/(?P<id>\d+)$', views.user),
  url(r'^message$', views.message),
  url(r'^comment$', views.comment),
  url(r'^logout$', views.logout),
  url(r'^users/edit/(?P<id>\d+)$', views.admin_edit),
  url(r'^users/edit$', views.user_edit),
  url(r'^dashboard$', views.dashboard),
  url(r'^dashboard/admin$', views.admin_dashboard),
  url(r'^users/remove/(?P<id>\d+)$', views.remove),
  url(r'^description$', views.description),
  url(r'^information$', views.information),
  url(r'^password$', views.password),
]