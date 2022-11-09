import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";

const styles = StyleSheet.create({
  courses: {
    marginTop: 28,
  },
  listWrapper: {
    flexDirection: "row",
  },
  listIcon: {
    color: defaultTheme.colors.grey.xLight,
    fontSize: 8,
    marginRight: 4,
  },
  listText: {
    fontFamily: defaultTheme.fonts.primary,
    color: defaultTheme.colors.grey.xLight,
    fontSize: 8,
    letterSpacing: 1.1,
    lineHeight: 1.3,
    fontWeight: 300,
    width: 190,
  },
});

const Courses = () => {
  return (
    <View style={styles.courses}>
      <Text style={commonStyles.sectionTitle}>CURSOS</Text>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>EggHead – React Hooks and Suspense</Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          EggHead – Shareable Custom Hooks in React
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>SoloLearn - CSS Fundamentals Course</Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          SoloLearn - HTML Fundamentals Course
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          SoloLearn - JavaScript Tutorial Course
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>TreinaWeb - Docker Primeiros Passos</Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          TreinaWeb - Git e Github Controle de versão
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>TreinaWeb - Go Básico</Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          TreinaWeb - GraphQL Criando Apis modernas com Graphcool e Apollo
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          TreinaWeb - Javascript Teste automatizado com Jasmine
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          TreinaWeb - Lógica Orientada a Objetos Completo
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          TreinaWeb - Npm Gerenciador de pacotes para Javascript
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>UDESC - Introdução ao Wordpress</Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          UDESC - Melhorando seu processo de desenvolvimento de software usando
          Scrum, Git Workflows e GitLab
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          Udemy - Go: The Complete Developers Guide (Golang)
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          Udemy - Modern JavaScript From the Beginning
        </Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>Udemy - Sasss /SCSS: Curso Completo</Text>
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.listIcon}>•</Text>
        <Text style={styles.listText}>
          Udemy - Webpack 2: The Complete Developers Guide
        </Text>
      </View>
    </View>
  );
};

export default Courses;
