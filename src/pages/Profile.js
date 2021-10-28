import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import YouTube from 'react-youtube';
import $ from 'jquery';

import profileData from '../data/profileData'
import YoutubeViewcount from '../components/YoutubeViewcount';
import TwitterTimeline from '../components/TwitterTimeline'
import Charts from '../components/Charts';
import WhiteTooltip from '../components/WhiteTooltip';
import SimpleTagcloud from '../components/Tagcloud';
// import topicmodelling from '../data/topicModelling.html'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


const Profile = ({ match }) => {
  const { username } = match.params
  const profile = profileData[username]

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

  if (!profile) {
    return (
      <div>
        존재하지 않는 유저입니다
      </div>
    )
  }
  // 정상 경로: 
  return (
    < Container >
      {/* 헤더 */}
      < NavBar1 > <MenuIcon /></ NavBar1>
      <TextField
        id="search-bar"
        label={<SearchIcon />}
        variant="outlined"
        placeholder="KPOP 아티스트, 곡명..."
      />
      <NavBar4><Link to='/'><CloseIcon /></Link></NavBar4>

      {/* 메인 페이지 */}
      {/* 왼쪽 사이드 컬럼 */}
      <SideBar>
        <img
          src={profile.img}
          height="200"
          alt={username} />
        <h3>
          {username}
        </h3>
        <h5>
          (@{profile.twitter})
        </h5>
        <SNSLink>페이스북</SNSLink>
        <SNSLink>유튜브</SNSLink>
        <SNSLink>팬카페</SNSLink>
        <br />
        <SNSLink>틱톡</SNSLink>
        <SNSLink>트위터</SNSLink>
        <SNSLink>인스타그램</SNSLink>
        {/* TAB 또는 아이돌 선택 스크롤) */}
        <h4>인기아이돌</h4>
        <Link to='/profile/aespa' style={{ textDecoration: 'none' }}><SideBarLink>aespa</SideBarLink></Link>
        <Link to='/profile/bts' style={{ textDecoration: 'none' }}><SideBarLink>BTS</SideBarLink></Link>
        <Link to='/profile/blackpink' style={{ textDecoration: 'none' }}><SideBarLink>블랙핑크</SideBarLink></Link>
        <Link to='/profile/twice' style={{ textDecoration: 'none' }}><SideBarLink>트와이스</SideBarLink></Link>
      </SideBar>

      {/* 오른쪽 사이드 컬럼 */}
      {/* <Main>
        <div>
          <h3> Youtube Databoard&nbsp;
            <WhiteTooltip title="자체 제작한 crawler코드를 이용하여 수집한 KPOP아티스트별 주요 동영상 스탯과 댓글 감성분석기입니다" />
          </h3>
        </div>
        <YoutubeViewcount videoId={profile.youtubeVideoId} comments={profile.youtubeComments} />
      </Main> */}

      <Main>
        <div>
          <h3> Youtube Databoard&nbsp;
            <WhiteTooltip title="자체 제작한 crawler코드를 이용하여 수집한 KPOP아티스트별 주요 동영상 스탯과 댓글 감성분석기입니다" />
          </h3>
        </div>
        <YoutubeContainer>
          <YoutubeGrid>
            <YouTube videoId={profile.youtubeVideoId} opts={opts}></YouTube>
          </YoutubeGrid>
          <YoutubeGrid style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 65%' }}>
              <h5>댓글</h5>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeComments}</p>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeComments2}</p>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeComments3}</p>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeComments4}</p>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeComments5}</p>
            </div>
            <div style={{ flex: '1' }}>
              <h5>좋아요</h5>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeLikes}</p>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeLikes2}</p>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeLikes3}</p>
            </div>

            <div style={{ flex: '1' }}>

              <h5> 공감지수
                <WhiteTooltip title="댓글별 좋아요 수와 긍정점수를 이용하여 도출된 지수입니다" placement="top" />
              </h5>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeSentiment}</p>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeSentiment2}</p>
              <p style={{ textAlign: 'left', margin: '1rem' }}>{profile.youtubeSentiment3}</p>
            </div>
          </YoutubeGrid>
          <YoutubeGridWordcloud>
            <h5>댓글 Wordcloud</h5>
            <SimpleTagcloud />
          </YoutubeGridWordcloud>
        </YoutubeContainer>
      </Main>


      <ContentBox>
        <Content1>
          {/* <SelectChart /> */}
          <Charts />
        </Content1>
        <Content2>
          <h3>Topic 모델링 (예시, 작업중)</h3>
          <img src="https://lovit.github.io/assets/figures/tsne_mnist.png" width="100%" alt="" />
        </Content2>
        <Content3>
          {/* <SelectSNS /> */}
          <TwitterTimeline screenName={profile.twitter} key={profile.twitter} />

        </Content3>

      </ContentBox>


      <Footer>
        {/* <div>
          <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
        </div> */}

        {/* fetchExternalHTML: function(fileName) {
          Ajax.getJSON('src/data/topicModelling.html').then(
            response => {
              this.setState({
                extHTML: response
              });
            }, err => {
              //handle your error here
            }
          )
        } */}



        <h5>KPOP 아티스트 데이터분석 웹서비스</h5>
        <h6>by mulcamARMY</h6>
      </Footer>
    </Container >
  )
}


const Container = styled.div`
  display: grid;
  height: 80vh;
  grid-template-rows: 1fr 1fr 0.5fr 0.5fr 0.5fr;
  grid-temlate-columns: 0.2fr 1fr 1fr 1fr;
  grid-template-areas:
    "nav1 nav2 nav2 nav4"
    "sidebar main main main"
    "sidebar EmpathyScore EmpathyScore EmpathyScore"
    "sidebar content content content"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
`;

const NavBar1 = styled.nav`
  grid-area: nav1;
  float: right;
  padding: 0.5rem;
  `;

const NavBar2 = styled.nav`
  grid-area: nav2;
  background: #BCBCBC;
  border-radius: 14px;
  padding: 1rem;
  margin: 0.3rem;
  width: 15rem;
  cursor: text;
  `
const NavBar4 = styled.nav`
  grid-area: nav4;
  float: right;
  padding: 0.5rem;

`
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  border-radius: 24px;

`;
const SideBar = styled.div`
  background: #eff0e4;
  grid-area: sidebar;
  text-align: left;
  padding: 0.5rem;

`;

const SNSLink = styled.div`
text-align: left;
display: inline-block;
padding: 0.5rem;
&:hover {
    background-color: #d6d6d6;
    border-radius: 3px;
    cursor: pointer;
  }
`

const SideBarLink = styled.div`
text-align: left;
display: block;
padding: 0.5rem;
&:hover {
    background-color: #d6d6d6;
    border-radius: 3px;
    cursor: pointer;
  }
`

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Content1 = styled.div`
  background: #f0f0f0;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  border-radius:24px;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  background: #ffffff;
  grid-area: footer;
  padding: 1rem;
`;

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

const YoutubeContainer = styled.div`
    background: #1f2128;
    padding: 0.5rem 0.1rem;
    margin: 1rem 1rem;
    border-radius: 5px;
    height: 17rem;
    display: grid;
    grid-template-rows: 1fr 0.5fr;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: 
        "YoutubeGrid YoutubeGrid YoutubeGridWordcloud"
        "YoutubeGrid YoutubeGrid YoutubeGridWordcloud"
`


const stack = {
  flexShrink: 0,
  width: "90%",
  height: 50,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#383838",
  overflow: "visible",
  borderRadius: 5,
}


export default Profile

