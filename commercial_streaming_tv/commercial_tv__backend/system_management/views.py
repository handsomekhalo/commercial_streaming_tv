from django.shortcuts import render
from django.http import JsonResponse
from django.urls import reverse_lazy
from django.views.decorators.csrf import csrf_exempt
import json
import requests
from system_management.general_func_classes import host_url



def login_view(request):
    """User login function with API."""

    if request.method == "GET":
      
        # Update this path to point to your React app's index.html
        return render(request, 'index.html')  # Adj
    

@csrf_exempt  # Disable CSRF for testing purposes; remove this in production or add CSRF protection
def login(request):
    """User login function with API."""
    if request.method == "POST":
        print('posting')
        try:
            print('posting')
            data = json.loads(request.body)
            email = data.get('email')
            print('email',email)
            password = data.get('password')
            token = request.session.get('token')
            headers = {
                'Content-Type': 'application/json',
                "Authorization": f"Token {token}"
            }

            payload = json.dumps({
                'email': email,
                'password': password,
            
            })

            url = f"{host_url(request)}{reverse_lazy('login_api')}"

            response_data = requests.post(url, headers=headers, data=payload, timeout=10)

            if response_data.status_code == 200:
                  # Check for Created status
                return JsonResponse({'status': 'success', 'data': response_data.json()})  # Send back the task data if needed
            else:

                return JsonResponse({'error': 'Error creating task', 'details': response_data.json()}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)
    
    return JsonResponse({'status': 'error', 'message': 'Only POST requests are allowed'}, status=405)
