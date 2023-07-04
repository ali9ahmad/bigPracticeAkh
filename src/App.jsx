// styles
import './App.css';

// components
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import NewUserForm from './newuser/NewUserForm';
import UserList from './userlist/Userlist';

// hooks
import {useState} from 'react';

//************************************************************************************************

function App () {
  const [users, setUsers] = useState ([
    {
      id: 2,
      image: 'adsfasd',
      firstName: 'asdfasdf',
      lastName: 'asdfasfd',
      age: 23,
      from: 'adsfa',
      job: 'asdfasf',
      gender: 'asdfasddf',
    },
    {
      id: 3,
      image: 'adsfasd',
      firstName: 'asdfasdf',
      lastName: 'asdfasfd',
      age: 23,
      from: 'adsfa',
      job: 'asdfasf',
      gender: 'asdfasddf',
    }
  ]);
  
  //************************************************************************************************
  
  // delete fundction
  const deleteUser = (id) => {
    // console.log(id)
    setUsers ((prev) => {
      return prev.filter ((user) => {
        return user.id !== user.id;
      });
    });
  };
  
  const [showModal, setShowModal] = useState (false);
  
  //************************************************************************************************
  
  // close modal function
  const closeModal = e => {
    if (e.target.className === 'overlay') setShowModal (false);
    if (e.key === 'Escape') setShowModal (false);
  };
  
  //************************************************************************************************
  
  //add user
  const addUser = user => {
    setUsers (prev => {
      return [...prev, user];
    })
    setShowModal(false)
  };
  
  // ****************************************************************
  
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
    <Navbar usersLength={users.length} />
    <main>
    <div className="no-users">
    {users.length === 0 && <h2>NO USERS YET</h2>}
    </div>
    <UserList users={users} deleteUser={deleteUser} />
    </main>
    {showModal && <NewUserForm addUser={addUser}/>}
    <button onClick={() => setShowModal (true)} className="create-user">
    Create User
    </button>
    <Footer />
    </div>
    );
  }
  
  export default App;
  