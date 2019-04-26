import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Media from 'react-media';

import { defineText, chooseMediaQuery, defineColMinWidth } from 'utils';
import { DEFAULT_MEDIA_QUERY } from 'config/constants/mediaQueries';
import DefaultCell from './components/DefaultCell';
import 'config/styles/default.css';

/** Styles */
const CellWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  min-width: ${({ width }) => defineColMinWidth(width)};
  width: ${({ width }) => width};
`;

/** Component */
const Cell = ({
  backgroundColor,
  breakpoints,
  center,
  children,
  data,
  emptyCellContent,
  fontSize,
  handleClick,
  lineClamp,
  lineHeight,
  padding,
  priority,
  width,
}) => {
  const renderFunctionOrComponentOrDefault = () => {
    if (typeof children === 'function') {
      return children({ data, breakpoints, priority });
    }
    if (typeof children === 'object') {
      return children;
    }

    return (
      <DefaultCell
        center={center}
        emptyCellContent={emptyCellContent}
        fontSize={fontSize}
        lineClamp={lineClamp}
        lineHeight={lineHeight}
        padding={padding}
        text={defineText(data, children)}
      />
    );
  };

  return (
    <Media query={breakpoints ? chooseMediaQuery(breakpoints, priority) : DEFAULT_MEDIA_QUERY}>
      {matches => (matches ? null : (
        <CellWrapper
          backgroundColor={backgroundColor}
          onClick={handleClick}
          width={width}
        >
          {renderFunctionOrComponentOrDefault()}
        </CellWrapper>
      ))
      }
    </Media>
  );
};

/** PropTypes */
Cell.propTypes = {
  /** Center the text in the cell */
  center: PropTypes.bool,
  /** Background color of the cell */
  backgroundColor: PropTypes.string,
  /** List of media query breakpoints */
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  /** Custom styled children to display */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]), // TODO
  /** Text to display in the cell */
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ]),
  /** Text or Component to display when cell is empty */
  emptyCellContent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Text font-size */
  fontSize: PropTypes.string,
  /** Click handler for a click on the cell */
  handleClick: PropTypes.func,
  /** Number of lines before ellipsis */
  lineClamp: PropTypes.number,
  /** Height of a line */
  lineHeight: PropTypes.number,
  /** Padding */
  padding: PropTypes.string,
  /** Column display priority */
  priority: PropTypes.number,
  /** Cell width */
  width: PropTypes.string,
};

Cell.defaultProps = {
  width: '100%',
  backgroundColor: 'transparent',
};

export default Cell;
