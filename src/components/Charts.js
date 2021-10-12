import Box from '@mui/material/Box';
import ReactTooltip from 'react-tooltip';
import HelpIcon from '@mui/icons-material/Help';



export default function Charts() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: '#fcfcfc',
                    height: '2rem',
                    borderRadius: '24px',
                }}>
                <p data-tip="음원사이트에서 직접 크롤링한 데이터입니다">
                    <h2>TOP100
                        <HelpIcon sx={{ size: 'small' }} />
                    </h2>
                </p>
                <ReactTooltip
                    place='bottom'
                    effect='solid' />
            </Box>

            <Box
                sx={{
                    bgcolor: '#fcfcfc',
                    height: '20rem',
                    borderRadius: '24px',
                }}>
                <h5>charts</h5>
            </Box>
        </>
    )
}

