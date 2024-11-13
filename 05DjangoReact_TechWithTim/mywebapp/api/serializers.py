from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        # define the fields to be included in the response
        fields = ('id','code','host','guest_can_pause','votes_to_skip','created_at')
    
        