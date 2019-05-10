import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { setBackgroundColor, selectItems, defineComponentAsFunction } from 'utils';
import Row from 'components/Row';
import Head from 'components/Head';
import EmptyDataRow from 'components/defaults/EmptyDataRow';
import 'config/styles/default.css';

/** Styles */
const TableWrapper = styled.div`
  width: 100%;
`;

/** Component */
const Table = ({
  breakpoints,
  cellPadding,
  center,
  colWidths,
  colored,
  emptyCellContent,
  emptyList,
  fontSize,
  head,
  headCell,
  headHeight,
  isLoading,
  keys,
  lineClamp,
  lineHeight,
  list,
  loader: Loader,
  onRowClick,
  onSort,
  priorities,
  row,
  rowColor,
  rowHeight,
  selectedRowId,
  separator,
  sort,
  styles,
  textColor,
  titles,
}) => {
  /** Head Component */
  const HeadComponent = defineComponentAsFunction(head, Head);

  const propsPassedToHeadComponent = {
    breakpoints,
    cellPadding,
    center,
    colWidths,
    headCell,
    headHeight,
    onSort,
    priorities,
    sortingState: sort,
    textColor,
    titles,
  };

  /** Row Component */
  const renderRow = () => {
    if (isLoading && Loader) {
      return <Loader />;
    }
    if (!list || list.length === 0) {
      let rowContent = <EmptyDataRow>Pas de données disponibles</EmptyDataRow>;

      if (typeof emptyList === 'function') {
        rowContent = emptyList();
      } else if (React.isValidElement(emptyList)) {
        rowContent = emptyList;
      } else if (typeof emptyList === 'string') {
        rowContent = <EmptyDataRow>{emptyList}</EmptyDataRow>;
      }

      return (
        <Row id="no-data" onClick={null}>
          {rowContent}
        </Row>
      );
    }

    return list.map((data, index) => {
      const id = data.id || uuidv4();
      const items = selectItems({ data, keys, separator });

      const rowProps = {
        data,
        id,
        breakpoints,
        cellPadding,
        center,
        colWidths,
        colored: setBackgroundColor(index, colored),
        emptyCellContent,
        fontSize,
        onClick: onRowClick,
        items,
        key: id,
        lineClamp,
        lineHeight,
        priorities,
        rowColor,
        rowFeedback: true,
        rowHeight,
        selected: selectedRowId === id,
        textColor,
      };

      if (row) {
        return row({ ...rowProps });
      }

      return <Row {...rowProps} />;
    });
  };

  /** render */
  return (
    <TableWrapper style={styles && styles.table}>
      {HeadComponent(propsPassedToHeadComponent)}
      {renderRow()}
    </TableWrapper>
  );
};

/** Props */
Table.propTypes = {
  /** List of breakpoints */
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  /** Cell Padding */
  cellPadding: PropTypes.string,
  /** Center the text in the cell */
  center: PropTypes.bool,
  /** row background color */
  colored: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      color: PropTypes.string,
      parity: PropTypes.oneOfType([PropTypes.oneOf(['even', 'odd']), PropTypes.number]),
    }),
  ]),
  /** List of columns widths */
  colWidths: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  /** Text or Component to display when cell is empty */
  emptyCellContent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** What to display when list is empty */
  emptyList: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node]),
  /** Text font-size */
  fontSize: PropTypes.string,
  /** Render Head Component */
  head: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** Height of the Head row */
  headHeight: PropTypes.string,
  /** Render HeadCell Component */
  headCell: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** Data is loading */
  isLoading: PropTypes.bool,
  /** Keys to display */
  keys: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        display: PropTypes.string.isRequired,
        replace: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
      }),
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.func,
    ]),
  ),
  /** Number of lines before ellipsis */
  lineClamp: PropTypes.number,
  /** Height of a line */
  lineHeight: PropTypes.number,
  /** List of data to display */
  list: PropTypes.arrayOf(PropTypes.object),
  /** Component to display when data is loading */
  loader: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Custom function on row click (instead of open card) */
  onRowClick: PropTypes.func,
  /** List of priorities */
  priorities: PropTypes.arrayOf(PropTypes.number),
  /** Render Row Component */
  row: PropTypes.func,
  /** Colors of the row */
  rowColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      default: PropTypes.string.isRequired,
      hovered: PropTypes.string,
      selected: PropTypes.string.isRequired,
    }),
  ]),
  /** Height of the Row */
  rowHeight: PropTypes.string,
  /** Id of the selected Row */
  selectedRowId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** separator to "join" list of string */
  separator: PropTypes.string,
  /** sorting function */
  onSort: PropTypes.func,
  /** sorting object */
  sort: PropTypes.shape({
    sortingKey: PropTypes.string,
    order: PropTypes.oneOf(['ASC', 'DESC']),
  }),
  /** Custom styles */
  styles: PropTypes.shape({
    cell: PropTypes.object,
    head: PropTypes.object,
    headCell: PropTypes.object,
    row: PropTypes.object,
    table: PropTypes.object,
  }),
  /** Colors of the displayed text */
  textColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      default: PropTypes.string.isRequired,
      hovered: PropTypes.string,
      selected: PropTypes.string.isRequired,
    }),
  ]),
  /** List of Titles of the columns */
  titles: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        sortingKey: PropTypes.string,
      }),
    ]),
  ),
};

export default Table;
