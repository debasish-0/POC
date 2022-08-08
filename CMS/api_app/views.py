from django.shortcuts import render

from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Employee
from .serializers import employeeSerializer
# Create your views here.

@api_view(['GET'])
def get_all_employees(request):
    all_employees= Employee.objects.all()
    serializer=employeeSerializer(all_employees, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_by_category(request, category=None):
    employees_by_category= Employee.objects.filter(empCategory=category)
    serializer=employeeSerializer(employees_by_category, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_by_city(request, city=None):
    employees_by_city= Employee.objects.filter(empCity=city)
    serializer=employeeSerializer(employees_by_city, many=True)
    return Response(serializer.data)
