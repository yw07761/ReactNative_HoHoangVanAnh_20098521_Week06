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
import Icon from 'react-native-vector-icons/Ionicons'; 

const DATA = [
  {
    id: 1,
    title: 'Ca nấu mì, nấu mì mini...',
    shop: 'Devang',
    Image: require('./assets/Screen1_1.png'),
  },
  {
    id: 2,
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'LTD Food',
    Image: require('./assets/Screen1_2.png')
  },
  {
    id: 3,
    title: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    Image: require('./assets/Screen1_3.png')
  },
  {
    id: 4,
    title: 'Đồ chơi dạng mô hình...',
    shop: 'Thế giới đồ chơi',
    Image: require('./assets/Screen1_4.png')
  },
  {
    id: 5,
    title: 'Lãnh đạo đơn giản',
    shop: 'Thế giới đồ chơi',
    Image: require('./assets/Screen1_5.png')
  },
  {
    id: 6,
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Minh Long Book',
    Image: require('./assets/Screen1_6.png')
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
      <View style={styles.header}>
        {/* Back Button */}
        <Icon name="arrow-back" size={25} color="white" style={styles.icon} />
        <Text style={{color:'white'}}>Chat</Text>
        <Icon name="cart" size={25} color="white" style={styles.icon} />
      </View>
      <View style={{
        backgroundColor:'#d5d8dc',
      }}>
        <Text style={{
          fontSize:13, 
          marginBottom: 10, 
          textAlign:'center',
          }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
       <View style={styles.footer}>
        <Icon name="list" size={25} color="black" style={styles.icon} />
        <Icon name="home" size={25} color="black" style={styles.icon} />
        <Icon name="arrow-back" size={25} color="black" style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 5,
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
    marginLeft: 6
  },
  shop: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: 6,
    color: 'red'
  },
   footer: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
  },
});

export default App;
