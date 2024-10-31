DjangoWagtailCMS

## Tutorial

15:00 - current bookmark

Youtube Tutorial

- https://www.youtube.com/watch?v=jiHNLrW_ueo&list=PLMQHMcNi6ocsS8Bfnuy_IDgJ4bHRRrvub&index=52&ab_channel=CodingForEverybody

Github Repo

- https://github.com/wagtail/workshop

```
> python -m venv venv
> .\venv\Scripts\activate.bat
> pip install wagtail
```

You may get an error about Pillow. If so upgrade pip and install pillow manually, then re-install wagtail

```
> python -m pip install -U --force-reinstall pip
> pip install --upgrade Pillow
> pip install wagtail
```

If all is good then wagtail should now be installed

```
> pip show wagtail
Name: wagtail
Version: 6.2.2
Summary: A Django content management system.
Home-page: https://wagtail.org/
Author: Wagtail core team + contributors
Author-email: hello@wagtail.org
License: BSD
Location: c:\users\monze\desktop\mygit\djangoprojects\01djangowagtailcms\venv\lib\site-packages
Requires: anyascii, beautifulsoup4, Django, django-filter, django-modelcluster, django-permissionedforms, django-taggit, django-treebeard, djangorestframework, draftjs-exporter, l18n, laces, openpyxl, Pillow, requests, telepath, Willow
Required-by:
```

Now execute each line in the terminal

```
# Create the wagtail project
> wagtail start mysite

# cd into the new project
> cd mysite

# Install requirements
> pip install -r requirements.txt

# create the database
# This will create an sqllite db which we can migrate from later if you choose
> python manage.py migrate

# finally run the server and checkout the results
> python manage.py runserver

# Outputs
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
October 30, 2024 - 13:51:36
Django version 5.0.9, using settings 'mysite.settings.dev'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

Now create a superuser for admin stuff

```
> python manage.py createsuperuser
# it should ask you for a username, email and password
```

At this point you should have a functioning website. I would suggest running the server and looking around. The username and password created in the previous step will allow you to log into the admin interface.
