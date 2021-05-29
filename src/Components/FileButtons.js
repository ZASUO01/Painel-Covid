import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CsvGenerator from './CsvGenerator';
import PdfGenerator from './PdfGenerator';


const FileButtons = ({csvdata, pdfdata, labels}) => {
    const [waitProcess, setWaitProcess] = useState(true);
    const [showPdfButton, setShowPdfButton] = useState(true);

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/find') setShowPdfButton(false);
        setWaitProcess(false)
    }, []);

    return(
        <div className="w-full h-80 flex items-center justify-center">
            {waitProcess
            ?   (<div>Carregando...</div>)
            :   (<div className="flex items-center justify-center">
                    <CsvGenerator data={csvdata} headers={labels}/>
                    {showPdfButton && (<PdfGenerator data={pdfdata}/>)}
                </div>)
            }
        </div>
    )
}


export default FileButtons;