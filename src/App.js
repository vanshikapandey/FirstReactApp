import React from 'react';

// how to use a component
// 1=> import the component
// 2==> add it like html tags

import Header from './components/Headers';
import Card from './components/Card';

const users = [
  {
    name:'Vanshika',
    desc: 'Description for vanshika',
    username: 'vanshikapandey',
    website: null
  },
  {
    name:'Praveen',
    desc: 'Description for Praveen',
    username: 'pkspyder007',
    website: null
  },
{
  name:'ParamJeet',
  desc: 'Description for Param',
  username: 'iampjeetsingh',
  website: null
}
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
      <h1>Its my first react app.</h1>
      <div className="users">
      {users.map(({name, desc, username, website}) => {
        return <Card key={username} name={name} desc={desc} username={username} website={website} />
      })}
      </div>
      </div>
    </div>
  );
}

export default App;