import React, {useState, useEffect} from 'react'
// import {keys, values} from '../api/index'
import Bar from 'react-chartjs-2'

const url ='http://localhost:3000/timeseries'

var k
var v

export const keys = async() => {
    
  fetch(`${url}/keys`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        k= data
        
    })
       

};



export const values = async() => {
    
  fetch(`${url}/values`)
    .then((response) => response.json())
    .then((data) => {
       console.log(data)
       v = data
    })  

};


    const state = {
        labels: k,
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: v
          }
        ]
      }
      
    const Chart =  <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />



export default Chart
