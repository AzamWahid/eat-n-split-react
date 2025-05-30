import { Button, TextField, Box } from '@mui/material';
import React, { useRef, useState } from 'react';

const AddFriendForm = ({ friendList, setFriendList }) => {
  const tbName = useRef(null);
  const tbimgURL = useRef(null);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const addFriend = () => {
    const newFriend = {
      name: tbName.current.querySelector('input').value,
      imgUrl: tbimgURL.current.querySelector('input').value,
      balance: 0,
    };
    const newFriendList = [...friendList, newFriend];
    setFriendList(newFriendList);

    tbName.current.querySelector('input').value = '';
    tbimgURL.current.querySelector('input').value = '';
    setIsOpenForm(false);
  };

  return (
    <Box>
      {!isOpenForm && (
        <Button variant="contained" onClick={() => setIsOpenForm(true)}>
          Add Friend
        </Button>
      )}
      {isOpenForm && (
        <Box mt={2} display="flex" flexDirection="column" gap={2}>
          <TextField ref={tbName} label="Name" variant="outlined" />
          <TextField ref={tbimgURL} label="Image URL" variant="outlined" />
          <Button variant="contained" onClick={addFriend}>
            Add
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AddFriendForm;
