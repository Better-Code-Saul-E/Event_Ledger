from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VenueViewSet, AvItemViewSet, MealItemViewSet

router = DefaultRouter()
router.register(r'venues', VenueViewSet)
router.register(r'av-items', AvItemViewSet)
router.register(r'meals', MealItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]