import React, { useState } from 'react'

import './Game.css'
import logo from  './images/logoCoin.gif'

const data = [
    {options: ["Stock Market","Recurring Deposit","Gold"] ,roi : [17.9,5,4],msg:["Bulls were on the run (What are bulls? Check the info section)","Always a Safe Investment but low return","Indian's favourite Investment"]},
    {options: ["Stock Market","Fixed Deposit", "High Risk Assets"] ,roi : [-24.62,6,-50],msg:["It's a Crash! It's a Crash!","Always a Safe Investment but low return","Well , sometimes you win all and sometimes you lose all, this time you lost."]},
    {options: ["Stock Market","IPOs","Recurring Deposit"] ,roi : [27.70,12,5],msg:["One of the best year for Indian investors.Bulls were soaring high.","What is an IPO ? (Check the info section)","Always a Safe Investment but low return"]},
    {options: ["Stock Market","Laxmi Chit Fund","Fixed Deposits"] ,roi : [6.76,-99,6],msg:["Lukewarm year for the market","It's a SCAM!","Always a Safe Investment but low return"]},
    {options: ["Stock Market","Invest in Art","IPO"] ,roi : [31.39,10,2],msg:["Highest Yearly return in a decade","One of the Unconventional form of Investment","You have an eye for the right company"]},
    {options: ["Stock Market","Cryptocurrency","Recurring Deposits"] ,roi : [-4.0,0,5],msg:["It's a bearish market. (What are bears ? Check the info section)","What is Cryptocurrency?(Check the info section)","Always a Safe Investment but low return"]},
    {options: ["Stock Market","Cryptocurrency","Fixed Deposits"] ,roi : [3.01,1318,6],msg:["It's a stagnant market","Just WOW! Risk Paid off!","Always a Safe Investment but low return"]},
    {options: ["Stock Market","Cryptocurrency","Recurring Deposits"] ,roi : [28.65,-72.6,5],msg:["Bulls are back at it. Market's are on BOOM","High Risks and High Rewards, unfortunately not this time","Always a Safe Investment but low return"]},
    {options: ["Stock Market","Cryptocurrency","Fixed Deposits"] ,roi : [3.15,87.2,6],msg:["Nothing's happening this year","You made the right choice","Always a Safe Investment but low return"]},
    {options: ["Stock Market","Cryptocurrency","IPO"] ,roi : [12.02,302.8,70],msg:["It is good but crypto's were better investment.","Super High Returns! But what are cryptos(Check the info section for details.)","Well done ! you trusted in an innovative company and it gave you humongous returns"]},
    {options: ["Stock Market","Cryptocurrency","IPO"] ,roi : [12.02,302.8,70],msg:["It is good but crypto's were better investment.","Super High Returns! But what are cryptos(Check the info section for details.)","Well done ! you trusted in an innovative company and it gave you humongous returns"]},
]


const Game = () => {

    const [idx, setIdx] = useState(0)
    const [coin, setCoin] = useState(200)
    const [resultVis, setResultVis] = useState("none")
    const [finalResult, setFinalResult] = useState("none")
    const [result , setResult] = useState({
        delta: 0,
        message: ""
    })
    const handleClick = (option) => {
        
        setResult({
            delta: data[idx].roi[option.target.value], 
            message:  data[idx].msg[option.target.value]
        })
        let temp = Math.floor(coin + ( data[idx].roi[option.target.value]*coin )/100)
        
        setCoin(temp)
        setIdx(idx => idx+1)
        
        if(idx >= 10){
            console.log(idx);
            setIdx(0)
            setCoin(200)
            setResult({
                delta: 0,
                message: ""
            })
            setFinalResult("block")
            return 
        }
        setResultVis('block')
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
                    <h1 style={{margin:0}}>Year: {2010+idx}</h1>
                </div>
                <div>
                    <h4>Make your financial choice for the year: </h4>
                </div>
                <div className="options">
                    <button  className="button" value={0} onClick={handleClick}>{data[idx].options[0]}</button>
                    <button  className="button" value={1} onClick={handleClick}>{data[idx].options[1]}</button>
                    <br></br>
                    <button  className="button" value={2} onClick={handleClick}>{data[idx].options[2]}</button>
                </div>
            </div>
 
            <div className = "result" style={{display: finalResult,zIndex:"3"}} onClick={()=>{setFinalResult("none");setResultVis("none")}}>
                <h1>Final Results : </h1>
                <div>
                <span style={{color: (coin > 200 ? "green":"red") ,fontSize : "150px"}} >{coin}</span> 
                <img className="coin_gif" src={logo} />
                </div>
                
                <br/>
                 <h1>
                <u className="message-text">{`You started with 200 coins and ended up with ${coin} coins. (${(coin-200)/2})% return!`}</u>
                </h1>
            </div>
            <div className = "result" style={{display: resultVis}} onClick={()=>setResultVis("none")}>
                <span style={{color: (result.delta > 0 ? "green":"red") ,fontSize : "150px"}} >{result.delta > 0 ? "+":""}{result.delta} %</span>
                <br/>
                 <h1>
                <u className="message-text">{result.message}</u>
                </h1>
            </div>
            
        </div>
    )
}

export default Game
