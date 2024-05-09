import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { firebase } from './firebaseConfig'; // Assuming your Firebase config file

const CreateJobScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');

  const handleCreateJob = async () => {
    try {
      const jobRef = await firebase.firestore().collection('jobs').add({
        title,
        description,
        company,
      });
      console.log('Job created successfully:', jobRef.id);
      // Optionally, clear form fields or navigate back to a job list screen
    } catch (error) {
      console.error('Error creating job:', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Job Title"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Job Description"
        multiline={true}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        value={company}
        onChangeText={setCompany}
        placeholder="Company Name"
        style={{ marginBottom: 10 }}
      />
      <Button title="Create Job" onPress={handleCreateJob} />
    </View>
  );
};

export default CreateJobScreen;
