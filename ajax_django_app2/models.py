from django.db import models
from django.forms import models
from ajax_django1.models import Book
# Create your models here.


class BookForm(models.ModelForm):
    class Meta():
        model = Book
        fields = '__all__'