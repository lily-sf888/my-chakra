##My Chakras

My Chakras guides the user through meditation and yoga poses, the users are also
able to write about their experience doing the exercises and save them for future
reference.

<img src="chakra-demo.png" alt="chakra demo" />   <img src="chakra-demo1.png" alt="chakra demo"/>


###Tech Stack

* Passport Authentication
* MongoDB
* Mongoose
* Mocha Testing
* Travis CI
* Heroku

[My Chakras](https://agile-springs-89459.herokuapp.com/) let's the user register
and login using passport authentication methods. The user's name and password information
is stored inside the mongodb database which is hosted by mLab.  Once the users are logged in they
can choose which chakra meditation to try by clicking on one of the chakra links.

This brings the users to the individual chakra page, from there they are asked to
do a meditation and yoga pose.  They are asked to write down their experiences in three
separate text input fields.

The data from the three text input fields gets stored inside an object along with the
user's name and password information.  We use different mongoose methods to save, find and
update our database with the user's input information.  A response gets send to the
front-end and updates it so that when users log in next time, they can see their
input about the chakra saved from last time.

Testing is done through Mocha, which in combination with Travis CI allows for continuous
testing.  Every time we push up to github, Travis CI automatically runs mocha and deploys
directly to Heroku only if all the tests pass.
