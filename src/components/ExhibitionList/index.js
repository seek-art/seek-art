import React, { Component } from 'react';
import ExhibitionCard from '../ExhibitionCard';
import { View, FlatList, StyleSheet } from 'react-native';


class ExhibitionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={
            ({item, i}) => (
              <ExhibitionCard key={i} style={styles.item} />
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
})


export default ExhibitionList;