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

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])
  
  
  // delete user
  const deleteUser = (id) => {
    // console.log(id)
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  // close modal
  const closeModal = (e) => {
     if (e.target.classList.value === 'overlay') setShowModal(false)
     if (e.key === "Escape") setShowModal(false)
  }


  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length}/>
        <main>
          {!users.length && <div className='no-users'>
            <h2>No users</h2>
          </div> }
          <UserList users={users} deleteUser={deleteUser} />
        </main>
      <Footer/>
      {showModal && <NewUserForm addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
    </div>
  )
}

export default App
