import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function TwitterTimeline(props) {
    return (
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName={props.screenName}
            options={{ height: '400', borderRadius: '24px' }}
        />
    )
}