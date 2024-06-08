import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component, useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)
  return (
    <View>
      <Text style={styles.textTitle}>{number}</Text>
      <Button title='Tambah' onPress={()=> setNumber(number + 1)}/>
    </View>
  );
};

class CounterClass extends Component{
  state = {
    number: 0,
  }
  render(): React.ReactNode {
      return(
        <View>
        <Text style={styles.textTitle}>{this.state.number}</Text>
        <Button title='Tambah' onPress={()=> this.setState({number: this.state.number + 1})}/>
      </View>
      )
  }
}

export default function Index() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Halaman Index State Dinamis</Text>
      <Text style={styles.titleSection}>Function Component</Text>
      <Counter />
      <Text style={styles.titleSection}>Class Component</Text>
      <CounterClass />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center',
    padding:10,
    fontSize : 30
  },
  titleSection:{
    marginTop: 20
  }
})