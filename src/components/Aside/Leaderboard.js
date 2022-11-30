import React, { Component } from 'react'

import './Leaderboard.css'

export default class Leaderboard extends Component {
  render() {
    return (
        <section id="leaderboard">
        <div className='leaderboard'>
        <h2>This Weeks Leaderboard</h2>
        <table>
            <tbody>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Distance</th>
            </tr>
            <tr>
                <td>🏆1</td>
                <td>Kent</td>
                <td>950 kms</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Anthony</td>
                <td>800 kms</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Maya</td>
                <td>500 kms</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Ben</td>
                <td>200 kms</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Aaron</td>
                <td>100 kms</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Lauren</td>
                <td>80 kms</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Freddy</td>
                <td>60 kms</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Celeste</td>
                <td>60 kms</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Marty</td>
                <td>50 kms</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Luke</td>
                <td>10 kms</td>
            </tr>
            </tbody>            
        </table>
    </div>				
    </section>
    )
  }
}
