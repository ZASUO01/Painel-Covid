import { useEffect, useState } from 'react';
import {FaSearch, FaChartLine} from 'react-icons/fa';
import {format} from 'date-fns';
import cover from '../Assets/cover.png';
import axios from 'axios';
import LineGraph from '../Components/LineGraph';
import Loading from '../Components/Loading';
import FileButtons from '../Components/FileButtons';

const FindCountry = () => {
    const [inputCountry, setInputCountry] = useState('');
    const [showError, setShowError] = useState(false);
    const [countryData, setCountryData] = useState([]);
    const [countryEvolution, setCountryEvolution] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('/dayone/country/brazil');
                setCountryData(res.data);
                setCountryEvolution(res.data.slice(-21));
                setIsLoading(false);
            }catch(err){
                console.log(err.message);
            }
        }
        fetchData();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const str = inputCountry;
        axios.get(`/dayone/country/${str.trim().toLocaleLowerCase()}`)
        .then((res) => {
            setShowError(false);
            setInputCountry('');
            setCountryData(res.data);
            setCountryEvolution(res.data.slice(-21));
            setIsLoading(false);
        }).catch((err) => {
            setShowError(true);
            setIsLoading(false);
        });
    }

    const formatedDateArray = (array) => {
        const arr = [];
        array.forEach(obj => {
            const newDate = new Date(obj.Date);
            arr.push(format(newDate, 'dd'));
        })
        arr.shift();
        return arr;
    }

    const numberArray  = (array, param) => {
        const arr =[];
        const n = array.length;
        for(let i = 0; i < n-1; i++){
            arr.push(array[i+1][param] - array[i][param]);
        }
        return arr;
    }


    const coverStyle = {
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const formatedDate = (date) => {
        const newDate = new Date(date);
        return format(newDate, 'dd/MM/yyyy');
    }

    const csvLabels = [
        {label: 'Casos confirmados', key: 'Confirmed'},
        {label: 'Casos ativos', key: 'Active'},
        {label: 'Mortes', key: 'Deaths'},
        {label: 'Recuperados', key: 'Recovered'},
        {label: 'Data', key: 'Date'}
    ]

    return(
        <div className="w-full bg-green-50">
            <div className="w-full h-44 flex flex-col items-center justify-center border-b border-gray-300 bg-gray-50 shadow-lg"
            style={coverStyle}
            >
                <p className="text-2xl text-gray-900 font-bold">Busque por dados do seu país</p>
                <p className="text-lg text-gray-900">(Apenas nomes em inglês.)</p>
                <form 
                    className="flex items-center justify-center mt-4" 
                    onSubmit={(e) => handleSubmit(e)}
                    >
                    <input
                        type="text"
                        name="country"
                        value={inputCountry}
                        onChange={(e) => setInputCountry(e.target.value)}
                        placeholder="Digite o nome do país"
                        className={`w-80 h-10 ${showError ? 'border-2 border-red-500' :'border border-gray-400'} rounded-l-md pl-4 outline-none text-md text-gray-700 focus:border-green-700`}
                        onFocus={() => setShowError(false)}
                        required
                    />
                    <button className="w-20 h-10 rounded-r-md flex items-center justify-center bg-blue-500 text-gray-50 text-lg duration-300 hover:bg-blue-600" style={{outline:'none'}}>
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div className="w-full flex flex-col items-center py-6 px-4">
                <div className="w-full flex items-center justify-center p-10">
                    {isLoading
                    ?   (<Loading />)
                    :   (<p className="text-gray-600 text-2xl flex items-center">
                            <FaChartLine  className="mr-2"/>
                            Estatísticas de {countryData[0].Country} 
                        </p>)
                    }
                </div>
                <div className="w-4/5 max-w-2xl h-80 p-4 border border-gray-300 shadow-lg rounded-lg bg-gray-50 mt-6">
                    {isLoading
                    ?   (<Loading />)
                    :   (<div>
                            <div className="w-full p-4 flex flex-col items-start justify-center">
                <p className="text-gray-600 text-lg">Visão geral dos casos</p>
                <p className="text-gray-600 text-md ">
                    Dados de {formatedDate(countryData[countryData.length -1].Date)}
                </p>
            </div>
            <div className="w-full grid grid-cols-3 p-4 gap-y-16">
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-md">Total de casos</p>
                    <p className="text-gray-600 text-md font-light">
                        {countryData[countryData.length -1].Confirmed}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-md">Recuperados</p>
                    <p className="text-gray-600 text-md font-light">
                        {countryData[countryData.length -1].Recovered}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-md">Mortes</p>
                    <p className="text-gray-600 text-md font-light">
                        {countryData[countryData.length -1].Deaths}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-md">Casos ativos</p>
                    <p className="text-gray-600 text-md font-light">
                        {countryData[countryData.length -1].Active}
                    </p>
                </div>
                
                    </div>
                    </div>)
                }
                </div>
                <div className="w-4/5 max-w-4xl h-96 p-4 border border-gray-300 shadow-lg rounded-lg bg-gray-50 mt-10">
                    {isLoading
                    ?   (<Loading />)
                    :   (<LineGraph  
                            text="Evolução dos casos (ultimas 20 atualizações)"
                            xaxis={formatedDateArray(countryEvolution)}
                            yaxis={numberArray(countryEvolution, 'Confirmed')}
                            color='rgb(75, 192, 192)'
                        />)
                    }
                </div>
                <div className="w-4/5 max-w-4xl h-96 p-4 border border-gray-300 shadow-lg rounded-lg bg-gray-50 mt-10">
                    {isLoading
                    ?   (<Loading />)
                    :   (<LineGraph  
                            text="Evolução das mortes (ultimas 20 atualizações)"
                            xaxis={formatedDateArray(countryEvolution)}
                            yaxis={numberArray(countryEvolution, 'Deaths')}
                            color='rgb(222, 67, 55)'
                        />)
                    }
                </div>
                <div className="w-4/5 max-w-4xl h-96 p-4 border border-gray-300 shadow-lg rounded-lg bg-gray-50 mt-10">
                    {isLoading
                    ?   (<Loading />)
                    :   (<LineGraph  
                            text="Casos recuperados diariamente (ultimas 20 atualizações)"
                            xaxis={formatedDateArray(countryEvolution)}
                            yaxis={numberArray(countryEvolution, 'Recovered')}
                            color='rgb(72, 181, 80)'
                        />)
                    }
                </div>
            </div>
            {isLoading
            ?   (<div className="w-full h-64">
                    <Loading />
                </div>)
            :   (<FileButtons 
                    csvdata={countryData} 
                    pdfdata={countryEvolution}
                    labels={csvLabels}
                />)
            }
        </div>
    )
}

export default FindCountry;