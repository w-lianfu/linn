import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  height: '0.4rem',
  backgroundColor: Color.secondary(1),
});

const AppStatus = (props: IProps, state: IState) => <DBox />;

export default AppStatus;
