import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ClampLines from 'react-clamp-lines';

import EmptyCell from './EmptyCell';

/** Style */
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: 0 auto;
  max-height: 100%;
  overflow: hidden;
  padding: ${({ padding }) => padding};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  text-overflow: ellipsis;
  width: 100%;
`;

/** Component */
const DefaultCell = ({
  center,
  className,
  emptyCellContent,
  fontSize,
  lineClamp,
  lineHeight,
  padding,
  onClick,
  style,
  text,
}) => {
  const renderData = (data) => {
    if (data) {
      if (React.isValidElement(data)) {
        return data;
      }

      return <ClampLines text={text.toString()} lines={lineClamp} buttons={false} delay={0} />;
    }

    return <EmptyCell center={center}>{emptyCellContent}</EmptyCell>;
  };

  return (
    <Wrapper onClick={onClick}>
      <Content
        center={center}
        className={className}
        fontSize={fontSize}
        lineClamp={lineClamp}
        lineHeight={lineHeight}
        padding={padding}
        style={style}
      >
        {renderData(text)}
      </Content>
    </Wrapper>
  );
};

/** Prop types */
DefaultCell.propTypes = {
  /** OnClick handler */
  onClick: PropTypes.func,
  /** Center the text in the cell */
  center: PropTypes.bool,
  /** Custom style with className */
  className: PropTypes.string,
  /** Text or Component to display when cell is empty */
  emptyCellContent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Font-size */
  fontSize: PropTypes.string,
  /** Number of lines before ellipsis */
  lineClamp: PropTypes.number,
  /** Height of a line */
  lineHeight: PropTypes.number,
  /** Padding */
  padding: PropTypes.string,
  /** Custom style */
  style: PropTypes.object,
  /** Text to display in the cell */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
};

DefaultCell.defaultProps = {
  fontSize: 'inherit',
  lineClamp: 2,
  lineHeight: 1.4,
  padding: '4px 10px',
  onClick: () => {},
};

export default DefaultCell;
