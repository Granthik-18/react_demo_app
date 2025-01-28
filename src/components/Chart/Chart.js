import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = ({ dataPoints }) => {

    const dataPointsValues = dataPoints.map(dataPoints => dataPoints.value);
    // const totalMaximum = Math.max(...dataPointsValues);
    const total = dataPointsValues.reduce((acc, cur) => Number(acc) + Number(cur), 0)
    console.log(total);


    return < div className='chart' >
        {
            dataPoints.map(dataPoints => (
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={total}
                    label={dataPoints.label}
                />
            ))
        }


    </div >

}

export default Chart;