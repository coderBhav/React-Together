import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  '../../node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Pdf = (props) => {
  const [pagenumber, setpagenumber] = useState(1);
  const [numPages, setnumPages] = useState();
  const [scale, setScale] = useState(1); // Zoom scale
  const { selectedPdf, setSelectedPdf } = props;

  useEffect(() => {
    setpagenumber(1);
    setScale(1); 
  }, [selectedPdf]);

  function onDocumentLoadedSuccess(data) {
    setnumPages(data._pdfInfo.numPages);
  }

  if (!selectedPdf) return null; 

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));   // max 300%
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5)); // min 50%

  return (
    <div className="pdf-widget-overlay">
      <div className="pdf-widget">
        
        <button className="pdf-close-btn" onClick={()=>setSelectedPdf("")}>
          ✖
        </button>

        {/* PDF Viewer */}
        <div className="pdf-container">
          <Document file={selectedPdf.href} onLoadSuccess={onDocumentLoadedSuccess}>
            <Page pageNumber={pagenumber} scale={scale} className="pdf-page" />
          </Document>

          {/* Controls */}
          <div className="pdf-controls">
            <button
              className="pdf-button"
              onClick={() => { if (pagenumber !== 1) setpagenumber(pagenumber - 1); }}
            >
              ⬅ Prev
            </button>

            <h3 className="pdf-page-number">{pagenumber}/{numPages}</h3>

            <button
              className="pdf-button"
              onClick={() => { if (pagenumber !== numPages) setpagenumber(pagenumber + 1); }}
            >
              Next ➡
            </button>

            
            <button className="pdf-button" onClick={zoomOut}>- Zoom</button>
            <button className="pdf-button" onClick={zoomIn}>+ Zoom</button>
            <span style={{marginLeft: '10px'}}>{Math.round(scale * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf;
