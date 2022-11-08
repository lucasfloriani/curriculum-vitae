/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import curriculumStyles from "./Curriculum.module.css";
import "../fonts/registerFonts";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#050505",
  },
  mainContent: {
    flexDirection: "column",
    width: "85%",
  },
  sidebar: {
    width: "15%",
    height: "100%",
  },
  sidebarImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  header: {
    paddingLeft: 20,
    paddingTop: 65,
  },
  firstName: {
    fontFamily: "League Spartan",
    color: "#d9d9d9",
    fontSize: 50,
    letterSpacing: 1.4,
    fontWeight: 700,
  },
  lastName: {
    fontFamily: "League Spartan",
    color: "#d9d9d9",
    fontSize: 50,
    letterSpacing: 1.4,
    fontWeight: 700,
    marginTop: 6,
  },
  roleDescription: {
    fontFamily: "Montserrat",
    color: "#a6a6a6",
    letterSpacing: 1.4,
    fontWeight: 600,
    fontSize: 16,
  },
  body: {
    paddingLeft: 20,
    paddingTop: 60,
    display: "flex",
    flexDirection: "row",
  },
  bodyColumn: {
    width: "50%",
  },
  presentation: {},
  sectionTitle: {
    fontFamily: "League Spartan",
    color: "#a6a6a6",
    fontSize: 13,
    letterSpacing: 0.9,
    fontWeight: 700,
    marginBottom: 5,
  },
  sectionSubTitle: {
    fontFamily: "League Spartan",
    color: "#e3e3e3",
    fontSize: 11,
    letterSpacing: 0.9,
    fontWeight: 700,
    marginBottom: 2,
  },
  sectionContent: {
    fontFamily: "Montserrat",
    color: "#d9d9d9",
    fontSize: 8,
    letterSpacing: 0.1,
    lineHeight: 1.3,
    fontWeight: 400,
    width: 190,
  },
  listWrapper: {
    flexDirection: "row",
  },
  listIcon: {
    color: "#e3e3e3",
    fontSize: 8,
    marginRight: 4,
  },
  listText: {
    fontFamily: "League Spartan",
    color: "#e3e3e3",
    fontSize: 8,
    letterSpacing: 1.1,
    lineHeight: 1.3,
    fontWeight: 300,
    width: 190,
  },
  roleSection: {},
  roleSubSection: {
    marginBottom: 18,
  },
  roleSubTitle: {
    fontFamily: "Montserrat",
    color: "#d9d9d9",
    fontSize: 10,
    letterSpacing: 0.9,
    fontWeight: 700,
    marginBottom: 6,
  },
  roleContent: {
    fontFamily: "Montserrat",
    color: "#d9d9d9",
    fontSize: 8,
    letterSpacing: 1,
    lineHeight: 1.3,
    fontWeight: 400,
    width: 190,
  },
  formation: {
    marginTop: 8,
  },
  formationSubSection: {},
  formationSubTitle: {
    fontFamily: "Montserrat",
    color: "#d9d9d9",
    fontSize: 10,
    letterSpacing: 0.9,
    fontWeight: 700,
    marginBottom: 6,
  },
  formationContent: {
    fontFamily: "Montserrat",
    color: "#d9d9d9",
    fontSize: 8,
    letterSpacing: 1,
    lineHeight: 1.3,
    fontWeight: 400,
    width: 220,
  },
  tecnologies: {
    marginTop: 20,
  },
  tecnologiesContent: {
    fontFamily: "Montserrat",
    color: "#d9d9d9",
    fontSize: 8,
    letterSpacing: 1,
    lineHeight: 1.3,
    textAlign: "justify",
    fontWeight: 400,
    width: 220,
  },
  contact: {
    marginTop: 28,
  },
});

// Tem Montserrat Classic (tópicos em destaque)e light (texto)
// League spartan (título)

const Curriculum = () => (
  <PDFViewer className={curriculumStyles.pdf}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainContent}>
          <View style={styles.header}>
            <Text style={styles.firstName}>LUCAS</Text>
            <Text style={styles.lastName}>FLORIANI</Text>
            <Text style={styles.roleDescription}>Desenvolvedor Full Stack</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyColumn}>
              <View style={styles.presentation}>
                <Text style={styles.sectionTitle}>APRESENTAÇÃO</Text>
                <Text style={styles.sectionContent}>
                  Desenvolvedor Fullstack Senior com Go/React com experiência
                  como Tech Lead.
                </Text>
              </View>
              <View style={styles.contact}>
                <Text style={styles.sectionTitle}>CONTATO</Text>
                <Text style={styles.sectionContent}>
                  Celular: +55 47 99196-9365
                </Text>
                <Text style={styles.sectionContent}>
                  Email: lucas.floriane@gmail.com
                </Text>
                <Text style={styles.sectionContent}>
                  Github: @lucasfloriani
                </Text>
                <Text style={styles.sectionContent}>
                  LinkedIn: @lucasfloriani13
                </Text>
              </View>
              <View style={styles.contact}>
                <Text style={styles.sectionTitle}>CURSOS</Text>
                <View style={styles.listWrapper}>
                  <Text style={styles.listIcon}>•</Text>
                  <Text style={styles.listText}>
                    EggHead – React Hooks and Suspense
                  </Text>
                </View>
                <View style={styles.listWrapper}>
                  <Text style={styles.listIcon}>•</Text>
                  <Text style={styles.listText}>
                    EggHead – Shareable Custom Hooks in React
                  </Text>
                </View>
                <View style={styles.listWrapper}>
                  <Text style={styles.listIcon}>•</Text>
                  <Text style={styles.listText}>
                    SoloLearn - CSS Fundamentals Course
                  </Text>
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
                  <Text style={styles.listText}>
                    TreinaWeb - Docker Primeiros Passos
                  </Text>
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
                    TreinaWeb - GraphQL Criando Apis modernas com Graphcool e
                    Apollo
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
                  <Text style={styles.listText}>
                    UDESC - Introdução ao Wordpress
                  </Text>
                </View>
                <View style={styles.listWrapper}>
                  <Text style={styles.listIcon}>•</Text>
                  <Text style={styles.listText}>
                    UDESC - Melhorando seu processo de desenvolvimento de
                    software usando Scrum, Git Workflows e GitLab
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
                  <Text style={styles.listText}>
                    Udemy - Sasss /SCSS: Curso Completo
                  </Text>
                </View>
                <View style={styles.listWrapper}>
                  <Text style={styles.listIcon}>•</Text>
                  <Text style={styles.listText}>
                    Udemy - Webpack 2: The Complete Developers Guide
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.bodyColumn}>
              <View style={styles.roleSection}>
                <Text style={styles.sectionTitle}>
                  EXPERIÊNCIA PROFISSIONAL
                </Text>
                <View style={styles.roleSubSection}>
                  <Text style={styles.roleSubTitle}>Tech Lead</Text>
                  <Text style={styles.roleContent}>FOTON TECH</Text>
                  <Text style={styles.roleContent}>JANEIRO 2021 - ATUAL</Text>
                </View>
                <View style={styles.roleSubSection}>
                  <Text style={styles.roleSubTitle}>Fullstack Developer</Text>
                  <Text style={styles.roleContent}>FOTON TECH</Text>
                  <Text style={styles.roleContent}>
                    JULHO 2020 - JANEIRO 2021
                  </Text>
                </View>
                <View style={styles.roleSubSection}>
                  <Text style={styles.roleSubTitle}>
                    Programador Freelancer
                  </Text>
                  <Text style={styles.roleContent}>FREELANCER</Text>
                  <Text style={styles.roleContent}>
                    OUTUBRO 2019 - JULHO 2020
                  </Text>
                </View>
                <View style={styles.roleSubSection}>
                  <Text style={styles.roleSubTitle}>Programador</Text>
                  <Text style={styles.roleContent}>BPLUS TECNOLOGIA LTDA.</Text>
                  <Text style={styles.roleContent}>
                    JANEIRO 2018 - OUTUBRO 2019
                  </Text>
                </View>
                <View style={styles.roleSubSection}>
                  <Text style={styles.roleSubTitle}>Programador Web</Text>
                  <Text style={styles.roleContent}>
                    XTHOR SOLUÇÕES TECNOLOGICAS
                  </Text>
                  <Text style={styles.roleContent}>
                    SETEMBRO 2015 - JANEIRO 2018
                  </Text>
                </View>
              </View>
              <View style={styles.formation}>
                <Text style={styles.sectionTitle}>FORMAÇÃO ACADÊMICA</Text>
                <View style={styles.formationSubSection}>
                  <Text style={styles.formationSubTitle}>UDESC - CEPLAN</Text>
                  <Text style={styles.formationContent}>
                    BACHAREL EM SISTEMAS DE INFORMAÇÃO.
                  </Text>
                  <Text style={styles.formationContent}>2014-2019</Text>
                </View>
              </View>
              <View style={styles.tecnologies}>
                <Text style={styles.sectionTitle}>TECNOLOGIAS</Text>
                <Text style={styles.tecnologiesContent}>
                  Go - Git - CSS - NPM - Gulp - SASS - CSS3 - REST - HTML -
                  Linux - Scrum - Redux - GitLab - Apollo - MySQL - Docker -
                  GitHub - React.js - GraphQL - Webpack - JavaScript - WordPress
                  - Redux Saga - PostgreSQL - React Native
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sidebar}>
          <Image style={styles.sidebarImage} src="/sidebar.jpg" />
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default Curriculum;
