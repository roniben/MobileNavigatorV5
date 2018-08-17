/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

import { Container, Content, Form, Item, Input, Label, Button } from "native-base";
import { StackActions, NavigationActions } from "react-navigation";
import * as firebase from 'firebase';

export default class App extends Component{

  static navigationOptions = {
    header: null
  }
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:'',
    }
  }

  handleLogin = () => {
    if(this.state.username == 'admin' && this.state.password == 'admin'){
      this.props.navigation.navigate('Home');
    }
  }

  componentWillMount() {
    const firebaseConfig={
      apiKey:'AIzaSyA0ScP3znhrmxTgtDk_Wgrs3K6v3MQyz8Q',
      authDomain:'mobilenavigator-react.firebaseapp.com',
    }
    firebase.initializeApp(firebaseConfig);
  }
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.props.navigation.dispatch(StackActions.reset({
  //       index:0,
  //       actions:[ NavigationActions.navigate({ routeName:'Main' }) ]
  //     })
  //   )
  //   }, 100000);
  // }

  render() {
    return (
      <Container
          style={{
            padding:40
            }}>
        <Content>
        <Image
          source={require('./src/images/logo.png')}
          style={{ 
            height: 150, 
            width: null, 
            flex: 1, 
            resizeMode: 'contain',
            marginTop: 50
          }}/>
        <Form 
          style={{
            margin: 0,
            padding:5
          }}>

            <Item floatingLabel
            style ={{
              marginLeft: 0
            }}>
            <Label>Username</Label>
              <Input 
              onChangeText={(text) => this.setState({username:text})}
              value={this.state.username}/>
            </Item>

            <Item floatingLabel
            style={{
              marginLeft: 0
            }}>
            <Label>Password</Label>
              <Input 
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password:text})}
              value={this.state.password}
              autoCorrect={false}
               />
            </Item>
          </Form>

          <Button block success
            style= {{
              marginTop: 20
            }} 
            onPress={ () => { this.handleLogin() }}
            >
              <Text
              style={{
                color:"#ffff"
              }}>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

{/* <TextInput
style={{height: 40, borderColor: 'gray', borderWidth: 1}}
onChangeText={(text) => this.setState({text})}
value={this.state.text}
/> */}