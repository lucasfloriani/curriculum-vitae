import styled from "@emotion/styled";
import useTranslations from "../../hooks/useTranslations";
import DownloadButton from "../DownloadButton";
import SelectLanguage from "../SelectLanguage";
import Spacing from "../Spacing";

const Wrapper = styled.section`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-family: var(--font-league-spartan);
  font-size: 3em;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Info = () => {
  const { translation } = useTranslations();

  return (
    <Wrapper>
      <Title>{translation["info:title"]}</Title>
      <Spacing height="1.5em" />
      <SelectLanguage />
      <Spacing height="2em" />
      <DownloadButton />
    </Wrapper>
  );
};

export default Info;
