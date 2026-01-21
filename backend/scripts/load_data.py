import os
import sys
import django

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)
sys.path.append(os.path.join(BASE_DIR, 'apps'))

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.dev")
django.setup()

from django.apps import apps
Venue = apps.get_model('resources', 'Venue')
AvItem = apps.get_model('resources', 'AvItem')
MealItem = apps.get_model('resources', 'MealItem')

def run():
    print("Clearing old data...")
    Venue.objects.all().delete()
    AvItem.objects.all().delete()
    MealItem.objects.all().delete()

    print("Creating Venues...")
    venues = [
        {"name": "Conference Room", "capacity": 15, "cost": 450, "img": "ConferenceRoom.jpg"},
        {"name": "Auditorium Hall", "capacity": 200, "cost": 2500, "img": "Auditorium.jpg"},
        {"name": "Presentation Room", "capacity": 50, "cost": 800, "img": "PresentationRoom.jpg"},
        {"name": "Large Meeting Room", "capacity": 25, "cost": 300, "img": "LargeMeetingRoom.jpg"},
        {"name": "Small Meeting Room", "capacity": 5, "cost": 150, "img": "SmallMeetingRoom.jpg"},
        {"name": "Executive Boardroom", "capacity": 12, "cost": 750, "img": "ExecutiveBoardRoom.jpg"},
        {"name": "Training Lab", "capacity": 20, "cost": 600, "img": "TrainingLab.jpg"},
        {"name": "Creative Workshop", "capacity": 30, "cost": 900, "img": "Workshop.jpg"},
        {"name": "Rooftop Garden", "capacity": 80, "cost": 1500, "img": "RooftopGarden.jpg"},
    ]
    for v in venues:
        Venue.objects.create(
            name=v['name'], 
            cost=v['cost'], 
            capacity=v['capacity'], 
            img=v['img']
        )

    print("Creating AV Items...")
    av_items = [
        {"name": "Presentation Clicker", "cost": 5, "img": "clicker.jpg"},
        {"name": "HDMI/Adapter Cable Kit", "cost": 10, "img": "cables.jpg"},
        {"name": "Rolling Whiteboard", "cost": 15, "img": "whiteboard.jpg"},
        {"name": "Wireless Handheld Mic", "cost": 30, "img": "mic_handheld.jpg"},
        {"name": "Lapel / Lavalier Mic", "cost": 35, "img": "mic_lapel.jpg"},
        {"name": "Laptop Rental (Windows/Mac)", "cost": 45, "img": "laptop.jpg"},
        {"name": "Portable PA System + Speaker", "cost": 60, "img": "pa_system.jpg"},
        {"name": "Standard Projector (1080p)", "cost": 70, "img": "projector.jpg"},
        {"name": "Digital Signage Screen (55\")", "cost": 80, "img": "signage.jpg"},
        {"name": "Concert Grade Speakers (Pair)", "cost": 100, "img": "speakers.jpg"},
        {"name": "Stage Lighting Rig", "cost": 150, "img": "lighting.jpg"},
        {"name": "4K Laser Projector", "cost": 200, "img": "projector_4k.jpg"},
        {"name": "LED Video Wall (Per Panel)", "cost": 250, "img": "video_wall.jpg"},
    ]
    for a in av_items:
        AvItem.objects.create(name=a['name'], cost=a['cost'], img=a['img'])

    print("Creating Meals...")
    meals = [
        {"name": "Chilled Water & Sodas", "cost": 2},
        {"name": "Popcorn & Pretzel Bar", "cost": 4},
        {"name": "Assorted Cookies & Brownies", "cost": 5},
        {"name": "Energy Bar & Trail Mix Station", "cost": 6},
        {"name": "Fresh Fruit Skewers", "cost": 7},
        {"name": "Morning Coffee & Pastries", "cost": 8},
        
        {"name": "Cheese & Cracker Platter", "cost": 10},
        {"name": "Continental Breakfast", "cost": 10},
        {"name": "Vegetarian Wrap Box", "cost": 12},
        {"name": "Gourmet Sandwich Box", "cost": 14},
        {"name": "Afternoon Tea & Scones", "cost": 15},
        {"name": "Pizza & Salad Combo", "cost": 16},
        {"name": "All-Day Coffee & Beverage Station", "cost": 18},

        {"name": "Hot Full Breakfast", "cost": 20},
        {"name": "Taco & Fajita Bar", "cost": 22},
        {"name": "Hot Buffet Lunch", "cost": 25},
        {"name": "Sushi & Sashimi Station", "cost": 30},
        {"name": "Cocktail Hour (Hors d'oeuvres)", "cost": 35},
        {"name": "Gala Dinner Buffet", "cost": 45},
        {"name": "Plated Executive Dinner (3-Course)", "cost": 55},
    ]
    for m in meals:
        MealItem.objects.create(name=m['name'], cost=m['cost'])

    print(f"DONE! Created {len(venues)} Venues, {len(av_items)} AV Items, and {len(meals)} Meals.")

if __name__ == "__main__":
    run()