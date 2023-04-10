from django.db import models

# Create your models here.

SEX_SELECT = [
    ("MALE", "Male"),
    ("FEMALE", "Female"),
    ("OTHER", "Other"),
]


class Informacion(models.Model):
    name = models.TextField('Nombre',max_length=25)
    address = models.TextField('Dirección',max_length=60)
    phone = models.CharField('Teléfono',max_length=10)
    email = models.EmailField('Correo Electrónico', max_length=60)
    sex = models.CharField('Sexo',max_length=10, choices=SEX_SELECT, default = 'OTHER')
    age = models.IntegerField('Edad')
    def __str__(self):
        return self.name