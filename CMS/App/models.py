from django.db import models

# Create your models here.
class Employee(models.Model):
    
    """

    Employee Model Schema

    """

    empID = models.AutoField(primary_key=True)

    empName = models.CharField(max_length=100, validators=[])

    empCategory = models.CharField(max_length=100, blank=True)

    empCity = models.CharField(max_length=50)

    empOrg = models.CharField(max_length=50, blank=True)




    def __str__(self):

        return self.empName