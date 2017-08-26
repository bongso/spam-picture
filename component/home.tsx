import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface P {}
interface S {}

export class Home extends React.Component<P, S> {
  render() {
    return (
      <View style={styles.container}>
        <Text>this component is coded by typescript</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});