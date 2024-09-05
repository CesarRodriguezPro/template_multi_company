from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin

# organization


class ListOrganization(LoginRequiredMixin, ListView):
    template_name = "organization/list.html"
