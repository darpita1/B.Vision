# B.Vision

B.Vision, or Bhangra Vision, is an application created for all audiences who want to learn or choreograph bhangra dance. Users can create an account, view bhangra step tutorials, and visualize dance choreography from the comfort of your home.

# Education Module: Dance Tutorials

We use Learn Bhangra youtube videos to teach our users the form and technique behind specific bhangra steps. (https://www.youtube.com/channel/UCOHMGJL3oMozRY6QikotGxg). Once a user has selects a step from our autocomplete search bar, there are two means of accessing the youtube tutorial: 1) a hyperlink and 2) a QR code so users can easily access the video on a mobile device. 

Our QR code is generated through the use of an API: QR Code Generator

Create a QR Code: https://api.qrserver.com/v1/create-qr-code/?size=<length>x<widgth>&data=<URL> 
  
# Video Concatenator: Transloadit

https://transloadit.com/docs/

We used transloadit to concatenate our videos and stored them in Google Cloud Storage

# Google Cloud Storage

Retrieve file from Google Storage Bucket: https://storage.cloud.google.com/<Google Bucket Name>/<File Path>

# Firebase 

Google Firebase Authentication was used for B.Vision's create account and log-in systems. The Firebase Realtime database was used to store and manipulate user data each time a user created a new account, created/deleted bhangra videos and modified their profile information. User info was stored with a unique key that was generated from the user's email address. URLs of created videos are added into an array under each user in the Realtime database.




 
