import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Guess = ({ navigation }) => {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');

 
  const checkAnswer = () => {
    if (answer.toLowerCase() === 'giraffe') { 
      setResult('Holly Molly! That is right!');
    } else {
      setResult('Eh... Wrong answer!');
    }
  };

  
  const goBackToMainScreen = () => {
    navigation.navigate('Senior');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
      <TouchableOpacity onPress={goBackToMainScreen}>
          <Image
            source={require('./src/images/left_arrow1.png')} 
            style={styles.arrowIcon1}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Exercise</Text>
      </View>
      <Image
        source={require('./src/images/giraffe.png')} 
        style={styles.image}
      />
      
      <Text style={styles.question}>Write who is on image:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setAnswer(text)}
        value={answer}
      />
      
      <TouchableOpacity style={styles.button} onPress={checkAnswer}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
     
      <Text style={styles.results}>{result}</Text>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#410FA3',
    height: 80,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    
  },
  arrowIcon1: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 16,
    right: 90,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Fredoka-M',
    right: 20,
  },
  image: {
    top: 20,
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  results: {
alignSelf: 'center',
 fontFamily: 'Fredoka-M',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 20,
    top:30,
  }, 
  question: {
    fontFamily: 'Fredoka',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 20,
    top:20,
    left: 30,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 16,
    marginTop: 24,
    fontFamily: 'Fredoka',
    alignSelf: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#5B7BFE',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'center',
    top: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Guess;
