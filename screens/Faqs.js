import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class Faqs extends React.Component {

  render() {	
	return (
  

    <View style={styles.GettingHere}>
    
    <Text style={styles.GettingHereTextHeading}>
    List of Frequently Asked Questions
    {'\n'} 
    </Text>

    <Text style={styles.GettingHereTextBold}>
    How are applicants selected? Are interviews or tests a part of the selection process?
    {'\n'}  
    </Text>

    <Text>
     Selection is done by an Academic Committee (AC).  Admission is not automatic.  Only students who can demonstrate through their application that they are likely to perform at a high level and cope with the demands of the programme will be accepted.  There are no admission tests.  However, interviews may be conducted at the discretion of the University. 
     {'\n'} 
    </Text>

    <Text style={styles.GettingHereTextBold}>
    How long does it take for my application to be processed and to get a reply?
    {'\n'}  
    </Text>

    <Text>
    All applicants will be informed of their application outcome via applicants’ email and SIM applicant portal within one month of course commencement. Verbal offers of admission will not be made nor accepted. The Admissions Committee selects students for admission into the programme based on individual merits. Possession of one or more of the qualifications listed does not guarantee automatic entry to the programme.

    {'\n'} 
    SIM and our university partners reserve the right to withdraw an offer of admission and cancel the enrolment of any person where such an offer was made on the basis of incomplete or inaccurate information supplied by the applicant or a certifying authority.
    </Text>

    </View>

     
  );
}
}