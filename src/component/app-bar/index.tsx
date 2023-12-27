import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  height: '100%',
  backgroundColor: Color.oliver(1),
});

const AppBar = (props: IProps, state: IState) => <DBox />;

export default AppBar;
