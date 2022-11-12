import styled from "@emotion/styled";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.div`'
    background-color: #050505;
    min-height: 100vh;
    width: 100%;
`;

const PageWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
