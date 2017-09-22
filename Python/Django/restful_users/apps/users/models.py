from __future__ import unicode_literals
from django.db import models
import re

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        emailRegex=re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(postData['first_name']) < 1:
            errors["first_name"] = "First name must be at least 1 character long!"
        if len(postData['last_name']) < 1:
            errors["last_name"] = "Last name must be at least 1 character long!"
        if not emailRegex.match(postData['email']):
            errors["email"] = "Please enter a valid email address!"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
    def __repr__(self):
        return "<Author object: Author {} {} {}>".format(self.first_name, self.last_name, self.email)