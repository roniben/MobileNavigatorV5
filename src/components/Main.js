import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  componentWillMount(){
    //before components render
  }
  componentDidCatch(){  
    //catch render error
  }
  componentDidMount(){
    //after components render
  }
  componentDidUpdate(){
    //render update
  }
  componentWillReceiveProps
  static navigationOptions = {
    header: null
  }



  render() {
    return (
      <Container>
      </Container>
    );
  }
}

export default Main;
