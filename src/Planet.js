import React, { useState } from 'react';
import Modal from 'react-modal';
import './Planet.css'; 
import PlanetDetail from './PlanetDetail'; 

function Planet({ imageUrl, title, fact, text }) {
    const [showDetail, setShowDetail] = useState(false);

    const toggleDetail = () => {
        setShowDetail(!showDetail);
    };

    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" width={250} height={250} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <button className="btn btn-primary" onClick={toggleDetail}>
                    {showDetail ? 'Skrýt' : 'Více'}
                </button>
            </div>
            <Modal
                className="modal-custom-style"
                isOpen={showDetail}
                onRequestClose={toggleDetail}
                contentLabel="Planet Detail"
            >
                <PlanetDetail title={title} fact={fact} text={text} />
            </Modal>
        </div>
    );
}

export default Planet;
