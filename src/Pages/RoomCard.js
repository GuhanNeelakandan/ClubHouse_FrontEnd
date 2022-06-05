import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function RoomCard(props) {
    let navigate = useNavigate()
    function fetchData() {
        if (!localStorage.getItem("myapptoken")) {
            navigate("/");
        }
    }
    useEffect(() => {
        fetchData()
    })
    let handleDelete = async (id) => {
        try {
            let ask = window.confirm(
                'Are you sure, do you want to delete this Room?'
              );
              if(ask){
                await axios.delete(`https://clubhouse-clone-rooms.herokuapp.com/room/deleteRoom/${id}`, {
                    headers: {
                        Authorization: window.localStorage.getItem('myapptoken'),
                    },
                });
                alert('Removed');
                window.location.reload(false)
              }
            
        } catch (error) {
            alert('Something went wrong');
        }
    };
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card-body box">
                <h5 class="card-title"><strong>{props.list.room}</strong></h5>
                <a href={`https://clubhouse-clone-rooms.herokuapp.com/${props.list.room}`} target="_blank" className="btn btn-primary btn-sm"> Join</a>
                <button
                    onClick={() => handleDelete(props.list._id)}
                    className="btn btn-danger btn-sm m-2" >
                    Remove
                </button>
            </div>
        </div>

    )
}

export default RoomCard