import React from 'react';
import { MeetupItem } from './MeetupItem';

export const MeetupList = (props) => {
    console.log(props.data);
    return (
        <div>
        {props.data.map(meetup=>(<MeetupItem key={meetup.id}  id={meetup.id} title={meetup.title} address={meetup.address} image={meetup.image} description={meetup.description}/>))}
       
       
        </div>
    )
}
