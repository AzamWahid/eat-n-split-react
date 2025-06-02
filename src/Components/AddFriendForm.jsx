import { Button, TextField, Box, Typography } from '@mui/material';
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
    setFriendList([...friendList, newFriend]);

    tbName.current.querySelector('input').value = '';
    tbimgURL.current.querySelector('input').value = '';
    setIsOpenForm(false);
  };

  return (
    <Box>
      {!isOpenForm ? (
        <Button
          variant="contained"
          fullWidth
          onClick={() => setIsOpenForm(true)}
          sx={{ backgroundColor: "rgba(253, 158, 64, 1)" }}
        >
          Add Friend
        </Button>
      ) : (
        <Box mt={2} display="flex" flexDirection="column" gap={2}>
          <Typography align="left">Name</Typography>
          <TextField inputRef={tbName} variant="outlined" placeholder="Enter name" />

          <Typography align="left">Image URL</Typography>
          <TextField inputRef={tbimgURL} variant="outlined" placeholder="Enter image URL" />

          <Button
            variant="contained"
            fullWidth
            onClick={addFriend}
            sx={{ backgroundColor: "rgba(253, 158, 64, 1)" }}
          >
            Add
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AddFriendForm;
