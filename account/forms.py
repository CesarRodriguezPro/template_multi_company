from django.contrib.auth.forms import UserCreationForm
from account.models import User


class UserCreateForm(UserCreationForm):
    class Meta:
        default_classes = 'form-control form-control-user'
        model = User
        exclude = (
            'user_permissions',
            'is_superuser',
            'is_staff',
            'is_active',
            'date_joined',
            'is_employees',
            'last_login',
            'is_developer',
        )

