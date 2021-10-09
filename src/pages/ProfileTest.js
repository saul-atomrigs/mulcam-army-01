import styled from "styled-components";
import React from 'react'
import { Link } from 'react-router-dom';

import profileData from '../data/profileData'
import YoutubeViewcount from '../components/YoutubeViewcount';
import Charts from '../components/Charts';
import SelectChart from '../components/SelectChart';

import { TwitterTimelineEmbed } from 'react-twitter-embed'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const profileTest = ({ match }) => {
    const { username } = match.params
    const profile = profileData[username]

    // if (!profile) {
    //     return (
    //         <div>
    //             존재하지 않는 유저입니다
    //         </div>
    //     )
    // }
    // 정상 경로: 
    return (
        <Container>
            {/* <NavBar>
                <MenuIcon />
            </NavBar> */}
            <NavBarHeader>
                <NavBar1>
                    <Link to='/'><MenuIcon /></Link>
                </NavBar1>
                <NavBar4>
                    <Link to='/'><CloseIcon /></Link>
                </NavBar4>
            </NavBarHeader>
            <Main>Main</Main>
            <SideBar>
                <img
                    src={profile.img}
                    height="300"
                    borderRadius="24px"
                    alt={username} />
            </SideBar>
            <ContentBox>
                <Content1>Content1</Content1>
                <Content2>Content2</Content2>
                <Content3>Content3</Content3>
            </ContentBox>
            <Footer>Footer</Footer>
        </Container>
    );
};

const Container = styled.div`
  display: grid;
  height: 80vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-temlate-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
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

`
const NavBar1 = styled.nav`
  background: #ffffff;
  grid-area: nav;
  margin: 1rem;
  float: left;
`;

const NavBar2 = styled.nav`
background: #ffffff;
grid-area: nav;
margin: 1rem;
`
const NavBar3 = styled.nav`
background: #ffffff;
grid-area: nav;
margin: 1rem;
`
const NavBar4 = styled.nav`
    background: #ffffff;
    grid-area: nav;
    margin: 1rem;
    float: right;
`
const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

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
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;
const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

export default profileTest;
