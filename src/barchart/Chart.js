import React, {useState, useEffect} from 'react'

import Bar from 'react-chartjs-2'

const state = {
    labels: [
      '2002', '2003', '2004',
      '2005', '2006', '2007',
      '2008', '2009', '2010',
      '2011', '2012', '2013',
      '2014', '2015', '2016',
      '2017', '2018', '2019',
      '2020'
    ],
    datasets: [
      {
        label: 'titles',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [
          9,   5, 14,   3,   7, 6, 5,
          8,   3,  2,  17,   5, 4, 3,
          4, 148, 27, 273, 458       
        ]
        
        
      }
    ]
  }


 const Chart =()=> {
    return (
    <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Titles published each year',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

    </div>
    )
}
export default Chart 



   
      



