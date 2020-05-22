import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class Faculties extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Faculties');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection)
    console.log("Faculty Screen")

  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const facArr = [];
    querySnapshot.forEach((res) => {
      const { FacultyName } = res.data();
      facArr.push({
        key: res.id,
        res,
        FacultyName
      });
    });
    this.setState({
      facArr,
      isLoading: false,
   });
  }

OnPress= (key) => {
   console.log(key)  
}

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.container}>
          {
            this.state.facArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.FacultyName}
                  //onPress={() => {
                    //this.props.navigation.navigate('Courses', {
                      //userkey: "Testing data"
                   // });
                  //}}
                  onPress ={()=> this.OnPress(item.key)}

                  />
              );
            })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Faculties;