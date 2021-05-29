import {Line} from 'react-chartjs-2';
import {format} from 'date-fns';

const EvolutionGraph = ({data}) => {
    
    const formatedDateArray = (array) => {
        const arr = [];
        array.forEach(obj => {
            const newDate = new Date(obj.Date);
            arr.push(format(newDate, 'dd'));
        })
        return arr;
    }

    const numberArray  = (array) => {
        const arr =[];
        array.forEach(obj => {
            arr.push(obj.NewConfirmed);
        });
        return arr;
    }


    return(
        <div className="w-full h-full">
            <Line 
                data={{
                    labels: formatedDateArray(data),
                    datasets: [{
                        label: 'Evolução da doença (Casos confirmados: ultimas 20 atualizações)',
                        data: numberArray(data),
                        borderColor: 'rgb(75, 192, 192)'
                    }]
                }}
                width={100}
                height={40}
                options={{
                    maintainAspecRatio: false,
                    responsive: true
                }}
            />
        </div>
    )
}

export default EvolutionGraph;