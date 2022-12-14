import React, { Component } from 'react'
import Figure from './Figure'

//Import images from img file to work around react component
import crossCountryImage from "../../img/crosscountry.jpg"
import longEventImage from "../../img/longevent.jpg"
import mountainBikeImage from "../../img/moutainbike.jpg"
import roadRaceImage from "../../img/roadrace.jpg"

//Styles
import './Gallery.css'

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false};
      }    

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }


  render() {

    const images = [
        {   
            id: 1,
            src: crossCountryImage, 
            alt: "man riding a cross country bike up a hill", 
            caption: "Cross Country Regional Finals"},

        {
            id: 2,
            src: longEventImage, 
            alt: "two cyclists under trees on a road", 
            caption: "Open Road Classic"},

        {
            id: 3,
            src: mountainBikeImage, 
            alt: "mountain bike in the bushland", 
            caption: "Open Mountain Bike Finals"},

        {
            id: 4,
            src: roadRaceImage, 
            alt: "cyclists handlebars at the start of a race", 
            caption: "Mens Open Crit Race"}
    ]


    if (!this.state.hasError) {
        return (
            <div>
            <h2>Recent Races</h2>
                <section className="photoGallery">
                    {images.map( image => (
                        <Figure
                            key={image.id} 
                            src={image.src}
                            alt={image.alt}
                            caption={image.caption} 
                        />
                    ))}
                </section>
            </div>
        )
    } else {
        return (
            <div>{this.state.erorrMessage}</div>
        )
    }

  }
}
