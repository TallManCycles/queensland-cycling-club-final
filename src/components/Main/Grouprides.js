import React, { Component } from 'react'

import Ride from './Ride'

import './Grouprides.css'

export default class Grouprides extends Component {

  render() {

    const rides = [
        {
            id: "1",
            styling: "fast",
            title: "GROUP A",
            speed: "28",
            location: "Under the bridge",
            time: "4:30AM"
        },
        {
            id: "2",
            styling: "slow",
            title: "GROUP B",
            speed: "24",
            location: "Under the bridge",
            time: "4:50AM"
        }
    ]

    return (
        <section id="rides">
        <h2>Group Rides</h2>
        <section className="groupRides"> 
            {rides.map(ride => (
                <Ride
                key={ride.id}
                styling={ride.styling} 
                title={ride.title}
                speed={ride.speed}
                location={ride.location}
                time={ride.time}
                />

            ))}
        </section>                    
    </section>
    )
  }
}
