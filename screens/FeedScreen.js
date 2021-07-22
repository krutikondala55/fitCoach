import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
//import { Header } from 'react-native-elements';
//import db from '../config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
      gender: '',
      reason: '',
    };
  }

  submitStory = () => {
    db.collection('User Details').add({
      height: this.state.height,
      weight: this.state.weight,
      gender: this.state.gender,
      reason: this.state.reason,
    });
    this.setState({
      height: '',
      weight: '',
      gender: '',
      reason: '',
    });
    alert(
      "Your details has been submitted successfully. "
    );
  };

  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>fit coach App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.HeightBox}
          placeholder="Write your height"
          value={this.state.height}
          onChangeText={(text) => this.setState({ height: text })}
        />

        <TextInput
          style={styles.WeightBox}
          placeholder="Write your weigth"
          value={this.state.weight}
          onChangeText={(text) => this.setState({ weight: text })}
        />

        <TextInput
          style={styles.genderBox}
          placeholder="Write your gender"
          value={this.state.gender}
          onChangeText={(text) => this.setState({ gender: text })}
        />

<TextInput
          style={styles.reasonBox}
          placeholder="Write your reason"
          value={this.state.reason}
          onChangeText={(text) => this.setState({ reason: text })}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  header: {
    backgroundColor: 'blue',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  heightBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
   weightBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'blue',
    width: '50%',
    height: 40,
    border: 'dashed',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});
