from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

app_name = "account"

urlpatterns = [

    #  basic security
    path('', auth_views.LoginView.as_view(template_name='accounts/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='accounts/signup.html'), name='logout'),
    path('signup/', views.SignUp.as_view(), name='signup'),

    # management users
    path('list_accounts', views.ListAccount.as_view()),
]

