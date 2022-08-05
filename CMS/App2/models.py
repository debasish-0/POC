from django.db import models
from django.core.exceptions import ValidationError
# Create your models here.




class Employee(models.Model):

    """

    Employee Model Schema

    """

    empID = models.AutoField(primary_key=True)

    empName = models.CharField(max_length=100, validators=[])

    empDOJ = models.DateField(auto_now_add=True, validators=[])

    empDescription = models.CharField(max_length=250, blank=True, validators=[])

    empCategory = models.CharField(max_length=100, blank=True)

    empCity = models.CharField(max_length=50)

    empOfficeVenue = models.CharField(max_length=500)

    empOrg = models.CharField(max_length=50, blank=True)




    def __str__(self):

        return self.empName