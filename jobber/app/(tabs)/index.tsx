
// import * as React from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { Image, StyleSheet, Platform, Button } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { initializeApp } from "firebase/app";
import firestore from '@firebase/firestore';
import { getFirestore, collection, addDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb07IEfH-KXrp8heF66roiLdcRokAQ12s",
  authDomain: "job-connect-mw.firebaseapp.com",
  projectId: "job-connect-mw",
  storageBucket: "job-connect-mw.appspot.com",
  messagingSenderId: "779627175856",
  appId: "1:779627175856:web:cd020b35e026c3c2e20075",
  measurementId: "G-1EDN2EFM2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Define the function to create and store an object in Firestore
const createAndStoreObject = async () => {
  try {
    // Create a sample object
    const sampleObject = {
      title: 'Sample Job',
      description: 'This is a sample job description.',
    };

    // Store the sample object in Firestore
    const docRef = await addDoc(collection(db, 'jobs'), sampleObject);
    console.log('Document written with ID:', docRef.id);
    
    // Retrieve the stored object from Firestore
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const retrievedObject = docSnapshot.data();
      console.log('Retrieved object:', retrievedObject);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error creating/storing/retrieving object:', error);
  }
};

const HomeScreen = () => {
  const handleButtonPress = () => {
    createAndStoreObject();
  };

  return (
    <ThemedView style={styles.container}>
      <Button title="Run Test" onPress={handleButtonPress} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;


// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title"> teeks </ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });