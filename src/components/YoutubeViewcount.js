import Box from '@mui/material/Box';
import YouTube from 'react-youtube';
import profileData from '../data/profileData'
import styled from 'styled-components'



export default function YoutubeViewcount() {
    // 유튜브 썸네일 옵션: 
    const opts = {
        height: '100',
        width: '180',

    }


    // 유튜브 뷰카운트 내용: 
    return (
        <>
            <YoutubeViewcountBox>
                <YouTube videoId='dyRsYk0LyA8' opts={opts}></YouTube>
            </YoutubeViewcountBox>
            <YoutubeViewcountBox>
                <YouTube videoId='dyRsYk0LyA8' opts={opts}></YouTube>
            </YoutubeViewcountBox>
            <YoutubeViewcountBox>
                <YouTube videoId='dyRsYk0LyA8' opts={opts}></YouTube>
            </YoutubeViewcountBox>
        </>
    )

}

const YoutubeViewcountBox = styled.div`
    background: #ffffff;
    padding: 0.5rem 0.5rem;
    margin: 1rem 0.1rem;
    border-radius: 24px;
    height: 7rem;
`