import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GardenerScreen = ({ navigation }) => {
  const [selectedWord, setSelectedWord] = useState('');

  const handleWordSelect = (word) => {
    setSelectedWord(word);
  };

  const renderButton = (word) => {
    const isSelected = selectedWord === word;
    const buttonColor = isSelected ? (word === 'садовник' ? 'green' : 'red') : '#E5E5E5';

    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={() => handleWordSelect(word)}
      >
        <Text style={styles.buttonText}>{word}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Senior')}>
         <Text style={styles.headerText}> ← </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Word practice</Text>
        
      </View>
      <Text style={styles.wordText1}>gardener</Text>
      <Text style={styles.wordText2}>['gɑ:dnə]</Text>
      <View style={styles.buttonsContainer}>
        {renderButton('муха')}
        {renderButton('садовник')}
        {renderButton('гладиолус')}
        {renderButton('собака')}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.twb} onPress={() => navigation.navigate('Senior')}>
        <Text style={styles.bwttxt}>Next</Text>
        </TouchableOpacity>
      </View>
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
    height: 80,
    backgroundColor: '#410FA3',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'Fredoka-M',
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },
  wordText1: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
    fontFamily:'Fredoka-M',
    fontWeight: 600,
    lineHeight: 34, 
  },
  wordText2: {
    fontSize: 18,
    bottom: 10,
    textAlign: 'center',
    fontFamily:'Fredoka-M',
    fontWeight: 400,
    lineHeight: 23, 
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor:  '#E5E5E5',
  },
  twb: {
    backgroundColor: '#410FA3',
    borderRadius: 8,
    height: 48,
    top: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    bottom: 170,
    alignSelf: 'center',
  },
  bwttxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Fredoka-M',
  },
  buttonText: {
    fontFamily:'Fredoka',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
});

export default GardenerScreen;
