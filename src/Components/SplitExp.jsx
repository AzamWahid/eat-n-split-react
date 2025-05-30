import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const SplitExp = ({ friendList, isSelected }) => {

    const [billPaidBy, setBillPaidBy] = useState('')

    const splitHandler = () => {


    }
    
    return (
        <>
            <div>SplitExp</div>

            <p>SPLIT A BILL WITH {friendList[isSelected].name}</p>

            Bill Value : <TextField id="outlined-basic" label="Name" variant="outlined" />  <br />
            YOUR EXPENSE : <TextField id="outlined-basic" label="Image URL" variant="outlined" />  <br />
            Friend EXPENSE : <TextField id="outlined-basic" label="Image URL" variant="outlined" />  <br />
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Paid By</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    // value={age}
                    onChange={(e) => setBillPaidBy(e.target.value)}
                    autoWidth
                    label="Paid By"
                >

                    <MenuItem value={"You"}>You</MenuItem>
                    <MenuItem value={friendList[isSelected].name}>{friendList[isSelected].name}</MenuItem>
                </Select>
            </FormControl> <br />
            <Button variant="contained" onClick={splitHandler}>Split</Button>

        </>
    )
}

export default SplitExp