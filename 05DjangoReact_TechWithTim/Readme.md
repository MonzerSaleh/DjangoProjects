# 05DjangoReact_TechWithTim

- 2020 Tech with Tim - Django & React - Full Stack Web Ap
- https://www.youtube.com/watch?v=JD-age0BPVo&list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j&index=1&ab_channel=TechWithTim

Full stack web app

- Backend: Python+Django
- Frontend: Javascript+react

Requirements

- an IDE (like VS Code) and Python
  - Handy Extensions:
  - Prettier,
  - Python,
  - Django,
  - ES7 + React/Reducx/React-Native ...
  - JavaScript (ES6) code snippets
- npm & Node js (At the time of writing: 10.8.2 & v20.17.0)

## Guiding Principles

- Fat Models thin Views
  - ie logic belongs in the models not the views

## Video 1

We begin by setting up the project. Run the following in your terminal

```python
python -m venv .venv
.venv\Scripts\activate.ps1
pip install django djangorestframework
django-admin startproject mywebapp
cd .\mywebapp\
django-admin startapp  api
```

add to mywebapp::settings.py::INSTALLED_APPS

- 'api.apps.ApiConfig'
  - this points to api/apps.py/ApiConfig (class)
- 'rest_framework'
  - this is for the django rest framework that was installed

**URLS setup**

- create urls.py inside api app
- Update project urls
  - add from django.urls import include
  - add : path('', include('api.urls') ),
- add to api>urls.py

```python
from django.urls import path, include
from .views import main

urlpatterns = [
    path('', main ),
]
```

- add to api > views.py

```python
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def main(request):
    return HttpResponse(" Hello - I am api>views.py>main ")
```

## Video 2 - Models and Rest Framework

let's begin by creating an api model ( api > models.py )

- see > api/models.py (class Room & generate_unique_code())

Next Run migrations to update the database

```
mywebapp> python manage.py makemigrations
mywebapp> python manage.py migrate
```

Our next step is to add some display functionality so we may see all the created rooms. This is basically just a list of the room models. In this type of situation our api will not return an HTML page but rather a data structure such as JSON.

For this we create a serializer class

- see > api/serializers.py

## Video 3 - React + Webpack & Babel

- add NPM - if not installed
- django-admin startapp frontend

```
cd frontend
```

- now create a bunch of folders

```
mkdir static
mkdir static/css
mkdir static/images
mkdir static/frontend
mkdir templates
mkdir src
mkdir src/components
```

- initialize/add npm to the project. this will add a 'package.json' file to the frontend dir

```
  npm init -y
```

Now we need to install some NPM packages
- these depend in part on the react version that was installed.
```
npm i webpack webpack-cli --save-dev
# webpack is a total used to bundle & minify javascripts files

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
# babel helps with Javascript compatibility across browsers

npm i react react-dom --save-dev
# installs react and react react-dom

npm install @mui/material @emotion/react @emotion/styled
# some prebuilt styling to make our life easier
# much like bootstrap

npm install @babel/plugin-proposal-class-properties
npm install react-router-dom
npm install @mui/icons-material
```
