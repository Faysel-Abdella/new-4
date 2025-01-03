import Chart from '@/src/components/blocks/chart/chart'
import React from 'react'
interface  ChartsProps{
    title:string
    titleContainerStyles:string
    titleStyles:string
}

    
    const Charts = ({title,titleContainerStyles,titleStyles}:ChartsProps) => {
      return (
        <div  className={`rounded-[10px]  bg-white `}  >
        <div className={`border-b-1 ${titleContainerStyles} `} >
      <h3  className={`${titleStyles}`}>{title}</h3>
      </div>
      <Chart/>
      </div>
  )
}

export default Charts