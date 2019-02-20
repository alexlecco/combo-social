import React from 'react'
import { StyleSheet, View, ScrollView, ListView } from 'react-native'
import { Header, Card, Button, Text } from 'react-native-elements'
import { connect } from 'react-redux';

import { firebaseApp } from '../../firebase'
import ProjectCard from './ProjectCard'

class ProjectSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSourceProjects: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
    }

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
        })
      })
      this.setState({
        dataSourceProjects: this.state.dataSourceProjects.cloneWithRows(projects)
      })
    })
  }

  buildProject(project) {
    return(
      <ProjectCard
        project={project}
        onSelectProject={this.props.onSelectProject} />
    )
  }

  render() {
    const { currentScreen } = this.props

    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: '¿Que proyecto querés apoyar?', style: { color: '#ffffff', fontSize: 17, fontWeight: 'bold' } }}
          rightComponent={{ text: currentScreen.toString() , style: { color: '#ffffff', fontSize: 17, fontWeight: 'bold' } }}
        />

        <ScrollView>
          <View style={{paddingBottom: 15}}>
            <ListView
              dataSource={this.state.dataSourceProjects}
              renderRow={(project) => this.buildProject(project)}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
    return {
        currentScreen: state.currentScreen
    }
}

export default connect(mapStateToProps, null)(ProjectSelect)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
})
