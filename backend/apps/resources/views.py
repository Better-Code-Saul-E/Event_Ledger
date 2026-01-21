from django.shortcuts import render
from rest_framework import viewsets
from .models import Venue, AvItem, MealItem
from .serializers import VenueSerializer, AvItemSerializer, MealItemSerializer

class VenueViewSet(viewsets.ModelViewSet):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer


class AvItemViewSet(viewsets.ModelViewSet):
    queryset = AvItem.objects.all()
    serializer_class = AvItemSerializer


class MealItemViewSet(viewsets.ModelViewSet):
    queryset = MealItem.objects.all()
    serializer_class = MealItemSerializer

