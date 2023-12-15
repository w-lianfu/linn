import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import AppBar from '@comp/app-bar/index';
import AppStatus from '@comp/app-status/index';
import AppMenu from '@comp/app-menu/index';
import AppRight from '@comp/app-right/index';
import Dashboard from '@page/dashboard/index';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'grid',
  gridTemplateRows: '0.6rem 1fr 0.6rem',
  overflowY: 'hidden',
});

const EPaper = styled(Paper)({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '0.6rem 1fr 0.6rem',
  overflowY: 'hidden',
});

const AppPage = (props: IProps, state: IState) => {
  return (
    <DPaper>
      <AppBar />
      <EPaper>
        <AppMenu />
        <Dashboard />
        <AppRight />
      </EPaper>
      <AppStatus />
    </DPaper>
  );
};

export default AppPage;
