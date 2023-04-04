import React from 'react'

  
const ProgressBar = ({bgcolor,progress,height,backcolor}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: backcolor,
        borderRadius: 40,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'white',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default ProgressBar;
 
  