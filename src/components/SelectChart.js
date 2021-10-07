import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectChart() {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                </InputLabel> */}
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Melon</option>
                    <option value={20}>Bugs</option>
                    <option value={30}>Spotify</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
