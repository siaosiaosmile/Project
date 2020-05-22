import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class Admissions extends React.Component {

  render() {	
	return (
    <View style={styles.background}>

    <View style={styles.buttonLayout}>
    <View style={styles.border}>
    <TouchableOpacity> 
    <MaterialCommunityIcons 
    name='information-outline' 
    size={90} color='black'
    onPress={() => this.props.navigation.navigate('FinancialMatters')}
    />
    <Text style={styles.borderText}>Financial
          {'\n'}
          Matters </Text>
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
    onPress={() => this.props.navigation.navigate('Scholarship')}
    />
    <Text style={styles.borderText}>Scholarship</Text>
    </TouchableOpacity>
  </View> 

  </View>  

  <View style={styles.padding}/>

  <View style={styles.buttonLayout}>
    <View style={styles.border}>
    <TouchableOpacity> 
    <MaterialCommunityIcons 
    name='information-outline' 
    size={90} color='black'
    onPress={() => this.props.navigation.navigate('HowToApply')}
    />
    <Text style={styles.borderText}>How To Apply</Text>
    </TouchableOpacity>
    </View> 
    
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    
  </View>

  

    
    
  </View>



  );
}
}
