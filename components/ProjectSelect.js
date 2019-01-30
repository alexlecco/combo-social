import React from 'react';
import { StyleSheet, View, ScrollView, ListView } from 'react-native';
import { Header, Card, Button } from 'react-native-elements';

import { firebaseApp } from '../firebase'

export default class ProjectSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSourceProjects: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
    };

    this.projectsRef = firebaseApp.database().ref().child('projects')
  }

  componentDidMount() {
    this.listenForProjects(this.projectsRef)
  }

  listenForProjects(projectsRef) {
    projectsRef.on('value', (snap) => {
      let projects = [];
      snap.forEach((child) => {
        projects.push({
          description: child.val().description,
          id: child.val().id,
          name: child.val().name,
          _key: child.key,
        });
      });
      this.setState({
        dataSourceProjects: this.state.dataSourceProjects.cloneWithRows(projects)
      })
    });
  }

  getImage(id) {
    return `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/projects%2F${id}.png?alt=media&token=84f5ccd9-506d-4940-a318-703169c32b60`
  }

  buildProject(project) {
    return(
      <Card
        title={project.name}
        image={{uri: this.getImage(project.id)}} >
        <Button
          icon={{name: 'favorite', color: "white"}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='ayudar' />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: '¿A que proyecto querés contribuir?', style: { color: '#ffffff' } }}
        />

        <ScrollView>
          <ListView
            dataSource={this.state.dataSourceProjects}
            renderRow={(project) => this.buildProject(project)}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});
