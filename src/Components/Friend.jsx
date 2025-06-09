import {
  Avatar,
  Button,
  Divider,
  Typography,
  Box
} from '@mui/material';
import React from 'react';

const Friend = ({ frnd, frndIdx, isSelected, setIsSelected }) => {
  const closeHandler = () => setIsSelected(undefined);
  const selectHandler = () => setIsSelected(frndIdx);

  return (
    <Box mb={1}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="nowrap"
        gap={2}
        p={1}
        sx={{
          bgcolor: isSelected === frndIdx ? '#f0f0f0' : 'background.paper',
          borderRadius: 1,
        }}
      >
        {/* Avatar */}
        <Avatar alt={frnd.name} src={frnd.imgUrl} />

        {/* Name & Balance */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0, // Important for truncation
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            noWrap
            sx={{ textOverflow: 'ellipsis' }}
          >
            {frnd.name}
          </Typography>
          <Typography
            variant="body2"
            color= "text.secondary"
            noWrap
            sx={{ textOverflow: 'ellipsis' , color:frnd.balance < 0 ? 'red' : 'text.secondary' }}
          >
            Balance: {frnd.balance}
          </Typography>
        </Box>

        {/* Select/Close Button */}
        <Button
          size="small"
          variant="contained"
          onClick={frndIdx === isSelected ? closeHandler : selectHandler}
          sx={{
            backgroundColor: "rgba(253, 158, 64, 1)",
            whiteSpace: 'nowrap',
            minWidth: '65px',
            px: 1.5,
          }}
        >
          {frndIdx === isSelected ? 'Close' : 'Select'}
        </Button>
      </Box>
      <Divider />
    </Box>
  );
};

export default Friend;
