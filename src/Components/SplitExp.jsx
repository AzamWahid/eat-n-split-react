import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
} from '@mui/material';
import React, { useState } from 'react';

const SplitExp = ({ friendList, isSelected }) => {
  const [billPaidBy, setBillPaidBy] = useState('');

  const splitHandler = () => {
    // Add your logic here
  };

  return (
    <Box>
      <h3>Split a bill with {friendList[isSelected].name}</h3>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Bill Value" variant="outlined" />
        <TextField label="Your Expense" variant="outlined" />
        <TextField label="Friend Expense" variant="outlined" />

        <FormControl fullWidth>
          <InputLabel id="paid-by-label">Paid By</InputLabel>
          <Select
            labelId="paid-by-label"
            value={billPaidBy}
            onChange={(e) => setBillPaidBy(e.target.value)}
            label="Paid By"
          >
            <MenuItem value="You">You</MenuItem>
            <MenuItem value={friendList[isSelected].name}>
              {friendList[isSelected].name}
            </MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={splitHandler}>
          Split
        </Button>
      </Box>
    </Box>
  );
};

export default SplitExp;
