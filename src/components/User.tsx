import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}


const User = () => {

  const [user, setUser] = useState<User>();

  // const initialUser: User = {
  //   uid: '',
  //   name: ''
  // }

  const login = () => {
    setUser({
      uid: '98123y7h',
      name: 'David'
    });
  }

  return(
    <div className="mt-4">
      <h3>User: useState</h3>

      <button className="btn btn-outline-light" onClick={login}>
        Login
      </button>

      {
        (!user) ?
          <pre>No user</pre>
        :
          <pre>{JSON.stringify(user)}</pre>
      }

    </div>
  );
}

export default User;