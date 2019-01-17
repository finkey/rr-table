import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  border: 1px solid grey;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border: 2px solid grey;
  color: pink;
`;

const HeadCell = ({ titles }) => (
  <Wrapper>{titles ? titles.map(title => <div>{title}</div>) : <p>no title</p>}</Wrapper>
);

export default HeadCell;
