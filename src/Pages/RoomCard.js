import axios from 'axios';
import React from 'react'

function RoomCard(props) {
    let handleDelete = async (id) => {
        try {
            let ask = window.confirm(
                'Are you sure, do you want to delete this Room?'
              );
              if(ask){
                await axios.delete(`https://clubhouse-signin.herokuapp.com/deleteRoom/${id}`, {
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
                <h5 class="card-title"><strong>{props.list.name}</strong></h5>
                <a href={`https://clubhouse-clone-rooms.herokuapp.com/${props.list.name}`} target="_blank" className="btn btn-primary btn-sm"> Join</a>
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