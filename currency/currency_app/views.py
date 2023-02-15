from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.



def base(request):
    print('dupa')
    option = request.GET.get('send', None)
    return render(request, 'base.html',{
        'option': option
    })

print('dupa')
