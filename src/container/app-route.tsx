import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import AppPage from './app-page';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  return (
    <BrowserRouter>
      <Routes basename="/">
        <Route path="/" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
