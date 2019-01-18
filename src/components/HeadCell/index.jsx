import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Media from 'react-media';

import { chooseMediaQuery, defineText } from 'utils';
import {
  DEFAULT_MEDIA_QUERY, ASC, DESC, DEFAULT_PADDING,
} from 'config/constants';
import Sort from '../Sort';

/** Styles */
const Cell = styled.div`
  width: ${({ width }) => width || '100%'};
  height: 100%;
  display: flex;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

const Title = styled.div`
  align-items: center;
  color: ${({ color }) => color};
  display: flex;
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  height: 100%;
  justify-content: flex-start;
  margin: 0 auto;
  max-height: 100%;
  overflow: hidden;
  padding: ${({ padding }) => padding || DEFAULT_PADDING};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  text-overflow: ellipsis;
  width: 100%;
`;

class HeadCell extends PureComponent {
  /** PropTypes */
  static propTypes = {
    /** List of breakpoints */
    breakpoints: PropTypes.arrayOf(PropTypes.number),
    /** Center the text in the cell */
    center: PropTypes.bool,
    /** Title font-size */
    fontSize: PropTypes.string,
    /** sorting function */
    handleSort: PropTypes.func,
    /** id of the row */
    key: PropTypes.string,
    /** Cell Padding */
    padding: PropTypes.string,
    /** List of priorities */
    priority: PropTypes.number,
    /** sorting object */
    sortedKey: PropTypes.string,
    /** Custom row style */
    style: PropTypes.object,
    /** Color of the displayed text */
    textColor: PropTypes.string,
    /** Column Title */
    title: PropTypes.string,
    /** Column width */
    width: PropTypes.string,
  };

  state = {
    sortOrder: null,
  };

  onDefaultSort = () => {
    const { handleSort, title } = this.props;
    if (typeof title === 'object' && title.sortingKey) {
      if (this.state.sortOrder === ASC) {
        this.setState({ sortOrder: DESC });
        handleSort(title.sortingKey, DESC);
      }
      this.setState({ sortOrder: ASC });
      handleSort(title.sortingKey, ASC);
    }
    return null;
  };

  render() {
    const {
      breakpoints,
      center,
      fontSize,
      handleSort,
      key,
      padding,
      priority,
      sortedKey,
      style,
      textColor,
      title,
      width,
    } = this.props;

    const isSortable = typeof onSort === 'function' && typeof title.sortingKey === 'string';
    const text = defineText(title);

    return (
      <Media
        key={key}
        query={breakpoints ? chooseMediaQuery(breakpoints, priority) : DEFAULT_MEDIA_QUERY}
      >
        {matches => (matches ? null : (
          <Cell onClick={this.onDefaultSort} width={width}>
            <Title
              center={center}
              color={textColor}
              fontSize={fontSize}
              padding={padding}
              style={style}
            >
              {text}
            </Title>
            {title && isSortable && <Sort onSort={handleSort} sortingKey={sort.sortingKey} />}
          </Cell>
        ))
        }
      </Media>
    );
  }
}

export default HeadCell;
