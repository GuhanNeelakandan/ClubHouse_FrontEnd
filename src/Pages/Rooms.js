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

    function fetchData() {
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
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card-body box">
                            <h5 class="card-title"><strong>Fun</strong></h5>
                            <a href={`https://clubhouse-clone-rooms.herokuapp.com/fun`} target="_blank" className="btn btn-primary btn-sm"> Join</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card-body box">
                            <h5 class="card-title"><strong>Nature</strong></h5>
                            <a href={`https://clubhouse-clone-rooms.herokuapp.com/nature`} target="_blank" className="btn btn-primary btn-sm"> Join</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card-body box">
                            <h5 class="card-title"><strong>Music</strong></h5>
                            <a href={`https://clubhouse-clone-rooms.herokuapp.com/music`} target="_blank" className="btn btn-primary btn-sm"> Join</a>
                        </div>
                    </div>
                    
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