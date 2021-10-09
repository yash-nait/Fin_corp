import React, { useState } from 'react'

import './Game.css'
import logo from  './images/logoCoin.gif'

const data = [
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,17.9],msg:["Messages 1","Messages 1","Messages 1"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,-24.62],msg:["Messages 1","Messages 1","Messages 2"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,27.70],msg:["Messages 1","Messages 1","Messages 3"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,6.76],msg:["Messages 1","Messages 1","Messages 4"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,31.39],msg:["Messages 1","Messages 1","Messages 5"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,-4.0],msg:["Messages 1","Messages 1","Messages 6"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,3.01],msg:["Messages 1","Messages 1","Messages 7"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,28.65],msg:["Messages 1","Messages 1","Messages 8"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,3.15],msg:["Messages 1","Messages 1","Messages 9"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,12.02],msg:["Messages 1","Messages 1","Messages 10"]},
    {options: ["Stock Market","Stock Market","Stock Market"] ,roi : [17.9,17.9,14.17],msg:["Messages 1","Messages 1","Messages 11"]}
]


const Game = () => {

    const [idx, setIdx] = useState(0)
    const [coin, setCoin] = useState(200)

    const handleClick = (option) => {
        let temp = Math.floor(coin + ( data[idx].roi[option.target.value]*coin )/100)

        setCoin(temp)
        setIdx(idx => idx+1)

        if(idx >= 10){
            setIdx(0)
            setCoin(200)
        }
    }

    return (
        <div>

            <div className="score">
                <img className="coin_gif" src={logo} />
                <br></br>
                <br></br>
                <h1 style={{color: "rgb(233, 178, 12)"}}>{coin}</h1>
            </div>

            <div className="quiz">
                <div className="year">
                    <h1 style={{color: "#2A3492"}}>year: {2010+idx}</h1>
                </div>
                <div>
                    <h3>Make your finacial choice for this year: </h3>
                </div>
                <div className="options">
                    <button  className="button" value={0} onClick={handleClick}>{data[idx].options[0]}</button>
                    <button  className="button" value={1} onClick={handleClick}>{data[idx].options[1]}</button>
                    <br></br>
                    <button  className="button" value={2} onClick={handleClick}>{data[idx].options[2]}</button>
                </div>
            </div>
        </div>
    )
}

export default Game
