import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {AppContext} from '../App';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: null
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <AppContext.Consumer>
          {({state, addNumber}) => (
            <View>
              <TouchableOpacity onPress={addNumber}>
                <Text>Add Number</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.navigate}>
                <Text>Home</Text>
              </TouchableOpacity>
            </View>
          )}
        </AppContext.Consumer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
