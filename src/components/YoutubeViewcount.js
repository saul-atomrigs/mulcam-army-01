import Box from '@mui/material/Box';
import YouTube from 'react-youtube';
import profileData from '../data/profileData'
import styled from 'styled-components'



export default function YoutubeViewcount() {
    // 유튜브 썸네일 옵션: 
    const opts = {
        height: '200',
        width: '360',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
            controls: 1,
            showinfo: 0,
            loop: 1,
        },
    }


    // 유튜브 뷰카운트 내용: 
    return (
        <>
            <YoutubeContainer>
                <YoutubeGrid>
                    <YouTube videoId='dyRsYk0LyA8' opts={opts}></YouTube>
                    <p>조회수(+)</p>
                    <p>좋아요(+)</p>
                    <p>싫어요(+)</p>
                </YoutubeGrid>
                <YoutubeGrid>
                    <h3>댓글</h3>
                </YoutubeGrid>
                <YoutubeGrid>
                    <h3>😊</h3>
                </YoutubeGrid>
                <YoutubeGrid>
                    <h3>워드클라우드</h3>
                </YoutubeGrid>
            </YoutubeContainer>
        </>
    )

}

const YoutubeContainer = styled.div`
    background: #ffffff;
    padding: 0.5rem 0.5rem;
    margin: 1rem 1rem;
    border-radius: 5px;
    height: 20rem;
    display: grid;
    grid-template-columns: 1fr 2fr 0.2fr 2fr;
    grid-template-areas: 
        "YoutubeGrid YoutubeGrid YoutubeGrid YoutubeGrid"

`

const YoutubeGrid = styled.div`
    background: #f0f0f0;
    margin: 0 0 0 0.2rem;
    color: darkgray;
`