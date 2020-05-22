import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class SchoolInformation extends React.Component {

  render() {	
	return (
    <View style={styles.background}>

    <View style={styles.buttonLayout}>
    <View style={styles.border}>
      <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='information-outline' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('Programmes')}
      />
      <Text style={styles.borderText}>Programmes</Text>
      </TouchableOpacity>
    </View> 

    <View style={styles.padding} />
    <View style={styles.padding} />
    <View style={styles.padding} />
    
    <View style={styles.border}>
    <TouchableOpacity> 
      <MaterialCommunityIcons 
      name='swim' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('Schools')}
      />
      <Text style={styles.borderText}>Schools</Text>
      </TouchableOpacity>  
    </View>
  </View>

  <View style={styles.padding}/>
  
  <View style={styles.buttonLayout}>
  <View style={styles.border}>
  <TouchableOpacity> 
      <Entypo 
      name='open-book' 
      size={90} color='black'
      onPress={() => this.props.navigation.navigate('CourseComparison')}
      />
      <Text style={styles.borderText}>Course
          {'\n'}
          Comparison </Text>
  </TouchableOpacity>  
  </View>

  <View style={styles.padding} />
    <View style={styles.padding} />
    <View style={styles.padding} />
    <View style={styles.padding} />
    <View style={styles.padding} />
    <View style={styles.padding} />
    <View style={styles.padding} />
    <View style={styles.padding} />
    <View style={styles.padding} />



</View>

<TouchableOpacity style={styles.signupBtn} onPress={() => this.props.navigation.goBack()}>
    <Text style={styles.loginText}>Back To Homepage</Text>
  </TouchableOpacity>

  </View>

  );
}
}
