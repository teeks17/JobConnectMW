import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db, initializeDatabase } from './database';


const JobCreationScreen = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');

  const handleJobSubmission = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO jobs (title, description, company) VALUES (?, ?, ?)',
        [jobTitle, description, company],
        () => {
          console.log('Job listing created successfully!');
          setJobTitle('');
          setDescription('');
          setCompany('');
        },
        error => {
          console.error('Error creating job listing:', error);
        }
      );
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Job Title"
        value={jobTitle}
        onChangeText={text => setJobTitle(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Company"
        value={company}
        onChangeText={text => setCompany(text)}
        style={{ marginBottom: 10 }}
      />
      <Button title="Create Job Listing" onPress={handleJobSubmission} />
    </View>
  );
};

export default JobCreationScreen;
