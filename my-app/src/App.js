import React from 'react';
import Profile from './Components/Profile/Profile';
import Stats from './Components/Stats/Stats';
// import './App.css';

const USER1 = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const USER2 = {
  name: 'Petra Marica',
  tag: '@pmarica',
  location: 'Salvador, Brasil',
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
  stats: {
    followers: 1000,
    views: 2000,
    likes: 3000,
  },
};

function App() {
  return (
    <div>
      <Profile User={USER1}> </Profile> <Stats> </Stats>{' '}
      <Profile User={USER2}> </Profile> <Stats> </Stats>{' '}
    </div>
  );
}

export default App;
