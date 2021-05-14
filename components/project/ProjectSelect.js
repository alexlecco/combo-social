import React, {useState, useEffect} from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import { Header } from "react-native-elements";
import { connect } from "react-redux";

import firebaseApp from "../../firebase";
import ProjectCard from "./ProjectCard";
import RNEconstants from '../../constants/RNEconstants';

const ProjectSelect = ({ onSelectProject, currentScreen }) => {
  const [projects, setProjects] = useState([])
  const centerComponent = RNEconstants.projectSelect?.centerComponent;

  useEffect(() => {
    const projectsRef = firebaseApp.database().ref().child("projects");

    projectsRef.on("value", (snap) => {
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
    <ProjectCard
      project={project}
      onSelectProject={onSelectProject}
    />
  );

  const rneData = {

  }

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

function mapStateToProps(state) {
  return {
    currentScreen: state.currentScreen,
  };
}

export default connect(mapStateToProps, null)(ProjectSelect);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
});
