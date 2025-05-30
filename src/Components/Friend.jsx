import {
    Avatar,
    Button,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    Box
} from '@mui/material';
import React from 'react';

const Friend = ({ frnd, frndIdx, isSelected, setIsSelected }) => {
    const closeHandler = () => setIsSelected(undefined);
    const selectHandler = () => setIsSelected(frndIdx);

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem
                alignItems="flex-start"
            // secondaryAction={

            // }
            >
                <ListItemAvatar>
                    <Avatar alt={frnd.name} src={frnd.imgUrl} />
                </ListItemAvatar>
                <ListItemText
                    primary={frnd.name}
                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                        >
                            Balance: {frnd.balance}
                        </Typography>
                    }
                />
                <Button
                    size="small"
                    variant="contained"
                    onClick={frndIdx === isSelected ? closeHandler : selectHandler}
                >
                    {frndIdx === isSelected ? 'Close' : 'Select'}
                </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};

export default Friend;
