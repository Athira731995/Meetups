import React from 'react';
import   './Cards.css'

export const Card = (props) => {
    return (
        <div className="card">
         {props.children}
        </div>
    )
}
