import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@scss/index.scss';
import Theme from '@theme/index';
import AppPage from './app-page';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => (
  <ThemeProvider theme={Theme}>
    <AppPage />
  </ThemeProvider>
);

export default AppRoot;
