"use client";

import React from "react";
import Curriculum from "../../components/Curriculum";
import Container from "../../components/Container";
import PageLayout from "../../components/PageLayout";
import Info from "../../components/Info";

export default function HomePageWithLang() {
  return (
    <Container>
      <PageLayout>
        <Info />
        <Curriculum />
      </PageLayout>
    </Container>
  );
}
