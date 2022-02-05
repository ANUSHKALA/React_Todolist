from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200, null=True)
    def __str__(self):
        return self.name


class Tasklist(models.Model):
    title = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    category = models.ForeignKey(Category,null=True,on_delete= models.SET_NULL)
    is_completed = models.BooleanField(null=True,default=False)


    def __str__(self):
        return self.title

