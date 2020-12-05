import React from 'react'
import { StyleSheet,Text,View,Dimensions } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'

const windowHeight=Dimensions.get('window').height
const windowWidth=Dimensions.get('window').width

export default function Header() {
  return (
    <View style={styles.head}>
      <Icon name='menu-fold' size={25} color='white' style={styles.menu} />
      <Text style={styles.headerTitle}>Square ToDo</Text>
      <Icon name='menu-fold' size={25} color='white' style={styles.menu} />
    </View>
  )
}

const styles = StyleSheet.create({
  head:{
    flex:0.1,
    backgroundColor:'darkslateblue',
    flexDirection:'row',
    height:35,
    width:windowWidth,
    alignItems:'center',
    justifyContent:'space-between'
  },
  menu:{
    marginHorizontal:7,

  },
  headerTitle:{
    color:'white',
    fontWeight:'bold'
  }
})



