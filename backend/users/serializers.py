# from rest_framework import serializers
# from .models import CustomUser

# class UserSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})

#     class Meta:
#         model = CustomUser
#         fields = ['id', 'username', 'password', 'role', 'first_name', 'last_name', 'email']

#     def create(self, validated_data):
#         user = CustomUser.objects.create_user(**validated_data)
#         user.set_password(validated_data['password'])  # 🔐 ensures hashing
#         user.save()

#         return user


from rest_framework import serializers
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'role',
            'is_active',
        ]

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = CustomUser
        fields = [
            'username',
            'password',
            'email',
            'first_name',
            'last_name',
            'role'
        ]

    def create(self, validated_data):
        password = validated_data.pop('password')

        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()

        return user
    

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, min_length=8)


class RoleUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['role']