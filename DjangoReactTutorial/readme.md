1:31:00 https://www.youtube.com/watch?v=c-QsfbznSXI&list=WL&index=1&t=333s&ab_channel=TechWithTim

> python manage.py makemigrations
> python manage.py migrate
> python manage.py runserver

## References

1. Youtube Tutorial

- https://www.youtube.com/watch?v=c-QsfbznSXI&list=WL&index=1&t=333s&ab_channel=TechWithTim

2. Github Repo

- https://github.com/techwithtim/Django-React-Full-Stack-App

Other

- https://simpleisbetterthancomplex.com/series/beginners-guide/1.11/

## Steps

### Backend

1. Create a folder for your work
2. Create a virtual environment: py -m venv venv\
   - you should now have a folder "venv" inside your folder
3. Activate the virtual environment .\venv\Scripts\activate.bat
4. Install the required packages
   - pip install -r requirements.txt
   - list of required packages can be found at the very bottom
5. create a django project (then move into it)
   - django-admin startproject backend
   - cd backend
6. Create Django app
   - python manage.py startapp api
   - you should now see a new folder api inside backend
7. Now edit the file "backend > settings.py"
   - add importations: "timedelta", "load_env", "os"
   - modify allowed_hosts to "\*"
   - add REST_FRAMEWORK & SIMPLE_JWT
   - add append required apps to INSTALLED_APPS (api, rest_framework, corsheaders)
   - add/append MIDDLEWARE: "corsheaders.middleware.CorsMiddleware"
   - add the following variables at the end of the file
     - CORS_ALLOW_ALL_ORIGINS = True
     - CORS_ALLOWS_CREDENTIALS = True

At this point we will move into the coding portion

1. Begin by
   - coding "class UserSerializer" inside serializers.py
   - coding "class CreateUserView" inside views.py
2. add url to view mappings in urls.py

---

At this point you should have a functioning website so give it a try

```
>python manage.py runserver
```

If you get an error check your files against those in the github repo.
Take a moment to test the following three pages

1. api/user/register/
   - should allow you to create a user
2. api/token/
   - should allow you to login in
   - should also provide you with an access and refresh token
3. api/token/refresh/
   - Will give you a new access token when given the old access token

### Frontend

We begin by setting up the frontend folder (note this needs to be done from the project directory)

```
> npm create vite@latest frontend -- --template react
```

Next you'll be prompted to install a few packages

```
> cd frontend
> npm install
> npm install axios react-router-dom jwt-decode
```

Assuming everything went well the frontend folder should now have several folders and files \

- Begin by deleting the two css files inside "frontend > src"
- go to App.jsx and delete the imports, as well as the contents of the function App(). Keep the function signature, and return with the stub only. Should look like this

```javascript
function App() {
  return <></>;
}

export default App;
```

---

# Misc Notes

### Required Packages

- asgiref
- Django
- django-cors-headers
- djangorestframework
- djangorestframework-simplejwt
- PyJWT
- pytz
- sqlparse
- psycopg2-binary
- python-dotenv

### JWTs

JWT stands for Json Web Token and is used track user permissions and/or authentication. The front end code will pass the access token with each request. The backend code will validate the token and respond accordingly.
