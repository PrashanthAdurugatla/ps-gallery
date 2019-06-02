import React from 'react';
import './style-card.css';

const ImageCard = (props)=>{
    const{img, tag, date, des} = props;
    return (
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img className="card-img-top" src={img} alt="Funny" width='80px' height='150px' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>Image Tag: {tag}</h4>
                <p className="card-text text-secondary"><u><b>Image Description:</b></u> {des}</p>
            </div>

            <div className="card-footer">
                <p className="card-text"><small className="text-muted">Date: {date}</small></p>
            </div>

        </div>
    );
}

export default ImageCard;


