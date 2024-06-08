import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function index() {
  const [dataUser, SetDataUser] = useState({
    title: '',
    body: '',
  });
  const getData = () => {
    axios('https://jsonplaceholder.typicode.com/posts/4')
      .then(result => {
        SetDataUser(result.data);
      })
      .catch(err => console.log(err));
  };

  const [dataJob, setDataJob] = useState({
    title: '',
    body: '',
  });

  const postData = () => {
    const dataForAPI = {
      userId: 2,
      id: 50,
      title: 'Belajar React Native',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };
    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {dataForAPI},
    })
      .then(result => {
        setDataJob(result.data.dataForAPI)
      })
      .catch(err => console.log(err));
  };
  return (
    <View style={{padding: 20}}>
      <Text style={{textAlign: 'center'}}>Call API Dengan Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Text>{dataUser.title}</Text>
      <Text>{dataUser.body}</Text>
      <View style={styles.line}></View>
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.title}</Text>
      <Text>{dataJob.body}</Text>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
});
