import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { ref, onValue } from 'firebase/database';

import { AppContext } from '../src/context/provider'
import database from '../firebase';
import ProjectCard from '../src/components/project/ProjectCard';
import RNEconstants from '../src/constants/RNEconstants';

const ProjectSelect = _ => {
  const [state] = useContext(AppContext);
  const { currentScreen, currentUser } = state;
  const [projects, setProjects] = useState([])
  const centerComponent = RNEconstants.projectSelect?.centerComponent;

  useEffect(() => {
    const projectsRef = ref(database, 'projects/');

    onValue(projectsRef, snap => {
      let projects = [];
      snap.forEach((child) => {
        projects.push({
          description: child.val().description,
          id: child.val().id,
          name: child.val().name,
          _key: child.key,
        });
      });
      setProjects(projects);
    });
  }, []);

  const buildProject = (project) =>(
    <ProjectCard project={project} />
  );

  return (
    <View style={styles.container}>
      <Header
        centerComponent={centerComponent}
        rightComponent={{text: `${currentUser.username}`}}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
});

export default ProjectSelect;
