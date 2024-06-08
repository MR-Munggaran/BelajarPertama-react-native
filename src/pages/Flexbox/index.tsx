import React, {Component, useEffect} from 'react';
import {Image, Text, View} from 'react-native';

// class Flexbox extends Component {
//   constructor(props){
//     super(props);
//     console.log("=====> Constructor");
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount(): void {
//       console.log("===> component did mount")
//       setTimeout(()=>{
//         this.setState({
//           subscriber: 10000,
//         })
//       }, 2000)
//   }

//   componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
//       console.log("component did update")
//   }

//   render() {
//     console.log("render")
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#EEEDEB',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#FBA834', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#333A73', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#387ADF', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#50C4ED', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginVertical: 20,
//             marginHorizontal: 20,
//           }}>
//           <Image
//             source={{
//               uri: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>Munggaran</Text>
//             <Text>{this.state.subscriber} Subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const Flexbox = () => {
  useEffect(()=>{
    console.log('did mount');
  })
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#EEEDEB',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#FBA834', width: 50, height: 50}} />
        <View style={{backgroundColor: '#333A73', width: 50, height: 50}} />
        <View style={{backgroundColor: '#387ADF', width: 50, height: 50}} />
        <View style={{backgroundColor: '#50C4ED', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
          marginHorizontal: 20,
        }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Munggaran</Text>
          <Text>100 Subscriber</Text>
        </View>
      </View>
    </View>
  );
}

export default Flexbox;
