from django.db import models
import string
import random

def generate_unique_code():
    length = 6

    # generate a random code of length using uppercase ascii characters
    while true:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        # now verify uniqueness
        if Room.objects.filter(code=code).count() == 0:
            break

    return code

class Room(models.Model):
    # id - this will be added by django to ensure a unique row
    # the room code
    code = models.CharField(max_length=8, default="",unique=True)
    # Room host/creator, 1 host per room
    host = models.CharField(max_length=50,unique=True)
    # permission - allows guests to modify the room music
    guest_can_pause = models.BooleanField(null=False,default=False)
    votes_to_skip = models.IntegerField(null=False,default=1)
    created_at = models.DateTimeField(auto_now_add=True)