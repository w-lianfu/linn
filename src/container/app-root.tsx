import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@scss/index.scss';
import Theme from '@theme/index';
import Dashboard from '@page/dashboard/index';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => (
  <ThemeProvider theme={Theme}>
    <Dashboard />
  </ThemeProvider>
);

export default AppRoot;
