import React from 'react';
import {Image, StyleSheet, Text,  View} from 'react-native';
import Pemandangan from '../../assets/image/Gambar.jpg';

const StylingComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={styles.text}>Styling Components</Text>
        <View style={{width: 100, height: 100, backgroundColor: "salmon", borderWidth: 2, borderColor: "purple", marginTop: 20, marginLeft: 20}}></View>
        <View style={{ padding:12, backgroundColor: '#F2F2F2', width:212, borderRadius:8, margin:30 }}>
          <Image source={Pemandangan} style={{width:188, height:107, borderRadius: 8}}/>
          <Text style={{fontSize:14, fontWeight:'bold', marginTop:16, color: 'black'}}>New Landscape</Text>
          <Text style={{fontSize:12, fontWeight: 'bold', color: 'red', marginTop: 16}}>Rp. 5.000.000</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 12, color: 'black'}}>Pamulang</Text>
          <View style={{backgroundColor: 'green',paddingVertical:6, borderRadius: 6, marginVertical:20}}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign : 'center'}}>BELI</Text>
          </View>
        </View>
      </View>
  
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'red',
      marginLeft: 20,
      marginTop: 40,
    },
  });

export default StylingComponent;