import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, FlatList, Image} from 'react-native';
import axios from 'axios';

export default class AXIOSCall extends Component {
  state = {
    data: '',
    page: 1,
    showData: false,
    API: 'https://reqres.in/api/users?page=',
  };

  getData = () => {
    let data = this.state.data;
    let API = this.state.API;
    let page = this.state.page;
    axios
      .get(API + page)
      .then((response) => {
        this.setState({data: response.data.data});
        this.setState({showData: true});
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        let dat = this.state.data;
        console.log('data = ' + dat);
        console.log(showData);
      });
  };

  renderItem = ({item}) => (
    <View style={styles.list}>
      <View>
        <Image style={styles.image} source={{uri: item.avatar}} />
      </View>
      <View style={styles.sublist}>
        <Text style={styles.title}>{item.first_name}</Text>
        <Text style={styles.title}>{item.last_name}</Text>
      </View>
      <View style={styles.subheading}>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );

  render() {
    let showData = this.state.showData;
    let data = this.state.data;

    return (
      <View style={styles.container}>
        <Button title="Get Data" onPress={this.getData} />
        {showData ? (
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text>Sorry! We are facing technical problem!!!</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'grey',
    margin: 5,
    borderRadius: 3,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  sublist: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  title: {
    fontSize: 15,
  },
  subheading: {},
});
