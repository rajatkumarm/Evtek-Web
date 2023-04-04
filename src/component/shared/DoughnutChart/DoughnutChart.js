import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart as chartjs} from "chart.js/auto"
// import { UserData } from './Data'
// import { useState } from 'react'

function DoughnutChart({chartData ,optionData}){
  // const [userData, setUserData] = useState({
  //   datasets: [{
  //     data: UserData.map((data) => data.userGain),
  //     backgroundColor: [
  //       "#FFBF1A",
  //       "#4AB8ED ",
  //       "#F1688E "
  //     ],
  //     tension: 0.5
  //   }],
  // })
    return <div><Doughnut data={chartData} options={optionData}/></div>
  }

  export default DoughnutChart
