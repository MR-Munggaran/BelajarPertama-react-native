import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import cart from '../../assets/image/cart.jpg'

export default function index(props) {
  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.Font}>Keranjang Belanja Anda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    iconCart: {
        width: 50,
        height: 50,
      },
      cartWrapper:{
        borderWidth: 1,
        borderColor: 'green',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      Font:{
        fontSize: 12,
        color:'salmon',
        fontWeight: 'bold',
        marginTop: 8
      },
      notif:{
        fontSize: 12,
        color: 'white',
        backgroundColor: 'green',
        padding: 4, 
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
      }
})