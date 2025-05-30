import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Friend = ({ frnd, frndIdx, isSelected, setIsSelected }) => {

    const closeHandler = () => {
        console.log("close")
        setIsSelected(undefined);
    }
    const selectHandler = () => {
        console.log("select")
        setIsSelected(frndIdx);

    }


    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={frnd?.imgUrl} />
                </ListItemAvatar>
                <ListItemText
                    primary={frnd?.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                            </Typography>
                            {"I'll be in your neighborhood doing errands this…"}
                            <br />
                            {`Balance : ${frnd.balance}`}
                        </React.Fragment>
                    }
                />
                <Button variant="contained" onClick={frndIdx == isSelected ? closeHandler : selectHandler} >{frndIdx == isSelected ? 'Close' : 'Select'}</Button>

            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    )
}

export default Friend