import React from 'react'
import {Line} from 'react-chartjs-2'
import { UserData } from './DataChart'
import { useState } from 'react'

function ChartLine({chartData ,optionData}){
  const [userData,] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [{
      label: " Users Gained ",
      data: UserData.map((data) => data.userGain),
      borderColor:[
        "#FFFFFF",
      ],
      borderWidth : 1,
      // tension : 1\,
      radius: 2,
      backgroundColor: "#ffffff30",

    }],
  })
    return <div><Line data={userData}  options={optionData}/></div>
  }

  export default ChartLine