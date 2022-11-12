import styled from "@emotion/styled";

const PageLayout = styled.main`
  display: grid;
  gap: 30px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  margin: auto 0;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export default PageLayout;
