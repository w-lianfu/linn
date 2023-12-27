import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  width: '100%',
  height: '100%',
  backgroundColor: Color.warning(1),
});

const AppRight = (props: IProps, state: IState) => <DBox />;

export default AppRight;
