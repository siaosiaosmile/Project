import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View , Alert} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class StudentProfiles extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('StudentProfiles');
    this.state = {
      isLoading: true,
      userArr: []
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
      const { StudentName, SchoolName, CourseName, Description } = res.data();
      schArr.push({
        key: res.id,
        res,
        StudentName, 
        SchoolName, 
        CourseName, 
        Description
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
                  subtitle={item.Description}
                  rightTitle={item.SchoolName}
                  rightSubtitle={item.CourseName}
                  onPress={() => 
                    Alert.alert(item.StudentName,item.Description)}
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

export default StudentProfiles;