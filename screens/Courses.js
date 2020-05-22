import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../database/firebaseDb';

class Courses extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('Courses');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    console.log("Courses Screen")
    var read = this.props.route.params.userKey
    console.log("read data::",read)


  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const courseArr = [];
    querySnapshot.forEach((res) => {
      const { 
        CourseName, Faculty, Programme, SchoolName, ProgrammeOverview, ProgrammeStructure, EntryQualification, 
        Type, Intakes, YearsOfStudy, Exemptions, Fees, AssessmentAndExams 
      } = res.data();
      courseArr.push({
        key: res.id,
        res,
        CourseName,
        Faculty,
        Programme,
        SchoolName,
        ProgrammeOverview,
        ProgrammeStructure,
        EntryQualification,
        Type,
        Intakes,
        YearsOfStudy,
        Exemptions,
        Fees,
        AssessmentAndExams
      });
    });
    this.setState({
      courseArr,
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
            this.state.courseArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  title={item.CourseName}
                  onPress={() => {
                    this.props.navigation.navigate('Faculties', {
                      userkey: item.key
                    });
                  }}/>
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

export default Courses;