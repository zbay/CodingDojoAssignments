from __future__ import unicode_literals
from django.db import models

class DescriptionManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['description']) <= 15 or len(postData['description']) > 255:
            errors['description'] = "Descriptions must be between 16 and 255 characters!"
        return errors
class Description(models.Model):
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = DescriptionManager()

class CourseManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['name']) <= 5 or len(postData['name']) > 255:
            errors['name'] = "Names must be between 6 and 255 characters!"
        return errors
class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.ForeignKey(Description, related_name="course", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = CourseManager()

class CommentManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['comment']) < 1 or len(postData['comment']) > 255:
            errors['name'] = "Names must be between 1 and 255 characters!"
        return errors
class Comment(models.Model):
    text = models.CharField(max_length=255)
    course = models.ForeignKey(Course, related_name="comments")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = CommentManager()
