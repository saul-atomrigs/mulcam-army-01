import React from 'react'
import { Link } from 'react-router-dom';

import profileData from './profileData'

import { TwitterTimelineEmbed } from 'react-twitter-embed'


import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import YoutubeViewcount from '../components/YoutubeViewcount';
import Charts from '../components/Charts';
import SelectChart from '../components/SelectChart';


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
        <div>
            <ul><MenuIcon /></ul>
            <ul><Link to='/'>Logo</Link></ul>
            <ul><CloseIcon /></ul>

            {/* TAB 또는 아이돌 선택 스크롤) */}
            <ul>
                <ul><Link to='/profile/bts'>BTS</Link></ul>
                <ul><Link to='/profile/blackpink'>blackpink</Link></ul>
            </ul>

            {/* 메인 페이지 */}
            <Stack direction='row'>
                {/* 왼쪽 사이드 컬럼 */}
                <ul>
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
                    <Stack direction='row'>

                    </Stack>
                </ul>

                {/* 오른쪽 사이드 컬럼 */}
                <ul>
                    <ul>
                        <h3> Youtube Viewcount </h3>
                        <YoutubeViewcount />
                    </ul>
                    <br />
                    <ul>
                        <h3> Charts </h3>
                        <SelectChart />
                        <br />
                        <Charts />
                    </ul>
                    <br />
                    <ul>
                        <h3> Twitter Live </h3>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName={profile.twitter}
                            options={{ height: 380 }}
                        />
                    </ul>
                    <br />
                    <ul>
                        <h3> 공감지수 </h3>
                        <h1> {profile.score} </h1>
                    </ul>
                </ul>
            </Stack>
        </div>
    )
}

export default Profile