import {format} from 'date-fns';

const GeneralInfo = ({worldData}) => {
    const formatedDate = (date) => {
        const newDate = new Date(date);
        return format(newDate, 'dd/MM/yyyy');
    }
    
    return(
        <div>
            <div className="w-full p-4 flex flex-col items-start justify-center">
                <p className="text-gray-600 text-md md:text-lg">Visão geral dos casos</p>
                <p className="text-gray-600 text-sm md:text-md ">
                    Dados de {formatedDate(worldData.Date)}
                </p>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 p-4 gap-y-16">
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-sm md:text-md">Total de casos</p>
                    <p className="text-gray-600 text-sm md:text-md font-light">
                        {worldData.TotalConfirmed}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-sm md:text-md">Recuperados</p>
                    <p className="text-gray-600 text-sm md:text-md font-light">
                        {worldData.TotalRecovered}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-sm md:text-md">Mortes</p>
                    <p className="text-gray-600 text-sm md:text-md font-light">
                        {worldData.TotalDeaths}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-sm md:text-md">Novos casos</p>
                    <p className="text-gray-600 text-sm md:text-md font-light">
                        {worldData.NewConfirmed}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-sm md:text-md">Novos recuperados</p>
                    <p className="text-gray-600 text-sm md:text-md font-light">
                        {worldData.NewRecovered}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center justify-self-center">
                    <p className="text-gray-600 text-sm md:text-md">Novas mortes</p>
                    <p className="text-gray-600 text-sm md:text-md font-light">
                        {worldData.NewDeaths}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo;