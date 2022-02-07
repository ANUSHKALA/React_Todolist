from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200, default = "Others", unique=True)
    def __str__(self):
        return self.name


class Tasklist(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    is_completed = models.BooleanField(default=False)


    def __str__(self):
        return self.title

