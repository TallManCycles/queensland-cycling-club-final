import React, { Component } from 'react'

export default function Figure({src, alt, caption}) {

  return (
        <div>
          <figure>
            <img src={src} alt={alt}/>
            <figcaption>{caption}</figcaption>
          </figure>
        </div>
  )
}
