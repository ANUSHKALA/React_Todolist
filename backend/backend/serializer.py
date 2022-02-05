from pyexpat import model
from rest_framework import serializers
from backend.models import*

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TaskSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Tasklist
        fields = '__all__'