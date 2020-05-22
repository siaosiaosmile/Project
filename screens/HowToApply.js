import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class HowToApply extends React.Component {

  render() {	
	return (
    <View style={styles.background}>


          <View style={styles.padding}/>
          <View style={styles.padding}/>
          <View style={styles.padding}/>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.simge.edu.sg/admissions/how-to-apply/')}>
    Click to find out on how to apply!
    </Text>

  
    </View>

  );
}
}
