function PlanetDetail({title, fact, text}) {
    const opac = {
        padding: '10px 0px', 
        fontWeight: 'bold', 
        fontStyle: 'italic'
    };

    return (
        <div>
            <h5>{title}</h5>
            <a style={opac}>{fact}</a>
            <p>{text}</p>
        </div>

        
    );
  }
  
  export default PlanetDetail;