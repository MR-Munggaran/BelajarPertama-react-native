import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Pemandangan from '../../assets/image/Gambar.jpg'

export default function index(props) {
  return (
    <View style={styles.container}>
        <Image source={Pemandangan} style={{width:188, height:107, borderRadius: 8}}/>
        <Text style={styles.image}>New Landscape</Text>
        <Text style={{fontSize:12, fontWeight: 'bold', color: 'red', marginTop: 16}}>Rp. 5.000.000</Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12, color: 'black'}}>Pamulang</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
        <View style={{backgroundColor: 'green',paddingVertical:6, borderRadius: 6, marginVertical:20}}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign : 'center'}}>BELI</Text>
        </View>
        </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        marginLeft: 20,
        marginTop: 40,
      },
      container:{
        padding:12, backgroundColor: '#F2F2F2', width:212, borderRadius:8, margin:30
      },
      image:{
        fontSize:14, fontWeight:'bold', marginTop:16, color: 'black'
      }
})