import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_MENU,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };





//child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//     description: 'Pay the bills',
//     note: 'I need to pay hose money',
//     amount: 200,
//     createdAt: 0
// });

// database.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses) 
//     });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })



// const onAgeChange = database.ref('age').on('value', (snapshot) => {
//     console.log('Age: ', snapshot.val());
// })

// database.ref('age').set(20)


// setTimeout(() => {
//     database.ref('age').set(40);
//     database.ref('stressLevel').set(80)
// },2000)


// setTimeout(() => {
//     database.ref('age').off('value', onAgeChange);
// },4000)


// setTimeout(() => {
//     database.ref('age').set(50);
// },6000)


// database.ref().once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//         console.log(snapshot)
//     })

// database.ref().set({
//     name: 'Badawy',
//     age: 47,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location : {
//         city: 'Riyadh',
//         country: 'Saudi Arabia'
//     },
//     isSingle: true 
// }).then(() => {
//     console.log('Data has been saved!')
// }).catch((e) => {
//     console.log('This failed', e)
// });


