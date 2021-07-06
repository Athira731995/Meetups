import React, { useRef } from "react";
import {useHistory} from 'react-router-dom'
import { Card } from "../components/ui/Card";
import { NewMeetup } from "../components/meetup/NewMeetup";
export const MeetupForm = () => {
  const history=useHistory()
  const addmeetup = (meetupData) => {
    fetch("https://meetups-bbf23-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>{
        history.replace("/")
    })
  };
  return (
    <div>
      <Card>
        <NewMeetup addMeetup={addmeetup} />
      </Card>
    </div>
  );
};
