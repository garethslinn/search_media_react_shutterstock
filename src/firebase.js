import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBGJOTThY4CyKZI_W8mrXehB3NIlkOZKMI",
    authDomain: "media-search-74d96.firebaseapp.com",
    databaseURL: "https://media-search-74d96.firebaseio.com",
    projectId: "media-search-74d96",
    storageBucket: "media-search-74d96.appspot.com",
    messagingSenderId: "446698473395"
};

export const firebaseApp = firebase.initializeApp(config);
