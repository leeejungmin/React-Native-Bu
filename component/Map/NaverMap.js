import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 37.3595704, lng: 127.105399 }
    }

    this.panToNaver = this.panToNaver.bind(this);
  }

  panToNaver() {
    this.setState({ center: { lat: 37.3595704, lng: 127.105399 }})
  }

  render() {
    return (
      <RenderAfterNavermapsLoaded clientId={'facrjaarlf'}></RenderAfterNavermapsLoaded>
      <View>
        <Button onPress={this.panToNaver}>Pan To Naver</Button>
        <Text>lat: {this.state.center.y || this.state.center.lat}</Text>
        <Text>lng: {this.state.center.x || this.state.center.lng}</Text>
        <NaverMap
          id='maps-getting-started-controlled'
          style={{width: '100%', height: '400px'}}

          // uncontrolled zoom
          defaultZoom={10}

          // controlled center
          // Not defaultCenter={this.state.center}
          center={this.state.center}
          onCenterChanged={center => this.setState({ center })}
        />
      </View>
    )
  }
}
