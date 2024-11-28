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

## Video.03 - React/Webpack/Babel setup

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

Now we need to create some config/script files

- see frontend/babel.config.json
- see frontend/webpack.config.js
  - this defines the webpack bundling src files and output files

Now we need to make some edits to the package.json config files.  
To the script setting

- remove the 'test' script line
- add the following key-value pair

```
"dev": "webpack --mode development --watch",
"build": "webpack --mode production"
```

The first line tells webpack to watch the files and recompile/rebundle as needed.  
The second line is just the bundling instruction

create 'frontend/src/components/index.js'
create 'frontend/templates/frontend/index.html'

- this is filled out like a django template
  - feel free to copy and paste from here
  - https://github.com/techwithtim/.../frontend/templates/frontend/index.html

There is a couple of things about this page that should be pointed out

1. `<div id="app"></div>`

- is used by react as a target container for it's work

2. `<script src="{% static "frontend/main.js" %}"></script>`

- points to the output from the webpack, which is the react javascript that will take control of the page
- to see why open the webpack.config.js and look at the output variable

3. next we need to create the django view 'frontend/views.py'

- this should render the index template
- react will take over after wards

```python
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
```

- this will render the index.html, which will include the bundled javascript

4. we create a urls.py inside frontend in order to route properly and we edit the urls.py in the project urls.py

```python
path('',include('frontend.urls'))
  # goes into project/urls.py
  #
path('',index)
  # put into frontend/urls.py
```

5. Next we need to create some sort of react component in order to test this all out

- create 'frontend/src/components/App.js', copy/paste the code from here
- https://github.com/techwithtim/Music-Controller-Web-App-Tutorial/blob/main/Tutorial%201%20-%204/frontend/src/components/App.js
- **Note** this is just a stub but is helpful to get things up
- Take a moment to notice the following lines
  - const appDiv = createRoot(document.getElementById("app"));
    - this is what locates the div with id App
  - appDiv.render(<App />);
    - this then renders our App component on the appDiv - effectively inserting the contents into the associated div

6. create frontend/src/index.js, with just the following line

```
import App from "./components/App"
```

7. test to see if your program runs

```
> python manage.py runserver
```

- Fix any errors before moving on

8. next we need to run the webpack so it will bundle up our react code as well as any other js into a single minified file

## Video.04 - React Router and Building Components

1. begin by creating a css file 'frontend/static/css/index.css'

- copy paste from
- https://github.com/techwithtim/Music-Controller-Web-App-Tutorial/blob/main/Tutorial%201%20-%204/frontend/static/css/index.css

Let's now take a look at creating a component, then we will hook it into App.js

2. Our goal is to create a HomePage and hook it into the index page

- Create a new page 'frontend/src/component/Homepage.js'
- copy/paste code from .archive/HomePage_js_v1.txt
- next create two more pages: RoomJoinPage.js & CreateRoomPage.js
  - for each page copy the contents from Home
  - edit the class name and the text contents
- import all three pages to App.js
- replace contents of render with

```
  return (
        <div>
          <HomePage />
          <RoomJoinPage />
          <CreateRoomPage />
        </div>
      );
```

Run each server and ensure they're working correctly

Of course while this is a good start we would ideally want the user to select a path from the home
page and the appropriate page should render accordingly. this is where React router comes in useful.

- remove RoomJoinPage & CreateRoomPage from App.js and place them into HomePage.js
- add the following import
  - import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom"
  - we will be using these as we go along
- Currently the Homepage render should look like this
  ```
  render(){
      return <p>This is the HomePage</p>
    }
  ```
- instead we will implement a router using a Routes statement

```html
render(){
  return (
      <Router>
          <Routes>
              <Route path="/" element={<p>This is the home page</p>} />
              <Route path="/join" element={<RoomJoinPage />}></Route>
              <Route path="/create" element={<CreateRoomPage />}></Route>
          </Routes>
      </Router>
    );
  }
```

- at this point your site should be runnable, furthermore you will need to use the above
  suffixes in order to get to the appropriate page

<Route path='/join' element={<RoomJoinPage />} />
<Route path='/create' element={<CreateRoomPage />} />

## Video.05 - Handling POST Requests

In this section we look to create a form that can be submitted using an APIView.
We won't use react in this part, it will suffice to use Django to get it up and working.
In the next section we will use react & material ui to create a front facing form for users

- we begin by creating a new serializer 'CreateRoomSerializer'
- this will require three part to work properly
  - a new serializer class to our views
  - a new class view: CreateRoomView

## Video.06 - Material UI Form submission

Continuing the previous form, in this section we create a user facing form for creating form. It will use the classes
created in the previous section

Goal: to create & submit a form using react, django backend

- our focus begins by editing the 'fronend/src/components/CreateRoomPage.js'

## Video.07 - Calling API Endpoints

In this section we will create a room page so the user can see the room details.

- create a Room.js Component much like CreateRoomPage.js

  - create a file
  - create a react Room class
  - set the default state
  - create a render that displays the default state variables

1. Create a route for the room page in HomePage.js

- add import Room from ...
- add react Route `<Route path='/room/:roomCode' element={<Room />}></Route>`
  - note React will take the room code and place it in a variable called roomCode
  - ie this.roomCode = this.props.match.params.roomCode

2. add url path to 'frontend/urls.py'

- path('room/<str:roomCode>',index),

3. populate the Room.js file

- copy/paste contents from 'frontend/src/components/Room.js'

At this point you should be able to run your webapp. However, it will catch any string code and display it. Of course what we really want is the details for an existing room. Which is what we will implement next

We will be working in 'api/views.py'

1. add a function: class GetRoom(APIView):

## Video.08 - RoomJoinPage

## Video.09 - HomePage Enhancements

https://www.youtube.com/watch?v=ZP8ZMlKjT4o&list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j&index=9&ab_channel=TechWithTim

1. First step is to restyle the home page

- Add a welcome header/header
- add buttons for CreateRoom and Join Room

2. Add redirection to each of the buttons, as well as an autoredirection. if the user lands on the homepage and they are
   already in a room then they will be redirected automatically

- we begin by adding a view to api/views.py. this will return the session room_code.
- we will also need to use react to call the view and handle the response. which may be null if the user hasn't joined a room yet
  - recall that the JoinRoom view sets the 'room_code' in the session variable

## Video.10 - Sessions & Leaving Rooms

https://www.youtube.com/watch?v=uhyHwY94vwQ&list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j&index=10&ab_channel=TechWithTim

- currently there is a bug of some sort.
- The user can leave a room if they have come from the HomePage
- But there seems to be issues when trying to leave a room if the user came from JoinRoom or from CreateRoom pages
