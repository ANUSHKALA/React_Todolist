from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from backend.models import Category, Tasklist
from backend.serializer import CategorySerializer, TaskSerialiser

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'Task List' : '/task-list/',
        'Task Detail' : '/task-detail/<str:taskid>/',
        'Task by Category' : '/task-by-category/<str:categoryid>/',
        'Task Add'  :  '/task-add/',
        'Task Update': '/task-update/<str:taskid>/',
        'Task Delete' : '/task-delete/<str:taskid>/' ,  

        'Category List' : '/category-list/',
        'Category Add' : '/category-add/',
        'Category Update' : '/category-update/<str:categoryid>/',
        'Category Delete' : '/category-delete/<str:catgoryid>/',
        
    } 
    return Response(api_urls)


@api_view(['GET'])
def taskList(request):
    tasks = Tasklist.objects.all()
    serialiser = TaskSerialiser(tasks,many=True)
    return Response(serialiser.data)

@api_view(['GET'])
def taskDetail(request,pk):
    task = Tasklist.objects.get(id=pk)
    serialiser = TaskSerialiser(task,many=False)
    return Response(serialiser.data)

@api_view(['POST'])
def taskAdd(request):
    serialiser = TaskSerialiser(data=request.data)
    if serialiser.is_valid():
        serialiser.save()
    return Response(serialiser.data)

@api_view(['POST'])
def taskUpdate(request,pk):
    task = Tasklist.objects.get(id=pk)
    serialiser = TaskSerialiser(instance=task,data=request.data)
    if serialiser.is_valid():
        serialiser.save()
    return Response(serialiser.data)

@api_view(['GET'])
def taskbyCategory(request,pk):
    category = Category.objects.get(id=pk)
    tasks = Tasklist.objects.filter(category=category)
    serialiser = TaskSerialiser(tasks,many=True)
    return Response(serialiser.data)


@api_view(['DELETE'])
def taskDelete(request,pk):
    task = Tasklist.objects.get(id=pk)
    task.delete()
    return Response("Task successfully deleted!")

@api_view(['GET'])
def categoryList(request):
    category = Category.objects.all()
    serialiser = CategorySerializer(category,many=True)
    return Response(serialiser.data)

@api_view(['POST'])
def categoryAdd(request):
    serialiser = CategorySerializer(data=request.data)
    if serialiser.is_valid():
        serialiser.save()
    return Response(serialiser.data)

@api_view(['POST'])
def categoryUpdate(request,pk):
    category = Category.objects.get(id=pk)
    serialiser = CategorySerializer(instance=category,data=request.data)
    if serialiser.is_valid():
        serialiser.save()
    return Response(serialiser.data)

@api_view(['DELETE'])
def categoryDelete(request,pk):
    category = Category.objects.get(id=pk)
    Tasklist.objects.filter(category=category).delete()
    category.delete()
    return Response("Category succesfully deleted!")