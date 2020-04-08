import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type ButtonProps = {
  to?: string;
};

export default function Button(props: any) {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
}

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.25rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: #fc426a;
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
  text-decoration: none;
`;
