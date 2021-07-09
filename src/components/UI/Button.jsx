import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledButton = styled.button`
`;

export default function Button({ children }) {
  return (
    <StyledButton>{children}</StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
