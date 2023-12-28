import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  MdDashboard, MdHome, MdVideocam, MdImage,
  MdEmojiEvents, MdOutlineSecurity,
  MdLocalPolice, MdAcUnit, MdCamera,
} from 'react-icons/md';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const CBox = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderLeft: `0.4rem solid ${Color.warning(1)}`,
  borderRight: `0.2rem solid ${Color.warning(1)}`,
  backgroundColor: Color.grey(1),
});

const DBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
});

const EBox = styled(DBox)({
  marginTop: '1rem',
});

const DButton = styled(IconButton)({
  width: '3.6rem',
  height: '3.6rem',
  padding: 0,
  marginBottom: '1.4rem',
});

const AppMenu = (props: IProps, state: IState) => (
  <CBox>
    <EBox>
      <DButton color="primary">
        <MdDashboard style={{ fontSize: '2rem' }} />
      </DButton>
      <DButton color="secondary">
        <MdHome style={{ fontSize: '2rem' }} />
      </DButton>
      <DButton color="warning">
        <MdImage style={{ fontSize: '2rem' }} />
      </DButton>
      <DButton color="info">
        <MdVideocam style={{ fontSize: '2rem' }} />
      </DButton>
      <DButton color="success">
        <MdAcUnit style={{ fontSize: '2rem' }} />
      </DButton>
      <DButton color="error">
        <MdOutlineSecurity style={{ fontSize: '2rem' }} />
      </DButton>
    </EBox>

    <DBox>
      <DButton color="warning">
        <MdLocalPolice style={{ fontSize: '2rem' }} />
      </DButton>
      <DButton color="secondary">
        <MdCamera style={{ fontSize: '2rem' }} />
      </DButton>
      <DButton color="primary">
        <MdEmojiEvents style={{ fontSize: '2rem' }} />
      </DButton>
    </DBox>
  </CBox>
);

export default AppMenu;
