# Instagram Clone with React Native


## Description

This project is a mobile app built with React Native that aims to replicate the functionality and design of the popular social media platform, Instagram. It provides a platform for users to share photos and videos, follow other users, like and comment on posts, and more.

## Features

-   View a feed of posts from users you follow
- Upload photos and videos to share with your followers
- Like and comment on posts
- Follow and unfollow other users
- Explore new content through the "Discover" feature
- View and edit your profile information

## Technologies Used
-   React Native: A JavaScript framework for building native mobile applications
- Firebase: A platform for building web and mobile applications without server-side programming, used for authentication, database, and storage functionalities.
- React Navigation: A library for routing and navigation in React Native applications
- Expo: A framework and platform for universal React applications

### Dependencies

- List of libraries, tools, etc needed (e.g. yarn, node.js, python, etc).

### Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to the project directory:**
   ```
   cd your-repo
   ```

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Create a Firebase project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add project" and follow the instructions to create a new project.
   
5. **Set up Firebase Authentication, Realtime Database, and Storage:**
   - Go to the Firebase Console for your project.
   - Set up authentication, database, and storage according to your project's requirements.

6. **Add your Firebase configuration:**
   - In your project directory, create a file named `firebase.js`.
   - Add your Firebase configuration to `firebase.js`. It should look something like this:
     ```javascript
     import firebase from 'firebase/app';
     import 'firebase/auth';
     import 'firebase/database';
     import 'firebase/storage';

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       databaseURL: "YOUR_DATABASE_URL",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };

     if (!firebase.apps.length) {
       firebase.initializeApp(firebaseConfig);
     }

     export default firebase;
     ```

7. **Run the app:**
   ```
   npm start
   ```
   or
   ```
   expo start
   ```
   Open the Expo app on your mobile device or use an emulator to run the app.


### Run The Service

- List of steps to run the service (e.g. docker commands).

### Microservices

- List of microservices, if any, that this repo uses.

## Testing

- Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Contribute

- Any instructions needed to help others contribute to this repository.

## Deployment

- Step-by-step instructions for updating the code.
