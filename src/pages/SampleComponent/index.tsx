import React, { Component } from 'react';
import {Image, Text, TextInput, View} from 'react-native';


const SampleComponent = () => {
    return (
   <View>
     <View style={{width: 80, height:80, backgroundColor: 'salmon'}} />
     <Text>Munggaran</Text>
     <Text>Munggaran</Text>
     <Rafi />
     <Photo />
     <TextInput style={{borderWidth: 1}} />
     <BoxGreen />
     <Profile />
   </View>
    );
   };
   
   const Rafi = () => {
     return (
       <Text>Muhammad Rafi</Text>
     );
   };
   
   const Photo = () => {
     return (
       <Image 
     source={{uri: 'https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
     style={{width: 100, height: 100}} 
     />
     );
   };
   
   class BoxGreen extends Component {
     render(){
       return <Text>Ini dari kelas Component</Text>
     }
   }
   
   class Profile extends Component {
     render() {
       return (
       <View>
         <Image 
         source={{uri: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
         style={{width: 100, height: 100, borderRadius: 50}} 
         />
         <Text>Ini Pemandangan Rumput</Text>
       </View>
       )
     }
   }

export default SampleComponent;