import Box from '@mui/material/Box';
import ReactTooltip from 'react-tooltip';
import HelpIcon from '@mui/icons-material/Help';

import ChartTable from './ChartTable'


export default function Charts() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: '#fcfcfc',
                    height: '2rem',
                    borderRadius: '5px',
                }}>
                <p data-tip="음원사이트에서 직접 크롤링한 데이터입니다">
                    <h3>인기 차트 순위&nbsp;
                        <HelpIcon sx={{ size: 'small' }} />
                    </h3>
                </p>
                <ReactTooltip
                    place='bottom'
                    effect='solid' />
            </Box>
            {/* 
            <Box
                sx={{
                    bgcolor: '#fcfcfc',
                    height: '20rem',
                    borderRadius: '24px',
                }}>
            </Box> */}

            {/* 챠트 */}
            <ChartTable />
        </>
    )
}

