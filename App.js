import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';

export let AppContext = React.createContext('hello');
export default class App extends React.Component {
  state = {
    activePage: 'Home',
    number: 0
  };

  _increaseNumber = () => {
    this.setState({number: this.state.number + 1});
  };

  render() {
    let screenActive;
    switch (this.state.activePage) {
      case 'Home':
        screenActive = (
          <HomeScreen navigate={() => this.setState({activePage: 'Link'})} />
        );
        break;
      default:
        screenActive = (
          <LinksScreen navigate={() => this.setState({activePage: 'Home'})} />
        );
        break;
    }
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppContext.Provider
          value={{
            state: this.state, //mapStateToProps
            addNumber: this._increaseNumber //mapDispatchToProps
          }}
        >
          {screenActive}
        </AppContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
