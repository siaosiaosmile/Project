import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles.js'
import { Ionicons, Feather, Foundation, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


export default class GeneralInformation extends React.Component {

  render() {	
	return (
  

      <View style={styles.background}>

        <View style={styles.buttonLayout}>
        <View style={styles.border}>
          <TouchableOpacity> 
          <MaterialCommunityIcons 
          name='information-outline' 
          size={90} color='black'
          onPress={() => this.props.navigation.navigate('Map')}
          />
          <Text style={styles.borderText}>Map</Text>
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
          onPress={() => this.props.navigation.navigate('Faqs')}
          />
          <Text style={styles.borderText}>Faqs</Text>
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
          onPress={() => this.props.navigation.navigate('GettingHere')}
          />
          <Text style={styles.borderText}>Getting Here</Text>
      </TouchableOpacity>  
      </View>

      <View style={styles.padding}/>
        <View style={styles.padding}/>
        <View style={styles.padding}/>
        <View style={styles.padding}/>
        
      <View style={styles.border}>
      <TouchableOpacity> 
          <Entypo 
          name='open-book' 
          size={90} color='black'
          onPress={() => this.props.navigation.navigate('ContactUs')}
          />
          <Text style={styles.borderText}>Contact Us</Text>
      </TouchableOpacity>  
      </View>

    </View>

    <TouchableOpacity style={styles.signupBtn} onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.loginText}>Back To Homepage</Text>
      </TouchableOpacity>

      </View>

     
  );
}
}
