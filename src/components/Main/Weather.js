import React, { Component } from 'react'
import { useFetch } from '../../hooks/usefetch';

import './Weather.css'

export default function Weather() {

    const api = '2980dcb0d2442fc558d1e50f9278af8b';
    const city = 'Brisbane'
    const countryCode = 'au'
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&APPID=${api}`;
    const {data: weather, isPending, error} = useFetch(base)

    return (
        <section id="weather_dashboard">
        <h2>Weather Forecast</h2>				
        <h3>Today's High/Low</h3> 
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}  
        {weather && (				
        <table id="tempTable">
            <tbody>
            <tr>
                <th>Min Temp (C°)</th>
                <th>Max Temp (C°)</th>
                <th>Real Feel</th>
                <th>Humidty</th>
            </tr>
            <tr>
                <td><p>{weather.temp_min}</p></td>
                <td><p>{weather.temp_max}</p></td>
                <td><p>{weather.feels_like}</p></td>
                <td><p>{weather.humidity}</p></td>
            </tr>
            </tbody>
        </table>
        )}
        <figure>
            <iframe className="weatherWidget" title="weatherwidget" src="https://embed.windy.com/embed2.html?lat=-28.459&lon=153.023&detailLat=-28.023&detailLon=153.023&width=1000&height=1000&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"></iframe> 
        </figure>
    </section>
    )
}
