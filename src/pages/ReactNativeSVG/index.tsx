import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IllustrationApp from '../../assets/image/undraw.svg'
export default function index() {
  return (
    <View style={{padding:20}}>
      <Text style={{textAlign:'center'}}>TEST SVG</Text>
      <IllustrationApp width={244} height={125} />
    </View>
  )
}

const styles = StyleSheet.create({})