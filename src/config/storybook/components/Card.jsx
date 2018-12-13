import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor || '#eee'};
  padding: 20px;
  height: 100%;
`;

const Button = styled.button`
  width: 60px;
`;

const Card = ({ data, close }) => (
  <Wrapper>
    <Button onClick={close}>Close</Button>
    <p>
      <span>Nom: </span>
      <span>{data.name}</span>
    </p>
    <p>
      <span>Prénom: </span>
      <span>{data.surname}</span>
    </p>
    <p>
      <span>Age: </span>
      <span>{data.age}</span>
    </p>
    <p>
      <span>Job: </span>
      <span>{data.job}</span>
    </p>
    <p>
      <span>Sex: </span>
      <span>{data.sex}</span>
    </p>
  </Wrapper>
);

export default Card;
