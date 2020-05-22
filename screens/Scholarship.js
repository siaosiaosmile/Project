import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class Scholarship extends React.Component {

  render() {	
	return (
  
        
      <View style={styles.background}>
          <View style={styles.padding}/>
          <View style={styles.padding}/>
          <View style={styles.padding}/>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.simge.edu.sg/student-life/scholarships/')}>
    Click to find out about the different types of scholarships that SIM provides
    </Text>
      </View>

     
  );
}
}
