import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  width: '100%',
  height: '100%',
  borderLeft: `0.4rem solid ${Color.warning(1)}`,
  borderRight: `0.2rem solid ${Color.warning(1)}`,
  backgroundColor: Color.grey(1),
});

const AppMenu = (props: IProps, state: IState) => <DBox />;

export default AppMenu;
