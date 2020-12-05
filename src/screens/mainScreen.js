import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity,TouchableHighlight ,Modal, TextInput, Picker, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Header from '../components/Header'
import Ball from '../components/Todo'

let taskList=[]

function mainScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const [TaskName,setTaskName]=useState('')
  const [TaskDesc,setTaskDesc]=useState('') 
  
  let  secondTextInput=''
  
  const submitTask=() => {
    taskList.push({taskName:TaskName,taskDescription:TaskDesc})
    console.log(taskList,taskList.length)
  }
  useEffect(()=>{
    console.log(taskList.length)
  },[])
                                                                   
  return (
    <>
    <Header />
    <ImageBackground resizeMode='contain' source={require('../../assets/2dToDO(1).png')} style={styles.container}>
      {taskList[0] && <Ball name={taskList[0].taskName}/>}
      {taskList[1] && <Ball name={taskList[1].taskName}/>}
      {taskList[2] && <Ball name={taskList[2].taskName}/>}
      {taskList[3] && <Ball name={taskList[3].taskName}/>}
      {taskList[4] && <Ball name={taskList[4].taskName}/>}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Enter Task Details</Text>
            <TextInput placeholder='Enter task Name' underlineColorAndroid='grey'
                returnKeyType="next"
                onChangeText={(e)=> {setTaskName(e)}}
                onSubmitEditing={(e) => { secondTextInput.focus()}}
                blurOnSubmit={false}  
                style={{margin:5,padding:5}}
            />
            <TextInput placeholder='Description' multiline={true} underlineColorAndroid='black'
              style={{margin:5,padding:5}} 
              onChangeText={(e) => { setTaskDesc(e) }}
              enablesReturnKeyAutomatically={true}
              ref={(input) => { secondTextInput = input; }} 
            />
            {/* <TextInput placeholder='' multiline={true} underlineColorAndroid='black' /> */}
            
            <View style={{flexDirection:'row'}}>
            <TouchableHighlight
              style={{...styles.modalButton,backgroundColor:'darkslateblue'}}
              onPress={() => {submitTask(),
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{...styles.modalButton,backgroundColor:'grey'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.addButtonView}>
        <TouchableOpacity style={styles.button}>
          <Icon name='pluscircle' size={55} color='darkslateblue' onPress={()=>setModalVisible(!modalVisible)}/>
        </TouchableOpacity> 
      </View>
    </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  addButtonView:{
    flex:1,
    flexWrap:'wrap-reverse',
    alignItems:'baseline',
    justifyContent:'flex-end'
  },
  button:{
    marginVertical:30,
    marginHorizontal:25,
    borderRadius:50
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalButton:{
    margin:10
  },
  textStyle:{
    color:'white',
    paddingHorizontal:5
  }
})

export default mainScreen
