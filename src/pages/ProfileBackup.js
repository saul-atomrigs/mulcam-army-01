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
        <>
            {/* 헤더 */}
            <div>
                <ul><MenuIcon style={{ position: 'fixed', left: '15', }} /></ul>
                <ul><Link to='/'><CloseIcon style={{ position: 'fixed', right: '15', zIndex: '1' }} /></Link></ul>
            </div>

            {/* 메인 페이지 */}
            <Stack direction='row' >
                {/* 왼쪽 사이드 컬럼 */}
                <ul style={{ position: 'fixed', }}>
                    <Stack direction='colunm'>
                        <img
                            src={profile.img}
                            height="300"
                            borderRadius="24px"
                            alt={username} />
                    </Stack>
                    <h3>
                        {username} (@{profile.twitter})
                    </h3>
                    <Stack direction='row' >
                        <ul>페이스북</ul>
                        <ul>유튜브</ul>
                        <ul>팬카페</ul>
                    </Stack>
                    <br />
                    {/* TAB 또는 아이돌 선택 스크롤) */}
                    <h4>인기아이돌</h4>
                    <ul><Link to='/profile/bts'>BTS</Link></ul>
                    <ul><Link to='/profile/blackpink'>blackpink</Link></ul>
                    <ul><Link to='/profile/twice'>twice</Link></ul>
                </ul>

                {/* 오른쪽 사이드 컬럼 */}
                <ul style={{ position: 'relative', marginLeft: '300px' }}>
                    <ul>
                        <h3> Youtube Viewcount </h3>
                        <YoutubeViewcount />
                    </ul>
                    <br />
                    <br />
                    <ul>
                        <SelectChart />
                        <Charts />
                    </ul>
                    <br />
                    <ul>
                        <h3> Twitter Live </h3>
                        <Box
                            sx={{
                                bgcolor: '#f2f2f2',
                                height: '510px',
                                borderRadius: '24px',
                            }}>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName={profile.twitter}
                                options={{ height: '500px', paddingTop: '10' }}
                            />
                        </Box>
                    </ul>
                    <br />
                    <ul>
                        <h3> 공감지수 </h3>
                        <h1> {profile.score} </h1>
                    </ul>
                </ul>
            </Stack>
        </>
    )
}

export default Profile

