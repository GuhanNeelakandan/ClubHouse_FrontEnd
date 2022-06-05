import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Club from "../Club.png"
import RoomCard from './RoomCard';

function Rooms() {
    let navigate = useNavigate();
    const [room, setRoom] = useState([])

    let handleLogout = () => {
        window.localStorage.removeItem('myapptoken');
        navigate('/invite');
      };

    function fetchData(){
        if (!localStorage.getItem("myapptoken")) {
          navigate("/");
        } 
      }

    useEffect(() => {
        axios.get('https://clubhouse-clone-rooms.herokuapp.com/room/getRoom', {
            headers: {
                Authorization: window.localStorage.getItem('myapptoken'),
            },
        }).then((res) => {
            setRoom(res.data)
        })
        fetchData()
    }, [])
    return (
        <div className="container project">
            <img src={Club} className='img-fluid club-logo' />
            <div className="push">
                <Link to={'/chat'}><input type="submit" class="btn btn-primary btn-sm mt-3" value={"Back"} /></Link>
                <Link to={'/create'}><input type="submit" class="btn btn-primary btn-sm mt-3" value={"Create Room"} /></Link>
                <input type="submit" class="btn btn-danger btn-sm mt-3" onClick={handleLogout} value={"Logout"} />
            </div>

            <div className="container-fluid next-page">
                <div className="row mt-5 rooms">
                    
                        {
                            room.map((list) => {
                                return <RoomCard list={list} />
                            })
                        }
                    
                </div>
            </div>
            <p className='text-center'>Discover great Clubs and Discuss club Topics</p>

        </div>
    )
}

export default Rooms