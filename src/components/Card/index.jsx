import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || '#eee'};
  padding: 20px;
`;

const NavWrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavButtons = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadContent = styled.div`
  height: 200px;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({ data, backgroundColor }) => (
  <MainWrapper backgroundColor={backgroundColor}>
    <NavWrapper>
      <span>Edit</span>
      <NavButtons>
        <span>Partager</span>
        <span>Télécharger</span>
        <span>Archiver</span>
      </NavButtons>
    </NavWrapper>
    <HeadWrapper>
      <HeadContent>
        <p>
Téléphone :
          {data.tel}
        </p>
        <p>
E-mail :
          {data.email}
        </p>
      </HeadContent>
      <HeadContent>
        <p>
E-mail :
          {data.email}
        </p>
      </HeadContent>
    </HeadWrapper>
  </MainWrapper>
);

Card.propTypes = {
  data: PropTypes.object,
  backgroundColor: PropTypes.string,
};

export default Card;
