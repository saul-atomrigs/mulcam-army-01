import Box from '@mui/material/Box';
import ReactTooltip from 'react-tooltip';
import HelpIcon from '@mui/icons-material/Help';
import styled from 'styled-components'

import ChartTable from './ChartTable'


export default function Charts() {
    const SelectChartStyle = {
        bgcolor: '#fcfcfc',
        color: '#000000',
        height: '1.5rem',
        width: '90%',
        borderRadius: '23px',
        padding: '0.5rem',
        textAlign: 'center',
        pointer: 'cursor'
    }
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
            </Box >
            <SelectChart>
                <Box
                    sx={SelectChartStyle}>
                    Spotify
                </Box>
            </SelectChart>
            <SelectChart>
                <Box
                    sx={SelectChartStyle}>
                    melon
                </Box>
            </SelectChart>
            <SelectChart>
                <Box
                    sx={SelectChartStyle}>

                    gini
                </Box>
            </SelectChart>
            <SelectChart>
                <Box
                    sx={SelectChartStyle}>

                    bugs
                </Box>
            </SelectChart>
            <SelectChart>
                <Box
                    sx={SelectChartStyle}>

                    vive
                </Box>
            </SelectChart>

            {/* 챠트 */}
            <ChartTable />
        </>
    )
}

const SelectChart = styled.div`
                display: inline-block;
                width: 15%;
                padding: 0.6rem;
  }`