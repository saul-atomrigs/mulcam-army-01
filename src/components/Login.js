import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid secondary',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};

export default function Login() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <AccountCircleIcon onClick={handleOpen} fontSize='large' />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        간편 회원가입
                    </Typography>
                    <Stack spacing={2}>
                        <TextField id="email" label="email" variant="outlined" />
                        <TextField id="password" label="password" variant="outlined" />
                        <TextField id="confirm password" label="confirm password" variant="outlined" />
                        <Button variant='contained'>회원가입</Button>
                    </Stack>
                    < br />
                    < br />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        간편 로그인
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <GoogleIcon fontSize='large' sx={{ color: red[500] }} />
                        <FacebookIcon fontSize='large' sx={{ color: blue[500] }} />
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
