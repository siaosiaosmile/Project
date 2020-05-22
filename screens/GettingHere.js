import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class GettingHere extends React.Component {

  render() {	
	return (
  

    <View style={styles.GettingHere}>
    
    <Text style={styles.GettingHereTextHeading}>
    How to get to SIM HQ
    </Text>

    <Text style={styles.TextAlignLeft}>
    <Text style={styles.GettingHereTextBold}>
    By Car
    </Text>
    {'\n'}
    The campus is easily accessible via Pan-Island Expressway (PIE),
    {'\n'}
    go via Exit 26A and turn into Clementi Road.
    {'\n'}
    {'\n'}
    <Text style={styles.GettingHereTextBold}>
    By Bus
    </Text>
    {'\n'}
    Bus number: 52, 61, 74, 151, 154, 184
    {'\n'}
    {'\n'}
    <Text style={styles.GettingHereTextBold}>
    By MRT
    </Text>
    {'\n'}
    Nearest MRT stations: Clementi, Dover, King Albert Park
    </Text>



    </View>

     
  );
}
}