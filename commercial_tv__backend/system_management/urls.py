from django.urls import path
from system_management import views


urlpatterns = [
    # Your custom login view
    path('login_view/', views.login_view, name='login_view'),

]
