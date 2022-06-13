import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Club from "../Club.png"

function Chats() {
  let navigate = useNavigate()
  let handleLogout = () => {
    window.localStorage.removeItem('myapptoken');
    navigate('/invite');
  };
  function fetchData() {
    if (!localStorage.getItem("myapptoken")) {
        navigate("/");
    }
}
useEffect(() => {
    fetchData()
})
  return (
    <div className="container-fluid">
      <div className='chat-left'>
        <img src={Club} className='img-fluid club-logo' />
        <div className='mb-4'>
        <button className='btn btn-danger logout' onClick={handleLogout}><i class="fa fa-power-off" aria-hidden="true"></i></button>
        </div>
        <p>Hi guys You can join in any rooms and also you can create new room and invite your friends to join</p>
        <ul className="nav-list">
          <Link to={'/room'}>
            <li class="nav-item">
              <i class="fa fa-globe" aria-hidden="true"></i>
              <span>Rooms</span>
            </li>
            </Link>
            <Link to={'/create'}>
            <li class="nav-item">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            <span>Create Room</span>
          </li></Link>
          <Link to={'/join'}>
            <li class="nav-item">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            <span>Join Room</span>
          </li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Chats