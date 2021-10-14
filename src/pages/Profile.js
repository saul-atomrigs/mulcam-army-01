import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import profileData from '../data/profileData'
import YoutubeViewcount from '../components/YoutubeViewcount';
import Charts from '../components/Charts';
import SelectChart from '../components/SelectChart';
import SelectSNS from '../components/SelectSNS';

import { TwitterTimelineEmbed } from 'react-twitter-embed'
import InstagramEmbed from 'react-instagram-embed';
import YouTube from 'react-youtube';


import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HelpIcon from '@mui/icons-material/Help';
import ReactTooltip from 'react-tooltip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// 메모: 멤버별 토픽 모델링 ?

const Profile = ({ match }) => {
  const { username } = match.params
  const profile = profileData[username]

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
      <NavBar2></NavBar2>
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
        <Link to='/profile/bts' style={{ textDecoration: 'none' }}><SideBarLink>BTS</SideBarLink></Link>
        <Link to='/profile/blackpink' style={{ textDecoration: 'none' }}><SideBarLink>블랙핑크</SideBarLink></Link>
        <Link to='/profile/twice' style={{ textDecoration: 'none' }}><SideBarLink>트와이스</SideBarLink></Link>
      </SideBar>

      {/* 오른쪽 사이드 컬럼 */}
      <Main>
        <div>
        </div>
        <p data-tip="Crawler를 활용한 영상별 주요 스탯과 댓글 분석입니다">
          <h3> Youtube Databoard&nbsp;
            <HelpIcon sx={{ size: 'small' }} />
          </h3>
        </p>
        <ReactTooltip
          place='bottom'
          effect='solid' />
        <YoutubeViewcount videoId={profile.youtubeVideoId} />
      </Main>
      <ContentBox>
        <Content1>
          <SelectChart />
          <Charts />
        </Content1>
        <Content2>
          <h3>Topic 모델링</h3>
        </Content2>
        <Content3>
          <SelectSNS />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={profile.twitter}
            options={{ height: '400', borderRadius: '24px' }}
          />
        </Content3>
      </ContentBox>
      <Footer>
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
const NavBarHeader = styled.nav`
  background: green;
`

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

const ProfileImg = styled.div`
  text-align: center;
  position: fixed;
`

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

const EmpathyScoreBoard = styled.div`
  background: #EEDDEE;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  grid-area: EmpathyScore;
  justify-content: center;
  border-radius: 24px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const YoutubeViewcountBox = styled.div`
    background: #ffffff;
    padding: 0.25rem;
    border-radius: 24px;
    width: 100%;
    height: 5rem;
`
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

export default Profile

