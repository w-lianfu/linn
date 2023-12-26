import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  width: '0.4rem',
  height: '100%',
  backgroundColor: Color.purple(1),
});

const AppRight = (props: IProps, state: IState) => <DBox />;

export default AppRight;
