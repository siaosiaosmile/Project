import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class Map extends React.Component {

  render() {	
	return (
  

      <View style={styles.background}>

        <Image 
        style={styles.Map}
        source = {require('../assets/SimMap.jpg')}
        resizeMode="contain"
        />
      </View>

     
  );
}
}
