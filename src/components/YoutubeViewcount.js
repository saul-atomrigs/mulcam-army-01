import Box from '@mui/material/Box';
import YouTube from 'react-youtube';
import profileData from '../data/profileData'
import styled from 'styled-components'
import SimpleTagcloud from './Tagcloud'

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
                    <h3>공감지수</h3>
                </YoutubeGrid>
                <YoutubeGrid>
                    <h3>댓글Wordcloud</h3>
                    <SimpleTagcloud />
                </YoutubeGrid>
            </YoutubeContainer>
        </>
    )

}

const YoutubeContainer = styled.div`
    background: #1f2128;
    padding: 0.5rem 0.5rem;
    margin: 1rem 1rem;
    border-radius: 5px;
    height: 20rem;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 2fr 0.5fr 2fr;
    grid-template-areas: 
        "YoutubeGrid YoutubeGrid YoutubeGrid YoutubeGrid"
        "YoutubeGrid YoutubeGrid YoutubeGrid YoutubeGrid"

`

const YoutubeGrid = styled.div`
    background: #000000;
    margin: 0 0 0 0.2rem;
    color: darkgray;
    border-radius:24px;
`