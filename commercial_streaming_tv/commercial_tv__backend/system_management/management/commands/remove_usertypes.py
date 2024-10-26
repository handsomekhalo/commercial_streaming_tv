from django.core.management.base import BaseCommand
from system_management.models import UserType

class Command(BaseCommand):
    """
    Management command to remove predefined usertypes from the UserType model.

    Usage:
        python manage.py remove_usertypes

    This command removes usertypes from the UserType model if they exist.
    """

    help = 'Removes specified usertypes from the UserType model'

    def handle(self, *args, **kwargs):
        self.stdout.write('Starting to remove usertypes...')
        names = ['LAW_FIRM', 'PARALEGAL']

        # Iterate through usertypes to remove
        for name in names:
            try:
                user_type = UserType.objects.get(name=name)
                user_type.delete()
                self.stdout.write(self.style.SUCCESS(f'Removed usertype: {name}'))
            except UserType.DoesNotExist:
                self.stdout.write(f'Usertype not found: {name}')

        self.stdout.write(self.style.SUCCESS('Finished removing usertypes'))
