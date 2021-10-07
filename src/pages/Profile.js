import React from 'react'

const profileData = {
    blackpink: {
        name: 'Jisoo',
        birthday: '',
    },
    bts: {
        name: 'jimin',
        birthday: '',
    }
}

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
                {username}({profile.name})
            </h3>
            <p>
                {profile.birthday}
            </p>
        </div>
    )
}

export default Profile

