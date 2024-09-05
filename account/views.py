from django.contrib.messages.views import SuccessMessageMixin
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import ListView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from account.forms import UserCreateForm


class ListAccount(LoginRequiredMixin, ListView):
    template_name = "account/account_list.html"


class Login(View):
    def get(self, request):
        return render(request, "accounts/login.html")


class SignUp(LoginRequiredMixin, SuccessMessageMixin, CreateView):
    form_class = UserCreateForm
    success_url = reverse_lazy('accounts:listView')
    template_name = 'accounts/signup.html'
    success_message = 'You Successfully Sign Up'
