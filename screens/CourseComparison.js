import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class CourseComparison extends React.Component {

  render() {	
	return (
  

    <ScrollView style={styles.general}>

    <View style={styles.padding}/>
    <View style={styles.box}>
    <TouchableOpacity hitSlop={{top: 200, bottom: 200, left: 400, right: 400}}>
     <Text>
     Bachelor of Arts (Communication and Economics) – Full-time
      </Text>
      
      <Entypo name='arrow-with-circle-right' size={40} color='black'/>   
   
 </TouchableOpacity>
 </View>
 
 <View style={styles.padding}/>
    <View style={styles.box}>
    <TouchableOpacity hitSlop={{top: 200, bottom: 200, left: 400, right: 400}}>
     <Text>
     Bachelor of Arts (International Trade and Sociology) – Full-time
      </Text>
      
      <Entypo name='arrow-with-circle-right' size={40} color='black'/>   
        
 </TouchableOpacity>
 </View>     

 <View style={styles.padding}/>
    <View style={styles.box}>
    <TouchableOpacity hitSlop={{top: 200, bottom: 200, left: 400, right: 400}}>
     <Text>
     Bachelor of Arts (Communication and Sociology) Full-time
      </Text> 
      
      <Entypo name='arrow-with-circle-right' size={40} color='black'/>   
       
 </TouchableOpacity>
 </View> 

 <View style={styles.padding}/>
    <View style={styles.box}>
    <TouchableOpacity hitSlop={{top: 200, bottom: 200, left: 400, right: 400}}>
     <Text>
     Bachelor of Psychological Science Full-time
      </Text> 
      
      <Entypo name='arrow-with-circle-right' size={40} color='black'/>   
       
 </TouchableOpacity>
 </View> 
 


   </ScrollView>

     
  );
}
}
