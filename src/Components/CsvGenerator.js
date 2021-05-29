import {CSVLink} from 'react-csv';
import {FaFileExcel} from 'react-icons/fa';

const CsvGenerator = ({data, headers}) => {
    const csvReport = {
        filename: 'Data.csv',
        headers,
        data
    }
    
    return(
        <CSVLink {...csvReport}>
            <button 
                className="w-44 h-12 bg-green-500 rounded-md text-lg text-gray-50 flex items-center justify-center duration-300 transform hover:scale-110"
                style={{outline:'none'}}
                >
                Baixar dados
                <FaFileExcel className="ml-2"/>
            </button>
        </CSVLink>
    )
}

export default CsvGenerator;