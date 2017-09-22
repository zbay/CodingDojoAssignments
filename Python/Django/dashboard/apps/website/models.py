from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    def init_validator(self, postData):
        errors = {}
        emailRegex=re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        alphaRegex = re.compile(r'^[a-zA-Z]+$')
        dateRegex = re.compile(r'^([0][1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/\d{4}$') # too lazy to account for the differing days in months, allows 31 days for all months
        if len(postData['first_name']) < 2:
            errors['first_name'] = "First names must be at least 2 characters in length!"
        if len(postData['last_name']) < 2:
            errors['last_name'] = "Last names must be at least 2 characters!"
        if not alphaRegex.match(postData['first_name']) or not alphaRegex.match(postData['last_name']):
            errors['name'] = "Your name can only contain alphabetical characters!"
        if not emailRegex.match(postData['email']):
            errors['email'] = "Your email is in an invalid format!"
        if postData['password'] != postData['confirm_password']:
            errors['password_match'] = "Your passwords do not match!"
        if len(postData['password']) < 8:
            errors['password'] = "Your password must be at least 8 characters in length!"
        # this next test is likely to break the program
        user = User.objects.filter(email=postData['email'])
        if len(user) > 0:
            errors['redundant'] = 'This email has already been taken! Please use a different address!'
        return errors
    def update_validator(self, postData):
        errors = {}
        emailRegex=re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        alphaRegex = re.compile(r'^[a-zA-Z]+$')
        dateRegex = re.compile(r'^([0][1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/\d{4}$') # too lazy to account for the differing days in months, allows 31 days for all months
        if len(postData['first_name']) < 2:
            errors['first_name'] = "First names must be at least 2 characters in length!"
        if len(postData['last_name']) < 2:
            errors['last_name'] = "Last names must be at least 2 characters!"
        if not alphaRegex.match(postData['first_name']) or not alphaRegex.match(postData['last_name']):
            errors['name'] = "Your name can only contain alphabetical characters!"
        if not emailRegex.match(postData['email']):
            errors['email'] = "Your email is in an invalid format!"
        if postData['password'] != postData['confirm_password']:
            errors['password_match'] = "Your passwords do not match!"
        if len(postData['password']) < 8:
            errors['password'] = "Your password must be at least 8 characters in length!"
        # this next test is likely to break the program
        user = User.objects.filter(email=postData['email'])
        currentUser = User.objects.get(id=postData['id'])
        if len(user) > 0 and currentUser.email != postData['email']: # second condition
            errors['redundant'] = 'This email has already been taken! Please use a different address!'
        return errors  
    def login_validator(self, postData):
        errors = {}
        user = User.objects.filter(email=postData['email'])
        if len(user) == 0:
            errors['missing'] = 'This email does not exist in the system! Maybe you need to sign up.'  
        else:
            if not bcrypt.checkpw(request.POST['password'].encode(), user[0].password.encode()): 
                errors['password'] = 'Your password is incorrect!'
        return errors
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.TextField()
    description = models.TextField()
    user_level = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

class MessageManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['message']) == 0:
            errors['msg_length'] = "Messages can't be blank!"
        return errors
class Message(models.Model):
    text = models.CharField(max_length=255)
    recipient = models.ForeignKey(User, related_name="received_messages")
    sender = models.ForeignKey(User, related_name="sent_messages")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = MessageManager()

class CommentManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['comment']) == 0:
            errors['comment_length'] = "Messages can't be blank!"
        return errors
class Comment(models.Model):
    text = models.CharField(max_length=255)
    parent = models.ForeignKey(Message, related_name="comments")
    sender = models.ForeignKey(User, related_name="comments")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = CommentManager()