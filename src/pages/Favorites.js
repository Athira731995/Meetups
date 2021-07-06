import React,{useContext} from 'react'
import { FavouriteContext } from '../components/store/favourites-context'
import { MeetupList } from '../components/meetup/MeetupList'

export const Favorites = () => {
    const fav_context=useContext(FavouriteContext)

    return (
        <div>
            <h1>Favorites</h1>
            <MeetupList data={fav_context.favourites}/>
            
        </div>
    )
}
