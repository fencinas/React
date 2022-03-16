import React from 'react';
import { AppStyle } from './App.jss';
import { ProfileCard } from './components/profileCard/profileCard';

function App() {
  const appStyle = AppStyle();

  return (
    <div className={appStyle.app}>
      <ProfileCard></ProfileCard>
    </div>
  );
}

export default App;