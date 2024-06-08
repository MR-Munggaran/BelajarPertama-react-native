import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Story = (props) =>{
    return (
        <View style={{alignItems: 'center', marginRight: 20, marginTop:50}}>
            <Image source={{uri: props.image}} style={{width: 70, height:70, borderRadius: 50}}/>
            <Text style={{maxWidth: 50, textAlign:'center'}}>{props.name}</Text>
        </View>
    )
}

export default function PropsDinamis() {
  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center'}}>Materi Component Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
        <Story name="Channel Yotube" image = 'https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Story name="Kelas Belajar" image = 'https://plus.unsplash.com/premium_photo-1683769251695-963095b23d67?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Story name="My Own" image= 'https://plus.unsplash.com/premium_photo-1683769252800-57c99245048a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Story name="Food" image= 'https://images.unsplash.com/photo-1679939153983-07827f66e672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Story name="Real Estate" image= 'https://images.unsplash.com/photo-1679939153983-07827f66e672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Story name="Sport" image= 'https://images.unsplash.com/photo-1679939153983-07827f66e672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Story name="Law" image= 'https://images.unsplash.com/photo-1679939153983-07827f66e672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Story name="Politcs" image= 'https://images.unsplash.com/photo-1679939153983-07827f66e672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Story name="Lifestyle" image= 'https://images.unsplash.com/photo-1679939153983-07827f66e672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </View>

        <Story name='rafi'/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})