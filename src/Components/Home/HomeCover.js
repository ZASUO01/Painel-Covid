import {AppContext} from '../../Contexts/AppContext';
import {useContext} from 'react';

import cover from '../../Assets/cover.png';

const HomeCover = () => {
    const context = useContext(AppContext);
    const {setShowInfoText} = context;
    
    const coverStyle = {
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return(
        <div className="w-full h-56 md:h-44 bg-gray-50 border-b border-gray-300 shadow-lg flex flex-col items-center md:items-start justify-center px-6" style={coverStyle}>
            <p className="text-xl sm:text-2xl md:text-3xl text-center md:text-left text-gray-900 font-bold">Acompanhe dados atualizados sobre a pandemia</p>
            <button 
                className="text-green-600 text-lg md:text-xl font-medium mt-4 md:mt-0 hover:underline" 
                style={{outline:'none'}}
                onClick={() => setShowInfoText(true)}
                >
                Saiba mais
            </button>
        </div>
    )
}

export default HomeCover;