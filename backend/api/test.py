from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from .models import Note
from .views import NoteListCreate

class NoteListCreateTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.force_authenticate(user=self.user)
        self.note = Note.objects.create(title='Test Note', content='Test Content', author=self.user)
