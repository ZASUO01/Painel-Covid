import { PDFDownloadLink } from "@react-pdf/renderer";
import {FaFilePdf} from 'react-icons/fa';
import PdfDocument from './PdfDocument';

const PdfGenerator = ({data}) => {
    return(
        <PDFDownloadLink 
            document={<PdfDocument data={data}/>} 
            fileName="relatório.pdf"
            className="ml-10"
            >
            {({ blob, url, loading, error }) => 
                (loading 
                ? 'Loading document...' 
                : 
                <button 
                    className="w-44 h-12 bg-red-500 rounded-md text-gray-50 text-lg flex items-center justify-center duration-300 transform hover:scale-110"
                    style={{outline:'none'}}
                    >
                    Baixar resumo
                    <FaFilePdf />
                </button>)}
        </PDFDownloadLink>
    )
}

export default PdfGenerator;




