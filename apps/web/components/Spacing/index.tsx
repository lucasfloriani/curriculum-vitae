import styled from "@emotion/styled";

const Spacing = styled.div<{ height?: string; width?: string }>`
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default Spacing;
