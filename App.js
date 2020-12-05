import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import Todo from './src/components/Todo'
import MainScreen from './src/screens/mainScreen'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  return (
    <>
    <StatusBar />
      <SafeAreaView style={styles.container}>
        <MainScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1
    }
});

export default App;
