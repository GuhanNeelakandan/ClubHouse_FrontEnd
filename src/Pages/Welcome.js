import React from 'react'
import { Link } from 'react-router-dom'
import Club from "../Club.png"


function Welcome() {
  return (
    <div className="welcome-style">
        <img src={Club} className="img-fluid logo"/>
        <div className="welcome-info">
            <p>
                We're Working hard to get Clubhouse ready for launch! while we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks
            </p>
            <p>
                Anyone can join with an invite from an existing user -- or reserve your username and we'll text you if you have a friend on the app who can let you in .We are so grateful you're here and can't wait to have you join!
            </p>
            <p>
                Paul,Roshan and the Clubhouse team
            </p>
        </div>
        <div className="action-btn">
           <Link to={"/invite"} className="btn btn-primary rounded-pill mb-3">Welcome in</Link>
           <Link to={"/signup"} >Have a invite text? Sing in</Link>
        </div>
    </div>
  )
}

export default Welcome