const Pdf=(props)=>(
    <>
     <div className="pdf-overlay">
    <div className="pdf-container">
      <button className="close-btn" onClick={() => props.setSelectedPdf("")}>
        ✖
      </button>
      <iframe
        src={`${props.selectedPdf}#toolbar=0&navpanes=0&scrollbar=0`}
        width="100%"
        height="100%"
        title="Book Reader"
      ></iframe>
    </div>
  </div>
    </>
)
export default Pdf;