import React, { Component } from 'react'
import Figure from './Figure'

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
            src: "../../img/crosscountry.jpg", 
            alt: "man riding a cross country bike up a hill", 
            caption: "Cross Country Regional Finals"},

        {
            id: 2,
            src: "../../img/longevent.jpg", 
            alt: "two cyclists under trees on a road", 
            caption: "Open Road Classic"},

        {
            id: 3,
            src: "../../img/moutain bike.jpg", 
            alt: "mountain bike in the bushland", 
            caption: "Open Mountain Bike Finals"},

        {
            id: 4,
            src: "../../img/roadrace.jpg", 
            alt: "cyclists handlebars at the start of a race", 
            caption: "Mens Open Crit Race"}
    ]


    if (!this.state.hasError) {
        return (
            <div>
            <h2>Recent Races</h2>
                <section className="photoGallery">
                    {images.map( image => (
                            <div key={image.id}>
                            <figure>
                            <img src={image.src} alt={image.alt}/>
                            <figcaption>{image.caption}</figcaption>
                            </figure>
                        </div>
                        // <Figure
                        //     key={image.id} 
                        //     src={imageSource}
                        //     alt={image.alt}
                        //     caption={image.caption} 
                        // />
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
