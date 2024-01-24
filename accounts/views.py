from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from django.contrib.auth import authenticate, login
from serializers import LoginSerializer


class UserLoginAPIView(APIView):
    def post(self, request: Request) -> Response:
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username: str = serializer.validated_data["username"]
            password: str = serializer.validated_data["password"]
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return Response(
                    {"message": "Login successful"}, status=status.HTTP_200_OK
                )
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
