import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, Card, Button } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: '¿Donde querés comer?', style: { color: '#ffffff' } }}
        />

        <ScrollView>
          <Card
            title='A mi no'
            image={require('./assets/bar1.png')}>
            <Text style={{marginBottom: 10}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi et nesciunt.
            </Text>
            <Button
              icon={{name: 'code'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='comer aquí' />
          </Card>

          <Card
            title='La pizzada'
            image={require('./assets/bar2.png')}>
            <Text style={{marginBottom: 10}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi et nesciunt.
            </Text>
            <Button
              icon={{name: 'code'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='comer aquí' />
          </Card>

          <Card
            title='Tutti'
            image={require('./assets/bar3.png')}>
            <Text style={{marginBottom: 10}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi et nesciunt.
            </Text>
            <Button
              icon={{name: 'code'}}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='comer aquí' />
          </Card>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
