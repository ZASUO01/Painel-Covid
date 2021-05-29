import {PolarArea} from 'react-chartjs-2';
import {FaThermometerThreeQuarters} from 'react-icons/fa';

const TopFiveGraph = ({data, text, type}) => {
    
    const getLabels = (array) => {
        const arr = [];
        array.forEach(obj => {
            arr.push(obj.Country);
        });
        return arr;
    }

    const getNumbers = (array, param) => {
        const arr = [];
        array.forEach(obj => {
            arr.push(obj[param]);
        });
        return arr;
    }

    
    return(
        <div className="w-full h-full p-2 text-center relative">
            <p className="absolute bottom-2 left-2 text-gray-700 flex text-md items-center">
                <FaThermometerThreeQuarters className="mr-2"/>
                {text}
            </p>
            <PolarArea
                data={{
                    labels: getLabels(data),
                    datasets: [{
                    label: {text},
                    data: getNumbers(data, type),
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(75, 192, 192)',
                        'rgb(255, 205, 86)',
                        'rgb(201, 203, 207)',
                        'rgb(54, 162, 235)'
                    ]
                    }]
                }}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )   
}

export default TopFiveGraph;