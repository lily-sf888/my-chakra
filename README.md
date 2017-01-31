##My Chakras

This app uses Express.js, a Node.js framework, for its backend and MongoDB for
database storage. Users are able to record their input and save them in the database.

<img src="chakra-demo.png" alt="chakra demo" />    <img src="chakra-demo1.png" alt="chakra demo"/>

##Overview

My Chakras guides the user through meditation and yoga poses, they are also
able to write about their experience doing the exercises and save them for future
reference.

##Use Case

There's no doubt that our recent technological advancements have allowed us to stay
better connected and made our lives easier in many ways. But when we constantly
focus on a device instead of ourselves and what's going on around us we miss a
great deal. Whether one believes in chakras or not, this app can be used by
anyone who wants to achieve more balance in mind and body through meditation and
yoga.

##UX

The initial wireframes can be seen below:

 <img src="wireframe.png" alt="wireframe" />    <img src="wireframe1.png" alt="wireframe"/>

My Chakras has been designed to give the user a sense of serenity by choosing a
darker, gradient background in order to make the colorful images of the chakras
pop more. Keeping the app simple and easy to use was the overall goal.

After the users log in, they land on the home page where the seven chakras are
displayed. On the left there's a 'How To' link that tells the
user how to proceed with the app. When the users click on one of the chakras,
they land on the chosen chakra's page. Followed by a short description of the chakra
are three input fields where users can write about their experience.

When they hit the submit button, their input is saved and appears in a paragraph
below the input field. This paragraph gets replaced every time the user enters
new input.

##Working Prototype

For a working demo of the app go [here](https://agile-springs-89459.herokuapp.com/).

##Technical

###Tech Stack

* Passport Authentication
* EJS Templating
* MongoDB
* Mongoose
* Mocha Testing
* Travis CI
* Heroku

[My Chakras](https://agile-springs-89459.herokuapp.com/) let's the user register
and login using passport authentication methods. The user's name, password and input information are stored inside the mongoDB database which is hosted by mLab. The pages of this app are written in EJS, a templating language where between <% %> JavaScript is executed.

After users enter their info and hit the submit button, data from the three
input fields get stored inside an object along with the user's name and password. We use different mongoose methods to save, find and update our database with the user's input. A response gets send to the front-end and updates it. When users log in next time, they can see their input saved in a paragraph below the input fields. The text of this paragraph gets replaced every time our users enter new information.

Testing is done through Mocha, which in combination with Travis CI allows for continuous
deployment.  Every time we push up to Github, Travis CI automatically runs mocha and deploys directly to Heroku only if all the tests pass.
