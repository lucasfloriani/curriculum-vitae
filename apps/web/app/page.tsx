"use client";

import React from "react";
import Curriculum from "../components/Curriculum";
import Container from "../components/Container";
import PageLayout from "../components/PageLayout";
import Info from "../components/Info";
import PageWrapper from "../components/PageWrapper";

export default function Web() {
  return (
    <PageWrapper>
      <Container>
        <PageLayout>
          <Info />
          <Curriculum />
        </PageLayout>
      </Container>
    </PageWrapper>
  );
}
