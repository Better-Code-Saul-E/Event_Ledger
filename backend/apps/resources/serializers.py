from rest_framework import serializers
from .models import Venue, AvItem, MealItem

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = '__all__'


class AvItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvItem
        fields = '__all__'


class MealItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MealItem
        fields = '__all__'

