import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SeniorScreen = ({ navigation }) => {
  const hadleExer = () => {
    navigation.navigate('Game');
  };
  const hadleLister = () => {
    navigation.navigate('List');
  };
  const hadleGard = () => {
    navigation.navigate('Garden');
  };
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Image
          source={require('./src/images/profile.png')} 
          style={styles.profileIcon}
        />
      
        <Text style={styles.greeting}>Hello, orlovyz</Text>
      
        <Text style={styles.subText}>Are you ready for learning today?</Text>
      </View>
    </View>
      
      <Text style={styles.heading}>Top users</Text>
      
      <Text style={styles.subText2}>There will be rating table here later</Text>

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={hadleExer}>
        <Image
          source={require('./src/images/bear.png')} 
          style={styles.bear}
        />
          <Text style={styles.buttonText} >Guess the animal</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={hadleGard}>
        <Image
          source={require('./src/images/book.png')} 
          style={styles.bear}
        />
          <Text style={styles.buttonText}>Word practice</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={hadleLister}>
        <Image
          source={require('./src/images/headphones.png')} 
          style={styles.bear}
        />
          <Text style={styles.buttonText}>Audition</Text>
         
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
        <Image
          source={require('./src/images/game.png')} 
          style={styles.bear}
        />
          <Text style={styles.buttonText}>Game</Text>
          
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
    height: 110,
    backgroundColor: '#410FA3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    left: 15,
  },
  profileIcon: {
    width: 45,
    height: 45,
    marginRight: 16,
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:'Fredoka-M',
    lineHeight: 20,
    color: '#ffffff'
  },
  subText: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily:'Fredoka-M',
    lineHeight: 22,
    color: '#B6B6B6',
    top: 15,
  },
  subText2: {
    lineHeight:28,
    textAlign:'center',
    fontWeight: 500,
    fontFamily: 'Fredoka-M',
    fontSize: 18,
    marginTop: 12,
    justifyContent:'center',
    width: 263,
    left: 35,
    top: 50,
  },
  heading: {
    fontSize: 20,
    left: 20,
    bottom: 20,
    fontWeight: 'bold',
    marginTop: 24,
    fontFamily:'Fredoka-M',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    top: 150,
    marginHorizontal: 16,
  },
  button1: {

      width: 142,
      height: 117,
      backgroundColor: '#5B7BFE',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 14,
  },
  button2: {

    width: 142,
    height: 117,
    backgroundColor: '#D6185D',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
},
button3: {

  width: 142,
  height: 117,
  backgroundColor: '#F76400',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 14,
},
button4: {

  width: 142,
  height: 117,
  backgroundColor: '#5BA890',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 14,
},
  bear:{
width: 80,
height: 80,
  },
  
  buttonText: {
    fontFamily:'Fredoka',
    fontSize: 16,
    marginRight: 8,
    color: 'white',
  },
});

export default SeniorScreen;