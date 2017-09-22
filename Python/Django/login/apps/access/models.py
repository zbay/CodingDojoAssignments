from __future__ import unicode_literals
from django.db import models
import re
import datetime

class UserManager(models.Manager):
    def validator(self, postData):
        errors = {}
        emailRegex=re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        alphaRegex = re.compile(r'^[a-zA-Z]+$')
        dateRegex = re.compile(r'^([0][1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/\d{4}$') # too lazy to account for the differing days in months, allows 31 days for all months
        if len(postData['first_name']) < 2:
            errors['first_name'] = "First names must be at least 2 characters!"
        if len(postData['last_name']) < 2:
            errors['last_name'] = "Last names must be at least 2 characters!"
        if not alphaRegex.match(postData['first_name']) or not alphaRegex.match(postData['last_name']):
            errors['name'] = "Your name can only contain alphabetical characters!"
        if not emailRegex.match(postData['email']):
            errors['email'] = "Your email is in an invalid format!"
        if not dateRegex.match(postData['birthday']):
            errors['birthday'] = "Your birthday must be valid and match the MM/DD/YYYY format!"
        else: # if bday is fine
            bday = postData['birthday']
            yr = int(bday[-4:])
            mo = int(bday[:2])
            day = int(bday[3:5])
            if (datetime.datetime(yr, mo, day) - datetime.datetime(1970,1,1)).total_seconds() > (datetime.datetime.utcnow() - datetime.datetime(1970,1,1)).total_seconds(): # compares number of seconds
                errors['time_travel'] = "Your birthday cannot be in the future!"
        return errors
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    birthday = models.CharField(max_length=10)
    password = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()