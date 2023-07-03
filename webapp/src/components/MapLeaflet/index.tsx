import React from "react";

const MapLeaflet: React.FC = () => {
    return (
        <>

            <div className="map-container" >
                <h3 
                    style={{
                    fontSize: "16px"
                    }}
                >
                    Escritório :
                </h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d540.6108252941212!2d-47.201009020488634!3d-22.965936388115413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scampinas%20bassoli!5e1!3m2!1spt-BR!2sbr!4v1688334277878!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="80%"
                    style={{
                        border: "2px solid var(--main-color)",
                        borderRadius: "10px",
                        margin: "5px 0 5px 0",
                    }}
                    loading="lazy"
                ></iframe>
            </div>
        </>
    )
}

export default MapLeaflet;
