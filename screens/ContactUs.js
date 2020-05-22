import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class ContactUs extends React.Component {

  render() {	
	return (
  

    <View style={styles.background}>
    
    <Text style={styles.TextHeading}>
    General Enquiries
    </Text>

    <Text style={styles.TextAlignCenter}>
    8.30am to 5.30pm (Mon-Fri)
    {'\n'}
    8.30am to 12.30pm (Saturday)
    {'\n'} {'\n'}
    Tel: 6468 8866
    {'\n'}
    Email: receptions@sim.edu.sg
    </Text>

    <View style={styles.padding}/>

     <Text style={styles.TextHeading}>
    Student Services Enquiries
    </Text>  
   
    <Text style={styles.TextAlignCenter}>
    8.30am to 5.30pm (Mon-Fri)
    {'\n'}
    9.00am to 1.00pm (Saturdays)
    {'\n'}
    Closed on public holidays and SIM / SIMPL shutdown days
    {'\n'} {'\n'}
    Tel: 6248 9393
    {'\n'}
    Email: students@sim.edu.sg
    </Text>

    <Text style={styles.TextHeading}>
    Programmes Enquiries
    </Text>  
   
    <Text style={styles.TextAlignCenter}>
    8.30am to 5.30pm (Mon-Fri)
    {'\n'}
    9.00am to 1.00pm (Saturdays)
    {'\n'}
    Closed on public holidays and SIM shutdown days (Eve of Christmas Day, Eve
    {'\n'}
    of New Year’s Day and Eve of Chinese New Year)
    {'\n'} {'\n'}
    Tel: 6248 9746
    {'\n'}
    Email: study@sim.edu.sg
    </Text>

    </View>

     
  );
}
}
