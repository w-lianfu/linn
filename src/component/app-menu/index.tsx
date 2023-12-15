import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  width: '0.6rem',
  height: '100%',
  backgroundColor: Color.tomato(1),
});

const AppMenu = (props: IProps, state: IState) => <DBox />;

export default AppMenu;
