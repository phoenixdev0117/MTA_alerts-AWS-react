from typing import Any
from django.http import HttpResponse


def index(request: Any) -> HttpResponse:
    """Testing new endpoint"""
    print(request)
    return HttpResponse("Hello!")
