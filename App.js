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
    title: 'Ca nấu mì, nấu mì mini...',
    shop: 'Devang',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 2,
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'LTD Food',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 3,
    title: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 4,
    title: 'Đồ chơi dạng mô hình...',
    shop: 'Thế giới đồ chơi',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 5,
    title: 'Lãnh đạo đơn giản',
    shop: 'Thế giới đồ chơi',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 6,
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Minh Long Book',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 7,
    title: 'Hiểu lòng trẻ con',
    shop: 'Minh Long Book',
    Image: 'https://picsum.photos/200'
  },
  {
    id: 8,
    title: 'Hiểu lòng trẻ con',
    shop: 'Minh Long Book',
    Image: 'https://picsum.photos/200'
  },

];

const Item = ({title}) => (
  <View style={styles.item}>
    <Image source={title.Image} style={{height:70,width:70}}/>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title.title}</Text>
      <Text style={styles.shop}>Shop {title.shop}</Text>
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
    flexDirection:'row',
    alignItems:'flex-start'
  },
  title: {
    fontSize: 12,
    marginTop: 3,
  },
  shop: {
    fontSize: 12,
    marginTop: 3,
    color: 'red'
  }
});

export default App;