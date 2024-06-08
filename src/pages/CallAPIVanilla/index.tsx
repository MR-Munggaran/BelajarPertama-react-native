import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function index() {
  const [dataUser, SetDataUser] = useState({
    title: '',
    body: '',
  });
  useEffect(() => {
    // //call API Method GET
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // //call API Method POST
    // const dataForAPI = {
    //   userId: 2,
    //   id: 50,
    //   title: "Belajar React Native",
    //   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // }
    // fetch('https://jsonplaceholder.typicode.com/posts',{
    //   method:'POST',
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify(dataForAPI)
    // })
    // .then(response => response.json())
    // .then(json => console.log(json))
  }, []);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        SetDataUser(json)
      });
  };

  const [dataJob, setDataJob] = useState({
    title: '',
    body: ''
  })

  const postData = () => {
    const dataForAPI = {
        userId: 2,
        id: 50,
        title: "Belajar React Native",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      };
      fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(dataForAPI)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setDataJob(json)
    })
  }
  return (
    <View style={{padding: 20}}>
      <Text style={{textAlign: 'center'}}>Call API Dengan VanilaJS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Text>{dataUser.title}</Text>
      <Text>{dataUser.body}</Text>
      <View style={styles.line}></View>
      <Button title="POST DATA" onPress={postData}/>
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
