from django.db import models



from Villian.models import Informacion
# Create your models here.
SEX_SELECT = [
    ("ESPADACHIN", "Espadachín"),
    ("VALQUIRIA", "Valquiria"),
    ("VALQUIRIA", "Tanque"),
    ("ARQUERO", "Arquero"),
    ("MAGO", "Mago"),
    ("METAHUMAN", "Metaumano"),
]

class Character(models.Model):
    name = models.TextField('Nombre',max_length=60)
    alias = models.TextField('Apodo',max_length=20)
    age = models.IntegerField('Edad',max_length=3)
    class_type = models.TextField('Clase',max_length=10, choices=SEX_SELECT, default = 'ESPADACHIN')
    history = models.TextField('Historia',max_length=500)
    def __str__(self):
        return self.alias





class Automovil(models.Model):
    model = models.TextField('Modelo',max_length=60)
    trademark = models.TextField('Marca',max_length=60)
    def __str__(self):
        return self.model
    
class AutomovilSpec(models.Model):
    motor = models.TextField('Motor',max_length=60)
    weight = models.TextField('Peso',max_length=60)
    color = models.TextField('Color',max_length=60)
    auto_need = models.ForeignKey(Automovil, on_delete=models.CASCADE)

    def __str__(self):
        return self.motor
       
class Contrato(models.Model):
    customer = models.ForeignKey(Informacion, on_delete=models.CASCADE)

    car = models.ForeignKey(Automovil, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.customer)
    