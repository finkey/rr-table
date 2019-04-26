import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: #c5cae9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Head = ({ titles }) => (
  <Wrapper>
    {titles ? titles.map(title => <div key={title}>{title}</div>) : <p>no titles</p>}
  </Wrapper>
);

export default Head;
