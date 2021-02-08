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
import APICall from './components/APICall';
import AxiosCall from './components/AxiosCall';

// const APIEndPoint =
// // https://reqres.in/api/users?page=1
// It has only two pages.

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // 'https://reactnative.dev/movies.json'

  const API = 'https://reqres.in/api/users?page=';

  useEffect(() => {
    // console.log(API);
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(API + page)
      .then(function (response) {
        // console.log('Hello ' + JSON.stringify(response.data.data));
        const jsonData = JSON.stringify(response.data.data);
        setData([data, jsonData]);
        alert('Hello ' + data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.email}, {item.first_name}
              </Text>
            )}
          />
        )}
      </View>
    );
  };

  const updatePage = () => {
    setPage(page + 1);
  };

  return (
    <ScrollView style={styles.container}>
      <Button title="Get Data" onPress={updatePage} />
      {/* <APICall /> */}
      {/* <AxiosCall /> */}
      {/* {console.log('Data render ' + data)} */}

      {data ? renderFooter : null}
      {/* <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.email}, {item.first_name}
              </Text>
            )}
          />
        )}
      </View> */}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
