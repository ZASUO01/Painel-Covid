import {Line} from 'react-chartjs-2';


const LineGraph = ({text, yaxis, xaxis, color}) => {
    return(
        <div className="w-full h-full">
            <Line 
                data={{
                    labels: xaxis,
                    datasets: [{
                        label: text,
                        data: yaxis,
                        borderColor: color
                    }]
                }}
                width={100}
                height={40}
                options={{
                    maintainAspecRatio: false
                }}
            />
        </div>
    )
}

export default LineGraph;