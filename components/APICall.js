import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';

export default APICall = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <View>
      <Button title="Get Data" onPress={getData} />
      <View style={{flex: 1, padding: 24}}>
        {data ? (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        ) : (
          //   <ActivityIndicator />
          <Text>We are getting your data!!!</Text>
        )}
      </View>
    </View>
  );
};
