import React from 'react';
import { GroupuiCard, GroupuiHeadline } from '@group-ui/group-ui-react';

const Implemented = () => {
  return (
    <GroupuiCard padding="30" elevation={1} style={{ marginTop: 20 }}>
      <GroupuiHeadline heading="h3">Implemented</GroupuiHeadline>
      <ul>
        <li>React 18</li>
        <li>Typescript</li>
        <li>Prettier</li>
        <li>Eslint</li>
        <li>Playwright</li>
        <li>i18n</li>
        <li>Sass / Scss</li>
        <li>Color Scheme</li>
        <li>Volkswagen GroupUI </li>
      </ul>
    </GroupuiCard>
  );
};

export default Implemented;
