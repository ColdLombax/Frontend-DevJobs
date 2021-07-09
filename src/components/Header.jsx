import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.primary.main};
    width: 100%;
    padding: 50px;
`;

// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  );
}
