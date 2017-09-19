from django.conf.urls import url
from . import views           # . is the current folder
urlpatterns = [
  url(r'^$', views.home),
  url(r'^process_money/(?P<location>\w+)$', views.get_money)
]