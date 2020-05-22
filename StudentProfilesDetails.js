import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../database/firebaseDb';


class StudentProfilesDetails extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('StudentProfiles').doc(this.props.route.params.userkey);
    this.state = {
      isLoading: true,
      userArr: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const schArr = [];
    querySnapshot.forEach((res) => {
      const { StudentName, Question2, Answer1, Question1 } = res.data();
      schArr.push({
        key: res.id,
        res,
        StudentName, 
        Question1,
        Question2,
        Answer1,
      });
    });
    this.setState({
      schArr,
      isLoading: false,
   });
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
            this.state.schArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.StudentName}
                 />
              );
            })
          }
      </ScrollView>
    );

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

export default StudentProfilesDetails;