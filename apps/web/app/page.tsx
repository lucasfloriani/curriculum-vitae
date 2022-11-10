"use client";

import React from "react";
import Curriculum from "../components/Curriculum";
import Container from "../components/Container";
import DownloadButton from "../components/DownloadButton";
import ActionsSection from "../components/ActionsSection";
import PageLayout from "../components/PageLayout";
import Info from "../components/Info";

export default function Web() {
  return (
    <Container>
      <PageLayout>
        <Info />
        <Curriculum />
        <ActionsSection>
          <DownloadButton />
        </ActionsSection>
      </PageLayout>
    </Container>
  );
}
