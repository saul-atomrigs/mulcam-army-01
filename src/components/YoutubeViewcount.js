import React from 'react';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';
import styled from 'styled-components'
import SimpleTagcloud from './Tagcloud'
import WhiteTooltip from './WhiteTooltip'

export default function YoutubeViewcount(props) {
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

    const commentStyle = {
        textAlign: 'left',
        margin: '1rem'
    }

    // 유튜브 뷰카운트 내용: 
    return (
        <>
            <YoutubeContainer>
                <YoutubeGrid>
                    <YouTube videoId={props.videoId} opts={opts}></YouTube>
                    <p>조회수:  4.9억회</p>
                    <p>좋아요:  1.3백만</p>
                    <p>댓글수:  2.1백만</p>
                </YoutubeGrid>
                <YoutubeGrid style={{ display: 'flex' }}>
                    <div style={{ flex: '0 0 65%' }}>

                        <h5>댓글</h5>
                        {/*TODO: 스크롤 */}
                        <p style={commentStyle}>This is a perfect song.</p>
                        <p style={commentStyle}>MORE & MORE COMMENTS!!!</p>
                        <p style={commentStyle}>"No one:
                            Me every twice's comeback:

                            'Omg this is their best comeback'"</p>
                        <p style={commentStyle}>Don’t call yourself a kpop fan if you don’t know this song.</p>
                        <p style={commentStyle}>Let’s support her by voting next week!</p>
                    </div>
                    <div style={{ flex: '1' }}>
                        <h5>좋아요</h5>
                        <p>1.5만</p>
                        <p>8.5천</p>
                        <p>5.2천</p>
                        <p>4.2천</p>
                        <p>2.7천</p>
                    </div>

                    <div style={{ flex: '1' }}>

                        <h5> 공감지수
                            <WhiteTooltip title="댓글별 좋아요 수와 긍정점수를 이용하여 도출된 지수입니다" placement="top" />
                        </h5>
                        <p>1.0</p>
                        <p>0.8</p>
                        <p>0.5</p>
                        <p>0.3</p>
                        <p>0.2</p>
                    </div>
                </YoutubeGrid>
                <YoutubeGridWordcloud>
                    <h5>댓글 Wordcloud</h5>
                    <SimpleTagcloud />
                </YoutubeGridWordcloud>
            </YoutubeContainer>
        </>
    )
}

const YoutubeContainer = styled.div`
    background: #1f2128;
    padding: 0.5rem 0.1rem;
    margin: 1rem 1rem;
    border-radius: 5px;
    height: 20rem;
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: 
        "YoutubeGrid YoutubeGrid YoutubeGridWordcloud"
        "YoutubeGrid YoutubeGrid YoutubeGridWordcloud"
`

const YoutubeGrid = styled.div`
    background: #000000;
    margin: 0 0 0 0.2rem;
    color: darkgray;
    border-radius:24px;
    max-height: 20rem;
`

const YoutubeGridWordcloud = styled.div`
    background: #000000;
    margin: 0 0 0 0.2rem;
    color: darkgray;
    border-radius:24px;
    max-height: 20rem;
`

const YoutubeGridLanguage = styled.div`
    background: #000000;
    margin: 0 0 0 0.2rem;
    color: darkgray;
    border-radius:24px;
`