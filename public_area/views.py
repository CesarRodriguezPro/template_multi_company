from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'public_area/home.html'

