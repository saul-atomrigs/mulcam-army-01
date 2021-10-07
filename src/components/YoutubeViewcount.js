import Box from '@mui/material/Box';
import YouTube from 'react-youtube';
import profileData from '../data/profileData'


export default function YoutubeViewcount() {
    // 유튜브 썸네일 옵션: 
    const opts = {
        height: '100',
        width: '180',
        borderRadius: '24px',

    }


    // 유튜브 뷰카운트 내용: 
    return (
        <Box
            sx={{
                bgcolor: '#f2f2f2',
                height: '400px',
                width: '700px',
                borderRadius: '24px',
            }}>
            <h1>+1M</h1>
            <YouTube videoId='ioNng23DkIM' opts={opts}></YouTube>
            <YouTube videoId='dyRsYk0LyA8' opts={opts}></YouTube>
            <YouTube videoId='bwmSjveL3Lc' opts={opts}></YouTube>
        </Box>
    )

}

