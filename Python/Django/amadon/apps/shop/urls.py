from django.conf.urls import url
from . import views           # . is the current folder
urlpatterns = [
  url(r'^amadon$', views.store),
  url(r'^amadon/checkout$', views.confirm),
  url(r'^amadon/buy$', views.buy)
]