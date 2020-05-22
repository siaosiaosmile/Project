import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class FinancialMatters extends React.Component {

  render() {	
	return (
  
        
    <View style={styles.background}>

    <View style={styles.buttonLayout}>
    <View style={styles.border}>
    <TouchableOpacity> 
    <MaterialCommunityIcons 
    name='information-outline' 
    size={90} color='black'
    onPress={() => this.props.navigation.navigate('ModesOfPayment')}
    />
    <Text style={styles.borderText}>Modes Of
          {'\n'}
          Payment </Text>
    </TouchableOpacity>
    </View> 

    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>


  <View style={styles.border}>
    <TouchableOpacity> 
    <MaterialCommunityIcons 
    name='information-outline' 
    size={90} color='black'
    onPress={() => this.props.navigation.navigate('FinancialAssistance')}
    />
    <Text style={styles.borderText}>Financial
          {'\n'}
          Assistance </Text>
    </TouchableOpacity>
  </View> 

  </View>  
    
    
  </View>
  );
}
}
