from django.db import models

# Create your models here.
class Employee(models.Model):
    
    """

    Employee Model Schema

    """

    empID = models.AutoField(primary_key=True)

    empDOJ = models.DateField(auto_now_add=True, validators=[])

    empDescription = models.CharField(max_length=250, blank=True, validators=[])

    empCategory = models.CharField(max_length=100, blank=True)

    empOfficeVenue = models.CharField(max_length=500)




    def __str__(self):

        return self.empName
