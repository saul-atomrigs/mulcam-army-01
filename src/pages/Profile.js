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

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const Profile = ({ match }) => {
    const { username } = match.params
    const profile = profileData[username]

    if (!profile) {
        return (
            <div>
                존재하지 않는 유저입니다
            </div>
        )
    }
    // 정상 경로: 
    return (
        <Container>
            {/* 헤더 */}
            <NavBarHeader>
                {/* <div> */}
                <NavBar1><MenuIcon style={{ position: 'fixed', left: '15', }} /></NavBar1>
                <NavBar4><Link to='/'><CloseIcon style={{ position: 'fixed', right: '15', }} /></Link></NavBar4>
                {/* </div> */}
            </NavBarHeader>

            {/* 메인 페이지 */}
            {/* 왼쪽 사이드 컬럼 */}
            <SideBar>
                {/* <ProfileImg> */}
                <img
                    src={profile.img}
                    height="200"
                    alt={username} />
                {/* <ProfileText> */}
                <h3>
                    {username}
                </h3>
                <h5>
                    (@{profile.twitter})
                </h5>
                <SideBarLink>페이스북</SideBarLink>
                <SideBarLink>유튜브</SideBarLink>
                <SideBarLink>팬카페</SideBarLink>
                <br />
                {/* TAB 또는 아이돌 선택 스크롤) */}
                <h4>인기아이돌</h4>
                <SideBarLink><Link to='/profile/bts'>BTS</Link></SideBarLink>
                <SideBarLink><Link to='/profile/blackpink'>blackpink</Link></SideBarLink>
                <SideBarLink><Link to='/profile/twice'>twice</Link></SideBarLink>
                <SideBarLink>hello world</SideBarLink>
                {/* </ProfileText> */}
                {/* </ProfileImg> */}
            </SideBar>

            {/* 오른쪽 사이드 컬럼 */}
            {/* <ul style={{ position: 'relative', marginLeft: '300px' }}> */}
            <Main>
                <h3> Youtube Databoard </h3>
                <YoutubeViewcount />
                {/* <YoutubeViewcountBox /> */}
            </Main>
            <br />
            <br />
            <EmpathyScoreBoard>
                <ul>
                    <h3> 공감지수 </h3>
                    <h1> {profile.score} </h1>
                </ul>
            </EmpathyScoreBoard>
            <ContentBox>
                <Content1>
                    <SelectChart />
                    <Charts />
                </Content1>
                <EmpathyScore>
                    <InstagramEmbed
                        url='https://instagr.am/p/Zw9o4/'
                        clientAccessToken='123|456'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />
                </EmpathyScore>
                <Content3>
                    <SelectSNS />
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName={profile.twitter}
                        options={{ height: '400', borderRadius: '24px' }}
                    />
                </Content3>
            </ContentBox>
        </Container >
    )
}


const Container = styled.div`
  display: grid;
  height: 80vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr 0.5fr;
  grid-temlate-columns: 0.5fr 1fr 1fr 1fr;
  grid-template-areas:
    "nav nav nav nav"
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
  background: #eff0e4;

`
const NavBar1 = styled.nav`
  background: #eff0e4;
  grid-area: nav;
  margin: 0.5rem;
  float: left;
`;

const NavBar2 = styled.nav`
background: #eff0e4;
grid-area: nav;
margin: 1rem;
`
const NavBar3 = styled.nav`
background: #eff0e4;
grid-area: nav;
margin: 1rem;
`
const NavBar4 = styled.nav`
    background: #eff0e4;
    grid-area: nav;
    margin: 0.5rem;
    float: right;
`
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;

`;
const SideBar = styled.div`
  background: #eff0e4;
  grid-area: sidebar;
  text-align: left;
  padding: 1rem;

`;

const ProfileImg = styled.div`
  text-align: center;
  position: fixed;
`

const ProfileText = styled.div`
  position: fixed;
`

const SideBarLink = styled.div`
text-align: left;
margin: 0.5rem;
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
  display: flex;
  gap: 0.25rem;
  align-items: center;
  grid-area: EmpathyScore;
  justify-content: center;
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
`;
const EmpathyScore = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

export default Profile

