from django.contrib import admin
from django.urls import path, include
from .import views

urlpatterns = [
    path('', views.apiOverview,name="api-overview"),
    path('task-list/',views.taskList,name="task-list"),
    path('task-detail/<str:pk>/',views.taskDetail,name="task-detail"),
    path('task-by-category/<str:pk>/',views.taskbyCategory,name="task-by-category"),
    path('task-add/', views.taskAdd,name="task-add"),
    path('task-update/<str:pk>/',views.taskUpdate,name="task-update"),
    path('task-delete/<str:pk>/', views.taskDelete,name="task-delete"),  

    path('category-list/',views.categoryList,name="category-list"),
    path('category-create/',views.categoryAdd,name="category-add"),
    path('category-update/<str:pk>/',views.categoryUpdate,name="category-update"),
    path('category-delete/<str:pk>/',views.categoryDelete,name="category-delete"),

]   