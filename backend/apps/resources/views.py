from django.shortcuts import render
from rest_framework import viewsets
from .models import Venue, AvItem, MealItem
from .serializers import VenueSerializer, AvItemSerializer, MealItemSerializer

class VenueViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer


class AvItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AvItem.objects.all()
    serializer_class = AvItemSerializer


class MealItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MealItem.objects.all()
    serializer_class = MealItemSerializer

