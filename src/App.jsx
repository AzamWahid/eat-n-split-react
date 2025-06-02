import { useState } from 'react';
import './App.css';
import FriendList from './Components/FriendList';
import AddFriendForm from './Components/AddFriendForm';
import SplitExp from './Components/SplitExp';
import { Container, Grid, Paper, Box } from '@mui/material';

function App() {
  const [isSelected, setIsSelected] = useState(undefined);
  const [friendList, setFriendList] = useState([
    {
      name: 'Abdullah',
      imgUrl: 'https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg',
      balance: 100,
    },
    {
      name: 'Zain',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s',
      balance: 50,
    },
    {
      name: 'Hanzala',
      imgUrl: 'https://photos.peopleimages.com/picture/202307/2709813-black-man-business-and-selfie-with-a-smile-on-face-of-an-influencer-person-at-work.-portrait-of-an-african-guy-or-entrepreneur-with-job-satisfaction-and-pride-for-social-media-profile-picture-update-fit_400_400.jpg',
      balance: -10,
    },
  ]);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <FriendList
              friendList={friendList}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
            <Box mt={2}>
              <AddFriendForm
                friendList={friendList}
                setFriendList={setFriendList}
              />
            </Box>
          </Paper>
        </Grid>

        {typeof isSelected === 'number' && isSelected >= 0 && (
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, backgroundColor: 'transparent', boxShadow: 'none' }}>
              <SplitExp
                friendList={friendList}
                isSelected={isSelected}
              />
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default App;
