import React from 'react';
import { Paper, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import AppDial from '@con/app-dial';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  height: '100%',
  display: 'flex',
  flex: 1,
  overflowY: 'auto',
});

const Dashboard = (props: IProps, state: IState) => {
  return (
    <DPaper>
      <AppDial />
      <Button variant="contained" color="primary">Primary Primary Primary</Button>
      <Button variant="contained" color="secondary">Secondary Secondary Secondary</Button>
      <Button variant="contained" color="success">Success Success Success</Button>
      <Button variant="contained" color="info">Info Info Info Info Info</Button>
      <Button variant="contained" color="warning">Warning Warning Warning</Button>
      <Button variant="contained" color="error">Error Error Error</Button>
      <Button variant="contained" color="tomato">Tomato Tomato Tomato</Button>
      <Button variant="contained" color="oliver">Oliver Oliver Oliver</Button>
      <Button variant="contained" color="purple">Purple Purple Purple</Button>
      <Button variant="contained" color="magenta">Magenta Magenta Magenta</Button>
      <Button variant="contained" color="wheat">Wheat Wheat Wheat</Button>
      <Button variant="contained" color="black">Black Black Black</Button>
      <Button variant="contained" color="dark">Dark Dark Dark</Button>
      <Button variant="contained" color="grey">Grey Grey Grey</Button>
      <Button variant="contained" color="dim">Dim Dim Dim Dim Dim</Button>
      <Button variant="contained" color="white">White White White</Button>
      <Button variant="contained">Default Default Default</Button>
      <Button disabled={true}>Disabled Disabled</Button>
      <p>~~~ 华丽的分割线 ~~~</p>
      <Button variant="outlined" color="primary">Primary Primary Primary</Button>
      <Button variant="outlined" color="secondary">Secondary Secondary Secondary</Button>
      <Button variant="outlined" color="success">Success Success Success</Button>
      <Button variant="outlined" color="info">Info Info Info Info Info</Button>
      <Button variant="outlined" color="warning">Warning Warning Warning</Button>
      <Button variant="outlined" color="error">Error Error Error</Button>
      <Button variant="outlined" color="tomato">Tomato Tomato Tomato</Button>
      <Button variant="outlined" color="oliver">Oliver Oliver Oliver</Button>
      <Button variant="outlined" color="purple">Purple Purple Purple</Button>
      <Button variant="outlined" color="magenta">Magenta Magenta Magenta</Button>
      <Button variant="outlined" color="wheat">Wheat Wheat Wheat</Button>
      <Button variant="outlined" color="black">Black Black Black</Button>
      <Button variant="outlined" color="dark">Dark Dark Dark</Button>
      <Button variant="outlined" color="grey">Grey Grey Grey</Button>
      <Button variant="outlined" color="dim">Dim Dim Dim Dim Dim</Button>
      <Button variant="outlined" color="white">White White White</Button>
      <Button variant="outlined">Default Default Default</Button>
      <p>~~~ 华丽的分割线 ~~~</p>
      <Button variant="dashed" color="primary">Primary Primary Primary</Button>
      <Button variant="dashed" color="secondary">Secondary Secondary Secondary</Button>
      <Button variant="dashed" color="success">Success Success Success</Button>
      <Button variant="dashed" color="info">Info Info Info Info Info</Button>
      <Button variant="dashed" color="warning">Warning Warning Warning</Button>
      <Button variant="dashed" color="error">Error Error Error</Button>
      <Button variant="dashed" color="tomato">Tomato Tomato Tomato</Button>
      <Button variant="dashed" color="oliver">Oliver Oliver Oliver</Button>
      <Button variant="dashed" color="purple">Purple Purple Purple</Button>
      <Button variant="dashed" color="magenta">Magenta Magenta Magenta</Button>
      <Button variant="dashed" color="wheat">Wheat Wheat Wheat</Button>
      <Button variant="dashed" color="black">Black Black Black</Button>
      <Button variant="dashed" color="dark">Dark Dark Dark</Button>
      <Button variant="dashed" color="grey">Grey Grey Grey</Button>
      <Button variant="dashed" color="dim">Dim Dim Dim Dim Dim</Button>
      <Button variant="dashed" color="white">White White White</Button>
      <Button variant="dashed">Default Default Default</Button>
      <Typography variant="h1">万物皆迷于有形，则无形绝尘于万物</Typography>
      <Typography variant="h2">追求技术之巅，探索宇宙之秘</Typography>
      <Typography variant="h3">以无形化有形归来，以有形化无形归去</Typography>
      <Typography variant="h4">百味难调千人口，杯酒醉倒万人心</Typography>
      <Typography variant="h5">做一棵树，不因风雨摇，不为雷电动</Typography>
      <Typography variant="h6">做一棵树，只因风雨摇，只为雷电动</Typography>
    </DPaper>
  );
};

export default Dashboard;
