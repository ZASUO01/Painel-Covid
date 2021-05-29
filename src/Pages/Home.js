import {useEffect, useState } from 'react';
import {FaChartLine} from 'react-icons/fa';
import Loading from '../Components/Loading';
import axios from 'axios';

import HomeCover from '../Components/Home/HomeCover';
import GeneralInfo from '../Components/Home/GeneralInfo';
import CountriesInfoList from '../Components/Home/CountriesInfoList';
import TopFiveGraph from '../Components/Home/TopFiveGraph';
import EvolutionGraph from '../Components/Home/EvolutionGraph';
import FileButtons from '../Components/FileButtons';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [worldData, setWorldData] = useState({});
    const [countriesData, setCountriesData] = useState([]);
    const [worldEvolution, setWorldEvolution] = useState([]);
    const [topCases, setTopCases] = useState([]);
    const [topDeaths, setTopDeaths] = useState([]);
    
    const [pdfData, setPdfData] = useState({});

    const getTopFiveConfirmed = (array) => {
        const newArray = array.sort((a, b) => {
            return a.TotalConfirmed > b.TotalConfirmed ? 1 : -1;
        });
        const topArray = newArray.slice(-5);
        return topArray;
    }


    const getTopFiveDeaths =  (array) => {
        const newArray = array.sort((a, b) => {
            return a.TotalDeaths > b.TotalDeaths ? 1 : -1;
        });
        const topArray = newArray.slice(-5);
        return topArray;
    }

    const getEvolutionData = (array) => {
        const sorted = array.sort((a,b) => {
            return a.Date > b.Date ? 1 : -1;
        });
        const dataArr = sorted.slice(-20);
        return dataArr;
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('/summary');
                const res2 = await axios.get('/world');
                setWorldData(res.data.Global);
                setCountriesData(res.data.Countries);
                setTopCases(getTopFiveConfirmed(res.data.Countries));
                setTopDeaths(getTopFiveDeaths(res.data.Countries));
                setWorldEvolution(getEvolutionData(res2.data))
                setPdfData(res.data);
                
                setIsLoading(false);
            }catch(err){
                console.log(err.message);
            }
        }
        fetchData();
    }, []);
    
    const csvLabels = [
        {label: 'País', key: 'Country'},
        {label: 'Casos Confirmados', key: 'TotalConfirmed'},
        {label: 'Novos casos', key: 'NewConfirmed'},
        {label: 'Mortes', key: 'TotalDeaths'},
        {label: 'Novas mortes', key: 'NewDeaths'},
        {label: 'Recuperados', key: 'TotalRecovered'},
        {label: 'Novos recuperados', key: 'NewRecovered'}
    ]

    return(
        <div className="w-full bg-green-50" id="pdf-file">
            <HomeCover />
            <div className="w-full flex flex-col items-center py-6 px-4">
                <div className="w-full flex items-center justify-center p-10">
                    <p className="text-gray-600 text-xl sm:text-2xl md:text-3xl flex items-center">
                        <FaChartLine  className="mr-2"/>
                        Estatísticas Globais 
                    </p>
                </div>
                <div className="w-11/12 max-w-4xl h-96 p-4 border border-gray-300 shadow-lg rounded-lg bg-gray-50">
                    {isLoading
                    ?   (<Loading />)
                    :   (<EvolutionGraph data={worldEvolution}/>)
                    }
                </div>
                <div className="mt-10 w-11/12 md:h-80 max-w-3xl border border-gray-300 shadow-lg rounded-lg bg-gray-50">
                    {isLoading
                    ?   (<Loading />)
                    :   (<GeneralInfo worldData={worldData}/>)
                    }
                </div>
                <div className="w-full flex flex-col xl:flex-row items-center justify-around">
                    <div className="mt-10 w-11/12 h-96 max-w-xl border border-gray-300 shadow-lg rounded-lg bg-gray-50">
                        {isLoading
                        ?   (<Loading />)
                        :   (<TopFiveGraph 
                                data={topCases} 
                                text="Maiores números de casos"
                                type='TotalConfirmed'
                            />)
                        }
                    </div>
                    <div className="mt-10 w-11/12 h-96 max-w-xl border border-gray-300 shadow-lg rounded-lg bg-gray-50">
                    {isLoading
                        ?   (<Loading />)
                        :   (<TopFiveGraph 
                                data={topDeaths} 
                                text="Maiores números de mortes"
                                type='TotalDeaths'
                            />)
                        }
                    </div>
                </div>
                <div className="mt-10 w-full h-96 max-w-6xl border border-gray-300 shadow-lg rounded-lg bg-gray-50">
                    {isLoading
                    ?   (<Loading />)
                    :   (<CountriesInfoList countriesData={countriesData}/>)
                    }
                </div>
            </div>
            {isLoading
            ? (<div className="w-full h-64">
                    <Loading />
               </div>)
            : (<FileButtons 
                csvdata={countriesData} 
                labels={csvLabels}
                pdfdata={pdfData}
              />)
            }
        </div>
    )
}


export default Home;