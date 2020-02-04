import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, TouchableOpacity, ScrollView, TouchableWithoutFeedback, StyleSheet,SafeAreaView} from 'react-native';

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };


setModalVisible(visible) {
    this.setState({
        modalVisible: visible,
    })
}

  render() {
  if (!this.state.modalVisible)
    return (
      <View style={{marginTop: 22, backgroundColor : 'green',  flex: 1}}>
       <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPressOut={() => {this.setModalVisible(true)}}
          >
                  <Text>'Click here!!!!'</Text>
          </TouchableOpacity>
      </View>
    )
  return (
    <SafeAreaView style={{marginTop:50, flex:1}}>
     <View style={{marginTop: 22, backgroundColor : 'red', flex: 1  }}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
          //style={styles.modals}
        >
        <View style={{flex: 3, backgroundColor: 'powderblue'}} />
          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPressOut={() => {this.setModalVisible(false)}}
          >
            <ScrollView
              directionalLockEnabled={true}
              contentContainerStyle={styles.scrollModal}
            >
              <TouchableWithoutFeedback>
                <View style={styles.modalContainer}>
                  <Text>'Gooood'</Text>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>
        </Modal> 
     </View>
    </SafeAreaView>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //width: 300,
    alignSelf: 'stretch',
    height: 300,
    backgroundColor : 'blue',
    opacity: 0.37
  },
  modalContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 100,
    backgroundColor : 'green',
  },
  modals:{
    //flex:1
  }
});

export default ModalExample;
