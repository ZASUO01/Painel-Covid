import {useContext} from 'react';
import {AppContext} from '../Contexts/AppContext';

const CovidInfo = () => {
    const context = useContext(AppContext);
    const {setShowInfoText} = context;
    
    return(
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 w-11/12 max-w-2xl h-96 md:h-auto overflow-auto p-6 border border-gray-300 shadow-lg rounded-lg flex flex-col items-center justify-start">
            <p  className="text-gray-700 text-sm md:text-md">
            A doença do coronavírus (COVID-19) é uma doença infecciosa causada por um coronavírus recém-descoberto
            </p>
            <p className="text-gray-700 text-sm md:text-md mt-2">
            A maioria das pessoas que adoece em decorrência da COVID-19 apresentará sintomas leves a moderados e se recuperará sem tratamento especial.
            </p>
            <p className="text-gray-700 text-md md:text-lg mt-4">
            COMO ELA SE ESPALHA
            </p>
            <p className="text-gray-700 text-sm md:text-md mt-2">
            O vírus que causa a COVID-19 é transmitido principalmente por meio de gotículas geradas quando uma pessoa infectada tosse, espirra ou exala. Essas gotículas são muito pesadas para permanecerem no ar e são rapidamente depositadas em pisos ou superfícies.
            </p>
            <p className="text-gray-700 text-sm md:text-md mt-2">
            Você pode ser infectado ao inalar o vírus se estiver próximo de alguém que tenha COVID-19 ou ao tocar em uma superfície contaminada e, em seguida, passar as mãos nos olhos, no nariz ou na boca.
            </p>

            <button
                className="mt-6 text-green-600 text-lg font-medium hover:underline"
                style={{outline:'none'}}
                onClick={() => setShowInfoText(false)}
            >
                Entendido
            </button>
        </div>
    )
}


export default CovidInfo;