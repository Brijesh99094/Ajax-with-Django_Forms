from django.urls import path
from .views import *



urlpatterns = [
    path('',main,name='main'),
    path('home/',home,name='home'),
    path('book_post/',book_post,name='book'),
]