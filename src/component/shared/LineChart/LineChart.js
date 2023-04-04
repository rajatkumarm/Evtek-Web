import React from 'react'
import {Line} from 'react-chartjs-2'
import { UserData } from './Data'
import { useState } from 'react'



function LineChart({chartData ,optionData,}){
  // const canvas = document.getElementById('Chartjs').getContext("2d")
  // const gradient = canvas.createLinearGradient(0, 0, 0, 400)
  // gradient.addColorStop(0, 'rgba(229, 239, 255, 1)')
  // gradient.addColorStop(1, '#FFFFFF')

  const [userData,] = useState({
    labels: UserData.map((data) => data.month),

    datasets: [{
      label: " Users Gained ",
      data: UserData.map((data) => data.userGain),
      borderColor:[
        "#FFFFFF",
        
      ],

      borderWidth : 1,
      // tension : 0.5,
      radius: 2,
      backgroundColor: "#ffffff30",
      // backgroundColor: "background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);",
      // backgroundColor: gradient,

      fill: true
    },
  ],
  })
    return <div><Line data={userData} options={optionData}/></div>
  }

  export default LineChart