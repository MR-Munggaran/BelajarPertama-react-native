import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Item = ({name, email, bidang, press, buttondelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={press}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={buttondelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selected, setSelected] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    if (button === 'Simpan') {
      axios({
        method: 'post',
        url: 'http://192.168.0.12:3004/users',
        data: {
          name,
          email,
          bidang,
        },
      })
        .then(res => {
          console.log(res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
        })
        .catch(err => console.log(err));
    } else if (button === 'Update') {
      axios({
        method: 'put',
        url: `http://192.168.0.12:3004/users/${selected.id}`,
        data: {
          name,
          email,
          bidang,
        },
      })
        .then(res => {
          console.log(res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        })
        .catch(err => console.log(err));
    }
  };

  const getData = () => {
    axios
      .get('http://192.168.0.12:3004/users')
      .then(res => {
        console.log('Res : ', res.data);
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  };

  const selectItem = item => {
    console.log(item);
    setSelected(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = item => {
    console.log(item);
    axios.delete(`http://192.168.0.12:3004/users/${item.id}`).then(res => {
      console.log(res);
    });
    getData();
  };
  return (
    <View style={{padding: 40}}>
      <Text style={{textAlign: 'center', margin: 20}}>Call Local API</Text>
      <Text style={{textAlign: 'center', marginBottom: 30}}>
        Masukan Anggota Kelompok koding
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={value => setName(value)}
        value={name}
        placeholder="Nama Lengkap"
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setEmail(value)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={value => setBidang(value)}
        value={bidang}
        placeholder="Bidang"
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map(user => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            press={() => selectItem(user)}
            buttondelete={() =>
              Alert.alert('Notification', 'Are you sure?', [
                {
                  text: 'No',
                  onPress: () => console.log('your decision is cancel'),
                },
                {text: 'Yes', onPress: () => deleteItem(user)},
              ])
            }
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  desc: {
    marginLeft: 20,
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 15,
  },
  descBidang: {
    fontSize: 12,
    marginTop: 8,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center',
  },
});
