import React from 'react'
import { Link } from 'react-router-dom'
import Club from "../Club.png"

function Chats() {
  return (
    <div className="container-fluid">
      <div className='chat-left'>
        <img src={Club} className='img-fluid club-logo' />
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
          
          <Link to={'/invite'}><li class="nav-item">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            <span>Logout</span>
          </li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Chats