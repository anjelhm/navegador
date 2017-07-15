import React, { Component } from 'react';
import {
  View,
  DrawerLayoutAndroid,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Toolbar, Divider } from 'react-native-material-design';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height } = Dimensions.get('window');
const viewHeight = height - 50;

var horizontal: false;

class Drawer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      landscape: false
    };

    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  onLayout = event => this.cambiaPosicion(event.nativeEvent.layout);

  cambiaPosicion(evento) {
    (evento.width > evento.height) ? this.setState({ landscape: true }) : this.setState({ landscape: false })
  }

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{ flex: 1, backgroundColor: '#3F51B5', paddingLeft: 20, paddingTop: 40, elevation: 4 }}>
          <View>
            <View style={{ backgroundColor: '#8BC34A', height: this.state.landscape ? 50 : 80, width: this.state.landscape ? 50 : 80, borderRadius: 100, elevation: 4 }}>
            </View>
            <View style={{ paddingTop: 20 }}>
              <Text style={{ fontSize: 20, color: '#FFFFFF' }}>DRAWER, REACT NATIVE APP</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: this.state.landscape ? 2 : 3 }}>
          <ScrollView scrollEnabled>
            <TouchableOpacity
              style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}
            >
              <Icon name="home" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Home</Text>
            </TouchableOpacity>
            <Divider/>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}>
              <Icon name="done" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Realizado</Text>
            </View>
            <Divider/>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}>
              <Icon name="done" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Realizado</Text>
            </View>
            <Divider/>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}>
              <Icon name="done" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Realizado</Text>
            </View>
            <Divider/>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}>
              <Icon name="done" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Realizado</Text>
            </View>
            <Divider/>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}>
              <Icon name="done" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Realizado</Text>
            </View>
            <Divider/>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}>
              <Icon name="done" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Realizado</Text>
            </View>
            <Divider/>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}>
              <Icon name="done" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Realizado</Text>
            </View>
            <Divider/>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center', marginBottom: 20 }}>
              <Icon name="done" size={ 32 } color="#607D8B"/>
              <Text style={{ paddingLeft: 10, fontSize: 18, color: '#37474F' }}>Realizado</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );

    const { titulo, children } = this.props;

    return (
      <View style={{ flex: 1 }} onLayout={ this.onLayout }>
        <DrawerLayoutAndroid
          drawerWidth={300}
          ref={(_drawer) => this.drawer = _drawer}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={{ backgroundColor: '#CCCCCC', height: 50, elevation: 5}}>
            <Toolbar
              title= { titulo }
              icon= "menu"
              style={{ height: 50, backgroundColor: '#3F51B5' }}
              onIconPress={ this.openDrawer }
            />
          </View>
          <View style={{ flex: 1, height: viewHeight }}>
            <ScrollView>
              { children }
            </ScrollView>
          </View>
        </DrawerLayoutAndroid>
      </View>
    );
  }
}

export default Drawer;
