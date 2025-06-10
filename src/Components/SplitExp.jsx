import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SplitExp = ({ friendList, isSelected, setFriendList, setIsSelected }) => {

  // const [billPaidBy, setBillPaidBy] = useState('');

  const youExpRef = useRef(null)
  const friendExpRef = useRef(null)
  const totalBill = useRef(null)
  const paidByRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const friendName = friendList[isSelected]?.name || '';
  let friendBalance = friendList[isSelected]?.balance || 0;

  const splitHandler = () => {
    if (paidByRef.current.value == 'You') {
      friendBalance = Number(friendBalance) - Number(friendExpRef.current.value);
    }
    else {
      friendBalance = Number(friendBalance) + Number(friendExpRef.current.value);
    }
    console.log(friendBalance)
    const copyOffriendList =  [...friendList];
    copyOffriendList[isSelected].balance = friendBalance;
    setFriendList(copyOffriendList);
  };

  const expChangeHandler = (e) => {
    let tbValue = e.target.value;
    let totBill = totalBill.current.value;
    friendExpRef.current.value = totBill - tbValue;

    console.log(paidByRef.current.value);
  }

  const Row = ({ label, field }) => (
    <Box
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      alignItems={isMobile ? 'flex-start' : 'center'}
      gap={2}
      mb={2}
    >
      <Box width={isMobile ? '100%' : '30%'} textAlign={isMobile ? 'left' : 'right'}>
        <Typography variant="subtitle1" fontWeight={600}>
          {label}
        </Typography>
      </Box>
      <Box width={isMobile ? '100%' : '70%'}>
        {field}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        backgroundColor: '#fef6f0', // soft warm peach background
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        boxShadow: '0 4px 12px rgba(253,158,64,0.15)',
        maxWidth: 480,
        mx: 'auto',
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={3} textAlign="center" color="#fd9e40">
        Split a bill with {friendName}
      </Typography>

      <Row
        label="Bill Value"
        field={
          <TextField
            variant="outlined"
            placeholder="Enter total bill"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon color="warning" />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: 'white',
                borderRadius: 1,
              },
            }}
            inputRef={totalBill}
          />
        }
      />

      <Row
        label="Your Expense"
        field={
          <TextField
            variant="outlined"
            placeholder="Your share"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color="warning" />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: 'white',
                borderRadius: 1,
              },
            }}
            inputRef={youExpRef}
            onChange={expChangeHandler}
          />
        }
      />

      <Row
        label={`${friendName}'s Expense`}
        field={
          <TextField
            variant="outlined"
            placeholder={`${friendName}'s share`}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon color="warning" />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: 'white',
                borderRadius: 1,
              },
            }}
            inputRef={friendExpRef}
          />
        }
      />

      <Row
        label="Paid By"
        field={
          <FormControl fullWidth>
            <InputLabel id="paid-by-label" sx={{ backgroundColor: 'white', px: 1 }}>
              Paid By
            </InputLabel>
            <Select
              labelId="paid-by-label"
              // value={billPaidBy}
              // onChange={(e) => setBillPaidBy(e.target.value)}
              inputRef={paidByRef}
              defaultValue={''}
              label="Paid By"
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
              }}
            >
              <MenuItem value="You">You</MenuItem>
              <MenuItem value={friendName}>{friendName}</MenuItem>
            </Select>
          </FormControl>
        }
      />

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          onClick={splitHandler}
          sx={{
            backgroundColor: '#fd9e40',
            px: 5,
            py: 1.5,
            fontWeight: 700,
            fontSize: '1rem',
            borderRadius: 2,
            '&:hover': { backgroundColor: '#e4882b' },
          }}
        >
          Split
        </Button>
      </Box>
    </Box>
  );
};

export default SplitExp;
