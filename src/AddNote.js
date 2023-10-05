import logo from './logo.svg';
import './App.css';
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import {useForm, Controller } from 'react-hook-form';


function AddNote(props) {
const { control, handleSubmit } = useForm()
const { onSubmit } = props
const [value, onChangeText] = React.useState("Placeholder");

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Forms</Text>
          <TextInput 
            editable
            multiline
            onChangeText={text => onChangeText(text)}
          />
          <Button title="Submit" onPress={this, onSubmit(value)} />
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 20,
          width: '70%',
        },
      });

export default AddNote;


// textbox for the user to type/speak
// save button, add button

// step 1: make a textbox
// step 2: make a save button for textbox
// step 3: make add button, when clicked, repeat


// next step: optimize for phone