from django.conf.urls import url
from . import views
urlpatterns = [
  url(r'^$', views.home),
  url(r'^new_note$', views.new_note),
  url(r'^get_saved', views.get_saved)
]