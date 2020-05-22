import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default class StudentLife extends React.Component {

  render() {	
	return (
    <View style={styles.background}>

    <View style={styles.buttonLayout}>
    <View style={styles.border}>
      <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='information-outline' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('StudentDevelopment')}
      />
      <Text style={styles.borderText}>Student
          {'\n'}
          Development </Text>
      </TouchableOpacity>
    </View> 
    
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>
    <View style={styles.padding}/>

    <View style={styles.border}>
    <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='swim' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('CareerDevelopment')}
      />
      <Text style={styles.borderText}>Career
          {'\n'}
          Development </Text>
      </TouchableOpacity>  
    </View>
  </View>


  </View>

  );
}
}
