import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, FlatList } from 'react-native';
import mapData from './../../sty/mapData';

class ContactInfo extends React.Component {
    render() {
        return(
          <Marker

            coordinate={{latitude: this.props.latitude, longitude: this.props.longitude}}
            title={this.props.key}
            description={this.props.name}
            color="blue"
            draggable
          >
          <Image  source={{
              uri:this.props.imageUrl
                }}
              style={{ width: 50, height: 50 }}
              />
          </Marker>
        );
    }
}

export default class Naver extends React.Component {
  constructor(){
    super();

    this.state={
    url:'https://images.unsplash.com/photo-1436891436013-5965265af5fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    url_1:'https://images.unsplash.com/photo-1516936451219-1b6a23b2df2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    url_2:'https://images.unsplash.com/photo-1492463104320-56094d69c6c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      }
    }
  render() {
    return (
      <View style={styles.container}>
        <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {mapData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                            latitude={contact.latitude}
                                            longitude={contact.longitude}
                                            imageUrl={contact.imageUrl}
                                              key={i}
                                 />);
                    })}
      </MapView>
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
});
