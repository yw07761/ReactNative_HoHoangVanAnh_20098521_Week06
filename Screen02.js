import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 2,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 3,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 4,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 5,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 6,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 7,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 8,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    Image: 'https://picsum.photos/200'
  },

];

const Item = ({title}) => (
  <View style={styles.item}>
    <Image source={title.Image} style={{height:70,width:70}}/>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title.title}</Text>
      <Text style={styles.price}>{title.price}</Text>
      <Text style={styles.discount}>{title.discount}</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:'#3498db',
        alignItems:'center', 
        justifyContent:'center',
        height: 30}}>
        <Text style={{
          fontSize:15, 
          color:'white'}}>
        Chat</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
      <View style={{
        backgroundColor:'#3498db',
        alignItems:'center', 
        justifyContent:'center',
        height: 40}}>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#d5d8dc',
    padding: 2,
    marginVertical: 1,
    marginHorizontal: 0,
    flexDirection:'column',
    alignItems:'center'
  },
  title: {
    fontSize: 12,
    marginTop: 3,
  },
  price: {
    fontSize: 12,
    marginTop: 3,
    color: 'red'
  },
  discount:{
    fontSize: 11,
    marginTop: 3,
    color: 'gray'
  }
});

export default App;
