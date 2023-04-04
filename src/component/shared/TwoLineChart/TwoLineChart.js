import React from 'react'
import {Line} from 'react-chartjs-2'
import { UserData } from './Data'
import { useState } from 'react'

function TwoLineChart({optionData}){
  const [userData,] = useState({
    labels: UserData.map((data) => data.month),

    datasets: [{
      label: " Users Gained ",
      data : [ 25 , 62 , 58 , 80, 78 ,100] ,
      borderColor:[
        "#FFFFFF",
      ],
      borderWidth : 1,
      tension : 0.5,
      radius: 0,

    },
    {
      labelt : ' Percentage ' ,
      data : [ 20 , 38 , 35 , 48, 45 ,60] ,
      backgroundColor : '#FFE600',
      borderColor : "#FFE600",
      borderWidth : 1,
      tension : 0.5,
      radius: 0,

    }
  ],
  })
  
  
    return <div><Line data={userData} options={optionData}/></div>
  }

  export default TwoLineChart