import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class Registration extends React.Component {

  render() {	
	return (
  
<View style={styles.background}>


<View style={styles.border}>
  <TouchableOpacity> 
  <MaterialCommunityIcons 
  name='information-outline' 
  size={90} color='black'
  onPress={() => this.props.navigation.navigate('Admissions')}
  />
  <Text style={styles.borderText}>Admissions</Text>
  </TouchableOpacity>
</View> 


<TouchableOpacity style={styles.signupBtn} onPress={() => this.props.navigation.goBack()}>
<Text style={styles.loginText}>Back To Homepage</Text>
</TouchableOpacity>



</View>     
  );
}
}
