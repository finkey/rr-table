import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { grey } from 'config/styles/colorPalette';
import HeadCell from 'components/HeadCell';

/** Styles */
const Wrapper = styled.div`
  box-shadow: 0px 5px 2px ${grey};
  display: flex;
  flex-wrap: nowrap;
  height: ${({ height }) => height};
  justify-content: space-evenly;
  margin-bottom: 5px;
  position: relative;
  width: 100%;
`;

/** Component */
const Head = ({
  height, style, titles, id,
}) => {
  console.log('hello');
  return (
    <Wrapper height={height} style={style} id={id}>
      {titles.map(title => (
        <HeadCell text={title} />
      ))}
    </Wrapper>
  );
};

/** PropTypes */
Head.propTypes = {
  /** id of the row */
  id: PropTypes.string,
  /** Height of the Head row */
  height: PropTypes.string,
  /** Custom row style */
  style: PropTypes.object,
  /** Column Titles */
  titles: PropTypes.arrayOf(PropTypes.string),
};

Head.defaultProps = {
  height: '4em',
};

export default Head;
