##My Chakra App

[My Chakra App](https://agile-springs-89459.herokuapp.com/) let's the user register
and login using passport authentication methods. The user's name and password information
is stored inside the mongodb database which is hosted by mLab.  Once the users are logged in they
can choose which chakra meditation to try by clicking on one of the chakra links.

This brings the users to the individual chakra page, from there they are asked to 
do a meditation and yoga pose.  They are asked to write down their experiences in three
separate text input fields. 

The data from the three text input fields gets stored inside an object along with the 
user's name and password information.  We use the mongoose method 'findByIdAndUpdate' to
update our database with the user's input information.  A response gets send to the
front-end and updates it so that when user logs in next time, they can see their 
input about the chakra saved from last time.
