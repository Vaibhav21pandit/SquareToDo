import React, { Component } from 'react'
import {View,StyleSheet, Text, Animated,PanResponder} from 'react-native'

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state={
      animate: new Animated.ValueXY()
    };
    
    this.state.animate.setValue({x:100,y:100});
    this._panResponder=PanResponder.create({
      onMoveShouldSetPanResponder:()=>true,
      onPanResponderGrant:()=>{
        this.state.animate.setOffset({
          x:this.state.animate.x._value,
          y:this.state.animate.y._value  
        })
        this.state.animate.setValue({x:0,y:0})
      },
      onPanResponderMove:(e,gesture)=>{
        this.state.animate.setValue({
          x:gesture.dx,
          y:gesture.dy
        })
      },

      onPanResponderRelease:()=>{
          this.state.animate.flattenOffset();
      }

    });
  }
    
  render(){
    return (
      <Animated.View {...this._panResponder.panHandlers} style={[this.state.animate.getLayout()]} >
        <View style={styles.ballView}>
          <Text style={styles.ballText}>{this.props.name}</Text>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  ballView:{
    backgroundColor:'darkslateblue',
    borderRadius:100/2,
    height:75,
    width:75,
    alignItems:'center',
    justifyContent:'center',
    margin:15
  },
  ballText:{
    color:'white',
    fontWeight:'bold',
    margin:5
  }
})



