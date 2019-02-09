import React from 'react'
import { Card, Button } from 'react-native-elements'

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    const project = this.props.project;
  }

  handleSelectProject(project) {
    this.props.onSelectProject(project)
    this.props.onSwitchCurrentScreen()
  }

  getImage(id) {
    return `https://firebasestorage.googleapis.com/v0/b/combo-social.appspot.com/o/projects%2F${id}.png?alt=media&token=84f5ccd9-506d-4940-a318-703169c32b60`
  }

  render() {
    const {project} = this.props

    return(
      <Card title={project.name}
            image={{uri: this.getImage(project.id)}} >
          <Button
            title='comer aquí'
            icon={{name: 'thumb-up', color: "white"}}
            buttonStyle={{borderRadius: 0, marginLeft: -10, marginRight: -10, marginBottom: -10, marginTop: -10}}
            onPress={() => this.handleSelectProject(project)} />
      </Card>
    )
  }
}
