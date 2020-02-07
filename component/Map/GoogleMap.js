import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Alert, TouchableHighlight ,Modal ,StyleSheet, Text, View, Dimensions, Image, FlatList,TouchableOpacity,ScrollView } from 'react-native';
import flatListData from './../../sty/flatlistdata';
import mapData from './../../sty/mapData';
import ModalExample from './Modal';
import Test from './test';
import RBSheet from "react-native-raw-bottom-sheet";


class FlatListItem extends React.Component{

    render() {
      console.log(this.props.item.imageUrl);
        return(
          <TouchableOpacity >
              <Image source={{uri:this.props.item.imageUrl}} style={styles.photo} resizeMode='cover'></Image>
          </TouchableOpacity>
        );
    }
}

class ContactInfo extends React.Component {
    render() {
        return(
            <Text>{this.props.name}  ::::    {this.props.foodDescription}</Text>
        );
    }
}

class ContactInfos extends React.Component {
    handleMarkerPress(event) {

      const markerID = event ;
      console.log(markerID);
      console.log('jungmin!!!');
    }

    render() {
        return(
          <Marker
            coordinate={{latitude: this.props.latitude, longitude: this.props.longitude}}
            title={this.props.name}
            description={this.props.name}
            key = {this.props.name}
            identifier={this.props.key}
            //identifier={index.toString()}
            color="blue"
            draggable
            onPress={() => this.handleMarkerPress(this.props.name)}
            //onPress={(event) => console.log(event),event.id = 'jungmin' ; this.handleMarkerPress(event)}
          >
          <Image  source={{
              uri:this.props.imageUrl
                }}
              style={{ width: 50, height: 50, borderRadius: 9,borderColor: 'gray', }}
              />
          </Marker>
        );
    }
}

export default class handleMarkerPress extends React.Component {
  constructor(props){
      super(props);

      this.state={
        modalVisible: false,
        just:'goooddJungmin',
        url:'https://images.unsplash.com/photo-1436891436013-5965265af5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        url_1:'https://images.unsplash.com/photo-1516936451219-1b6a23b2df2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        url_2:'https://images.unsplash.com/photo-1492463104320-56094d69c6c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          }
      }



  renderItem(data) {
    console.log('this is data',data);
      return (
        <View>
          <TouchableOpacity style={styles.button} onPress={() => this[RBSheet].open()}>
            <Text style={styles.buttonText}>ITEM </Text>
          </TouchableOpacity>
          <RBSheet
            ref={ref => {
              this[RBSheet ] = ref;
            }}
          >
           <ScrollView horizontal={true}>
              <View style={styles.bottomSheetContainer}>

              {data.map((contact, i) => {
                            console.log(contact)
                            return (<FlatListItem item={contact}  key={i} />);
                        })}

              </View>
            </ScrollView>
          </RBSheet>
        </View>
      );
    }

  render() {
     //console.log(mapData);
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

        {mapData.map((contact, i) => {
                          //console.log(contact)
                          return (<ContactInfos name={contact.name}
                                            latitude={contact.latitude}
                                            longitude={contact.longitude}
                                            imageUrl={contact.imageUrl}
                                              key={i}
                                  />);
                      })}
      </MapView>
      </View>
      <View style={{flex:1}}>
      {this.renderItem(flatListData)}
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },


  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 3,
    marginTop: 20
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16
  },
  bottomSheetContainer: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: "center",
    alignItems: "center"
  },
  photo:{
    width: 180,
    height: 180,
    marginHorizontal: 10,
  },
});
