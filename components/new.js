import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
// import APICall from './components/APICall';
// import AxiosCall from './components/AxiosCall';

// const APIEndPoint =
// // https://reqres.in/api/users?page=1
// It has only two pages.

const App = () => {
  const [showData, setShowData] = useState(false);
  const state = {
    data: '',
  };
  const [page, setPage] = useState(1);
  // 'https://reactnative.dev/movies.json'

  const API = 'https://reqres.in/api/users?page=';

  const ShowApiData = () => {
    state.data.map((data) => {
      return <Text>{data.id}</Text>;
    });
  };

  const getData = (page) => {
    axios
      .get(API + page)
      .then((response) => {
        // debugger;
        state.data = response.data.data;
        // console.log(state.data);
        // ShowApiData();
        setShowData(true);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        // console.log(state.data[0]);
        return state.data.map((rowItem, id) => {
          return (
            <TouchableOpacity key={id}>
              <Text>{rowItem.email}</Text>
            </TouchableOpacity>
          );
        });
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Get Data" onPress={getData(page)} />
      {/* <APICall /> */}
      {/* <AxiosCall /> */}

      {showData ? (
        // ShowApiData
        console.log(state.data[0])
      ) : (
        // state.data.map((data, id) => <Text>{data.email}</Text>)
        <Text>Sorry! We are facing technical problem!!!</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
