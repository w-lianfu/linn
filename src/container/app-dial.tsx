import React from 'react';
import {
  Box, SpeedDial, SpeedDialIcon, SpeedDialAction,
} from '@mui/material';
import {
  MdLock, MdLockOpen, MdHome,
} from 'react-icons/md';

interface IProps {}
interface IState {}

const actions = [
  { icon: <MdLock />, name: 'Lock' },
  { icon: <MdLockOpen />, name: 'Open' },
  { icon: <MdHome />, name: 'Home' },
];

const AppDial = (props: IProps, state: IState) => {
  return (
    <Box>
      <SpeedDial open={true} ariaLabel="Speed Dial"
        icon={<SpeedDialIcon />}>
        {actions.map((action: any) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default AppDial;
