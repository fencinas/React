import React from 'react';
import { AppStyle } from './App.jss';
import { ProfileCard } from './components/profileCard/profileCard';
import IUser from './models/user';
import { images } from './styles/images';

function App() {
  const appStyle = AppStyle();

  const user : IUser = { 
    name: 'Fran Encinas',
    age: '37',
    location: 'Valencia',
    picture: images.imageProfile,
    stats: [{name: 'Followers', value: '80K'}, {name: 'Likes', value: '803K'}, {name: 'Photos', value: '1.4K'}]
  }

  return (
    <div className={appStyle.app}>
      <ProfileCard user={user}></ProfileCard>
    </div>
  );
}

export default App;