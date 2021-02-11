import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import axios from 'axios';

export default class AXIOSMain extends Component {
  state = {
    data: '',
    page: 1,
    showData: false,
    API: 'https://reqres.in/api/users?page=',
  };
  //   API = 'https://reqres.in/api/users?page=';

  ShowApiData = () => {
    let data = this.state.data;
    data.map((data) => {
      console.log(data);
      return <Text>{data.id}</Text>;
    });
  };

  getData = () => {
    // let showData = this.state.showData;
    let data = this.state.data;
    let API = this.state.API;
    let page = this.state.page;
    axios
      .get(API + page)
      .then((response) => {
        // debugger;
        this.setState({data: response.data.data});
        this.setState({showData: true});
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        // this.ShowApiData;
        // let showData = this.state.showData;
        let dat = this.state.data;
        console.log('data = ' + dat);
        console.log(showData);
      });
  };

  render() {
    let showData = this.state.showData;
    let data = this.state.data;

    return (
      <View style={styles.container}>
        <Button title="Get Data" onPress={this.getData} />
        {showData ? (
          data.map((data) => {
            console.log(data);
            return <Text>{data.email}</Text>;
          })
        ) : (
          <Text>Sorry! We are facing technical problem!!!</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
