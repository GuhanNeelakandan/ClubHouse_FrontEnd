import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Club from "../Club.png"
import RoomCard from './RoomCard';

function Rooms() {
    let navigate = useNavigate();
    const [room, setRoom] = useState([])


    useEffect(() => {
        axios.get('https://clubhouse-signin.herokuapp.com/getRoom', {
            headers: {
                Authorization: window.localStorage.getItem('myapptoken'),
            },
        }).then((res) => {
            setRoom(res.data)
        })
    }, [])
    return (
        <div className="container project">
            <img src={Club} className='img-fluid club-logo' />
            <div className="d-flex justify-content-between">
                <Link to={'/chat'}><input type="submit" class="btn btn-primary btn-sm mt-3" value={"Back"} /></Link>
                <Link to={'/create'}><input type="submit" class="btn btn-primary btn-sm mt-3" value={"Create Room"} /></Link>
                <Link to={'/invite'}><input type="submit" class="btn btn-danger btn-sm mt-3" value={"Logout"} /></Link>
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