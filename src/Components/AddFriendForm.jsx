import { Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'

const AddFriendForm = ({ friendList, setFriendList }) => {

    const tbName = useRef(null);
    const tbimgURL = useRef(null);

    const [isOpenForm, setIsOpenForm] = useState(false);

    const addFriend = () => {
        const friendName = tbName.current.value;
        console.log(tbName.current.querySelector('input').value)
        const newFriendList = [...friendList];
        const newFriend = {
            name: tbName.current.querySelector('input').value,
            imgUrl: tbimgURL.current.querySelector('input').value,
            balance: 0
        }
        newFriendList.push(newFriend);
        setFriendList(newFriendList);
        tbName.current.querySelector('input').value = "";
        tbimgURL.current.querySelector('input').value = "";
        setIsOpenForm(false);
    }



    return (
        <>
            <div>AddFriendForm</div>
            {

                !isOpenForm && <Button variant="contained" onClick={() => setIsOpenForm(!isOpenForm)}>Add Friend</Button>
            }
            {
                isOpenForm && <div>
                    Name: <TextField ref={tbName} id="outlined-basic" label="Name" variant="outlined" /> <br />
                    Image URL : <TextField ref={tbimgURL} id="outlined-basic" label="Image URL" variant="outlined" />
                    <Button variant="contained" onClick={addFriend}>Add</Button>
                </div>
            }

        </>
    )
}

export default AddFriendForm