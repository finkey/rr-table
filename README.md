# React Responsive Table

Responsive and customizable [React](https://reactjs.org/) Table component.

[![npm](https://img.shields.io/npm/v/rr-table.svg)](https://www.npmjs.com/package/rr-table)

## User Guide

- [React Responsive Table](#react-responsive-table)
  - [User Guide](#user-guide)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribute](#contribute)

### Installation

```bash
npm i rr-table
```

### Usage

```javascript
import React from "react";

export default () => (
  <Table
    breakpoints={[400, 700, 900, 1000, 1100]}
    priorities={[1, 3, undefined, undefined, 2]}
    colored
    isLoading={isLoading}
    loader={() => <p>Chargement...</p>}
    list={data}
    card={({ data: d, close }) => (
      <ProspectCard
        close={close}
        data={d}
        onArchiveClick={this.onArchiveClick}
      />
    )}
    titles={["Entreprise", "Nom", "Apporteur d'affaires", "Type de projet"]}
    keys={[
      {
        display: "company.name",
        replaceBy: "name"
      },
      "users[0].fullName",
      "createdBy.companyName",
      "type.title",
      d =>
        `${formatCurrency(d.financingNeeds.minimum)} - ${formatCurrency(
          d.financingNeeds.maximum
        )}`
    ]}
  />
);
```

### Contribute

- npm run build
- npm publish
