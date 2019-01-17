import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { defineComponent, defineComponentAsFunction } from 'utils';
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
  /** Cell Component */
  // const setCell = defineComponentAsFunction(headCell, HeadCell);

  // console.log('setCell:', typeof setCell);
  // console.log('titles:', titles);

  return (
    <Wrapper height={height} style={style} id={id}>
      {titles
        && titles.map((title) => {
          const cellId = uuidv4();
          return <HeadCell key={cellId} id={cellId} text={title} />;
          // return setCell({ title, key: cellId, id: cellId });
        })}
    </Wrapper>
  );
};

/** PropTypes */
Head.propTypes = {
  /** id of the row */
  id: PropTypes.string,
  /** Header Cells Component */
  headCell: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
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
