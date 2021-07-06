import React,{useState,useEffect} from "react";
import { MeetupList } from "../components/meetup/MeetupList";
export const AllMeetUps = () => {
    const [loading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([])
 

  useEffect(()=>{
    fetch("https://meetups-bbf23-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {return  response.json()})
    .then((data) => {
      const meetups=[]
      for(const key in  data){
        const meetup={
          id:key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
        setLoadedMeetups(meetups)
    });
  },[])
  
    if(loading){
      return <p>Loading........</p>
    }

  return (
    <div>
      <h1>All Meetups</h1>

      <MeetupList data={loadedMeetups} />
    </div>
  );
};
