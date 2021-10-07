import React from 'react'
import profileData from './profileData'

const Profile = ({ match }) => {
    const { username } = match.params
    const profile = profileData[username]

    if (!profile) {
        return (
            <div>존재하지 않는 유저입니다</div>
        )
    }
    return (
        <div>
            <h3>
                {username}({profile.twitter})
            </h3>
            <h5>
                {profile.youtubeViewcount}
            </h5>
            <p>
                {profile.score}
            </p>
        </div>
    )
}

export default Profile

