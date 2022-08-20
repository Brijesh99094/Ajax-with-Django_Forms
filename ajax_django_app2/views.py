from django.http.response import HttpResponse,JsonResponse
from django.shortcuts import redirect, render
from ajax_django1.models import Book,BookSerializer
from .models import BookForm
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.



def home(request):
    form = BookForm()
    context = {'form':form}
    return render(request,"app2/home.html",context)


def main(request):
    b1 = Book.objects.all()
    s1 = BookSerializer(b1,many=True) 
    return JsonResponse(s1.data,safe=False)

@csrf_exempt
def book_post(request):
    if request.is_ajax():
        data = json.loads(request.body)
        b1 = Book.objects.create(name=data['name'],price=data['price'],pages=data['pages'])
        b1.save()
        return JsonResponse({'success':'yes'})
    return redirect('home')
