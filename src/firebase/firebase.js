import firebase from 'firebase';
import 'firebase/database';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


export { firebase, database as default };





// // child_removed.
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed.
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added.
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Gum',
//     note: 'Bought gum at store.',
//     amount: 100,
//     createdAt: 1000
// });

// database.ref('notes').push({
//     title: 'Note 0a',
//     body: 'Note 0a body.'
// });

// const firebaseNotes = {
//     notes: {
//         asdf: {
//             title: 'Note 1',
//             body: 'Note 1 body.'
//         },
//         qwer: {
//             title: 'Note 2',
//             body: 'Note 2 body.'
//         }
//     }
// };

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();

//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// const onValueChange = database.ref().on('value', (snapshot)=> {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(10);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(12);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();

//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data.', e);
//     });


// database.ref().set({
//     name: 'Tikaani Aurora',
//     age: 5,
//     stressLevel: 6,
//     job: {
//         title: 'Princess',
//         company: 'Google'
//     },
//     location: {
//         city: 'Hilton Head Island, SC',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

//database.ref('isActive').set(null);

// database.ref('isActive').remove()
//     .then(() => {
//         console.log("Remove succeeded.")
//     }).catch((error) => {
//         console.log("Remove failed: " + error.message)
//     });
