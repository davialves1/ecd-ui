import React from 'react';
import {
  GroupuiHeadline,
  GroupuiHeader,
  GroupuiIcon,
  GroupuiTopNavigation,
  GroupuiTopNavigationItem,
  GroupuiDivider,
} from '@group-ui/group-ui-react';

const Header = () => {
  return (
    <GroupuiHeader>
      <GroupuiHeadline heading="h5">
        <span style={{ color: 'white' }}>Emission Compliance Database</span>
      </GroupuiHeadline>
      <GroupuiTopNavigation
        size="l"
        inverted={true}
        embedded
        style={{
          display: 'flex',
          marginLeft: 'auto',
        }}
      >
        <GroupuiTopNavigationItem active>Home</GroupuiTopNavigationItem>
        <GroupuiTopNavigationItem>Import</GroupuiTopNavigationItem>
        <GroupuiTopNavigationItem>Export</GroupuiTopNavigationItem>
      </GroupuiTopNavigation>
      <GroupuiTopNavigation inverted={true} embedded>
        <GroupuiDivider vertical />
        <GroupuiIcon name="settings-32" />
      </GroupuiTopNavigation>
    </GroupuiHeader>
  );
};

export default Header;
