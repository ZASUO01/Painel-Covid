const CountriesInfoList = ({countriesData}) => {
    return(
        <div className="w-full h-full flex items-start p-2 md:p-6 overflow-auto">
            
            <ul className="w-full">
                <li className="w-1/2 md:w-full flex flex-col md:flex-row items-center bg-gray-700 p-2">
                    <div className="w-full md:w-1/4 h-1/4 md: h-auto text-gray-50 text-sm md:text-lg">
                        <p>País</p>
                    </div>
                    <div className="w-full md:w-1/4 text-gray-50 text-sm md:text-lg mt-2">
                        <p>Total de casos</p>
                    </div>
                    <div className="w-full md:w-1/4 text-gray-50 text-sm md:text-lg mt-2">
                        <p>Total de mortes</p>
                    </div>
                    <div className="w-full md:w-1/4 text-gray-50 text-sm md:text-lg mt-2">
                        <p>Recuperados</p>
                    </div>
                </li>
                {countriesData.map(c => 
                    (<li key={c.ID} className="w-1/2 md:w-full flex items-center bg-gray-300 p-2 mt-2">
                        <div className="w-1/4 text-gray-700 text-md">
                            <p>{c.Country}</p>
                        </div>
                        <div className="w-1/4 text-gray-700 text-md">
                            <p>{c.TotalConfirmed}</p>
                        </div>
                        <div className="w-1/4 text-gray-700 text-md">
                            <p>{c.TotalDeaths}</p>
                        </div>
                        <div className="w-1/4 text-gray-700 text-md">
                            <p>{c.TotalRecovered}</p>
                        </div>
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default CountriesInfoList;