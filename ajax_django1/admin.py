from django.contrib import admin
from .models import Book
# Register your models here.

class BookAdmin(admin.ModelAdmin):
    list_display=('id','name','price','pages')
    search_fields = ('id','name')
admin.site.register(Book,BookAdmin)