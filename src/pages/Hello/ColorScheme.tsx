import React from 'react';
import '../../style/global-colors.scss';
import globalColors from '../../style/global-colors';
import { GroupuiCard, GroupuiHeadline } from '@group-ui/group-ui-react';

const ColorScheme = () => {
  const colors: string[] = [
    'petrol-800',
    'petrol-1000',
    'grey-1000',
    'grey-800',
    'grey-600',
    'grey-400',
    'grey-200',
    'grey-100',
  ];

  return (
    <GroupuiCard
      padding="30"
      elevation={1}
      style={{ marginTop: 20, width: 500 }}
    >
      <GroupuiHeadline heading="h3">Color Scheme</GroupuiHeadline>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 20 }}>
        {colors.map((color, i) => (
          <p
            style={{
              width: 100,
              height: 100,
              borderRadius: 5,
              margin: 2,
              fontSize: 'small',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              backgroundColor: globalColors.get(color),
            }}
            key={i}
          >
            {color}
          </p>
        ))}
      </div>
    </GroupuiCard>
  );
};

export default ColorScheme;
