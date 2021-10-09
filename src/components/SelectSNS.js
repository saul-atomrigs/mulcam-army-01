import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectSNS() {
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
                    <option value={10}>트위터 공식 채널</option>
                    <option value={20}>팬덤 채널</option>
                    <option value={30}>소속사 채널</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
