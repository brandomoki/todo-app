import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ToDo from './Components/ToDo';
import Settings from './Settings/settings';
import AppFooter from './Components/Footer/footer';
import AppHeader from './Components/Header/header';



export default class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader />
        <Routes>
          <Route path='/' element={<ToDo />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
        <AppFooter />
      </>
    );
  }
}

// {/* <AppHeader  />
//       <ToDo />
//       <AppFooter /> */}
