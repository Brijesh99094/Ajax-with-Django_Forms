from django.urls import path
from . import views

urlpatterns = [
    path('' , views.home , name='home'), 
    path('index/', views.index,name='index'),
    path('saveBook/',views.saveBook,name='saveBook'),
    path('ShowAllBooks/',views.ShowAllBooks ,name='ShowAllBooks'),
    path('getBook/<id>',views.getBook,name='getBook'),
    path('deletebook/',views.deletebook,name='deletebook'),
    path('office' , views.officeCrud), 
    path('employee' , views.employeeCrud), 
    path("offices" , views.getAllOffices), 
    path("employees" , views.getAllEmployees),
    path("pages/employee" , views.showEmployeePage,name='employee'),
    path("pages/office" , views.showOfficePage,name='office')
]
