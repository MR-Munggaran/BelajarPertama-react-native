import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const JumlahSegitiga = props => {
  const [hasil, setHasil] = useState();
  return (
    <View>
      <TouchableOpacity
        onPress={() => setHasil(props.alas * props.tinggi * 0.5)}>
        <View
          style={{
            backgroundColor: '#114232',
            paddingVertical: 6,
            borderRadius: 6,
            height: 40,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Jumlahkan
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#FFF3C7',
          margin: 30,
          height: 200,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 20,
            paddingBottom: 35,
          }}>
          {' '}
          Hasil Luas Segitiga
        </Text>
        <Text style={{textAlign: 'center', color: 'black', fontSize: 30}}>
          {hasil} Cm^2
        </Text>
      </View>
    </View>
  );
};
const JumlahPersegiPanjang = props => {
  const [hasil, setHasil] = useState(0);
  return (
    <View>
      <TouchableOpacity onPress={() => setHasil(props.panjang * props.lebar)}>
        <View
          style={{
            backgroundColor: '#114232',
            paddingVertical: 6,
            borderRadius: 6,
            height: 40,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Jumlahkan
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#FFF3C7',
          margin: 30,
          height: 200,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 20,
            paddingBottom: 35,
          }}>
          {' '}
          Hasil Luas Persegi Panjang
        </Text>
        <Text style={{textAlign: 'center', color: 'black', fontSize: 30}}>
          {hasil} Cm^2
        </Text>
      </View>
    </View>
  );
};

const PerhitunganSegitiga = () => {
  const [alas, setAlas] = useState(0);
  const [tinggi, setTinggi] = useState(0);
  return (
    <View style={{padding: 20}}>
      <Text style={styles.title}>Luas Segitiga</Text>
      <Text style={{marginTop: 50, marginLeft: 20}}>Masukan alas</Text>
      <TextInput
        style={styles.input}
        value={alas}
        onChangeText={text => setAlas(parseFloat(text))}
        keyboardType="numeric"
      />
      <Text style={{marginTop: 20, marginLeft: 20}}>Masukan Tinggi</Text>
      <TextInput
        style={styles.input}
        value={tinggi}
        onChangeText={text => setTinggi(parseFloat(text))}
        keyboardType="numeric"
      />
      <JumlahSegitiga alas={alas} tinggi={tinggi} />
    </View>
  );
};
const PerhitunganPersegiPanjang = () => {
  const [panjang, setPanjang] = useState(0);
  const [lebar, setLebar] = useState(0);
  return (
    <View style={{padding: 20}}>
      <Text style={styles.title}>Luas Persegi Panjang</Text>
      <Text style={{marginTop: 50, marginLeft: 20}}>Masukan Panjang</Text>
      <TextInput
        style={styles.input}
        value={panjang}
        onChangeText={text => setPanjang(parseFloat(text))}
        keyboardType="numeric"
      />
      <Text style={{marginTop: 20, marginLeft: 20}}>Masukan Lebar</Text>
      <TextInput
        style={styles.input}
        value={lebar}
        onChangeText={text => setLebar(parseFloat(text))}
        keyboardType="numeric"
      />
      <JumlahPersegiPanjang panjang={panjang} lebar={lebar} />
    </View>
  );
};

export default function index() {
  return (
    <View>
      <PerhitunganSegitiga />
      <View style={{backgroundColor: 'black', height: 60}}></View>
      <PerhitunganPersegiPanjang />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginBottom: 50,
  },
  button: {
    // Gaya untuk elemen Button
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
  },
});
