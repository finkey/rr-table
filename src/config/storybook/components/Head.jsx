import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Head = ({ titles }) => (
  <Wrapper>{titles ? titles.map(title => <div>{title}</div>) : <p>no titles</p>}</Wrapper>
);

export default Head;
