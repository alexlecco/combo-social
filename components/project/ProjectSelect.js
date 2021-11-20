import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Header } from 'react-native-elements';

import { AppContext } from '../../context/provider'
import firebaseApp from '../../firebase';
import ProjectCard from './ProjectCard';
import RNEconstants from '../../constants/RNEconstants';

const ProjectSelect = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen } = state;
  const [projects, setProjects] = useState([])
  const centerComponent = RNEconstants.projectSelect?.centerComponent;

  useEffect(() => {
    const projectsRef = firebaseApp.database().ref().child('projects');

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
      setProjects(projects)
    });
  }, [])

  const buildProject = (project) =>(
    <ProjectCard project={project} />
  );

  return (
    <View style={styles.container}>
      <Header
        centerComponent={centerComponent}
        rightComponent={{text: currentScreen.toString()}}
      />

      <ScrollView>
        <View style={{ paddingBottom: 15 }}>
          <FlatList
            data={projects}
            renderItem={(project) => buildProject(project)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});

export default ProjectSelect;
