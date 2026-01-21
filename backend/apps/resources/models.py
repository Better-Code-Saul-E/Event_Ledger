from django.db import models

class Venue(models.Model):
    name = models.CharField(max_length=200)
    cost = models.IntegerField()
    capacity = models.IntegerField()
    img = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class AvItem(models.Model):
    name = models.CharField(max_length=200)
    cost = models.IntegerField()
    img = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class MealItem(models.Model):
    name = models.CharField(max_length=200)
    cost = models.IntegerField()
    img = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name