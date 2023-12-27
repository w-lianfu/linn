import React from 'react';
import {
  Box, SpeedDial, SpeedDialIcon, SpeedDialAction,
} from '@mui/material';
import {
  MdLock, MdLockOpen, MdHome, MdDashboard,
  MdOutlineDonutLarge, MdImage, MdVideocam,
} from 'react-icons/md';

interface IProps {}
interface IState {}

const actions = [
  { icon: <MdLock />, name: 'Lock' },
  { icon: <MdOutlineDonutLarge />, name: 'Loading' },
  { icon: <MdDashboard />, name: 'Dashboard' },
  { icon: <MdHome />, name: 'Home' },
  { icon: <MdImage />, name: 'Image' },
  { icon: <MdVideocam />, name: 'Video' },
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
            tooltipTitle={''} />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default AppDial;
