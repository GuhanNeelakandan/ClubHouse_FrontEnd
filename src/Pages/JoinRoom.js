import React, { useState } from 'react'

function JoinRoom() {
    const [join,setJoin]=useState()
    return (
        <div className='container projects'>
            <p>
                <h4 className='text-center pt-5'>Hey! buddy join your friends and enjoy the club!!!!!!!!!</h4>
            </p>
            <form >
                <div className="d-flex justify-content-between mt-4 create-room">
                    <input type="text" class="form-control col-sm-12 look" name="room" placeholder='link' />
                    <div className="mt-4">
                        <input type="submit" className="btn btn-primary mb-4" value="join Room" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default JoinRoom