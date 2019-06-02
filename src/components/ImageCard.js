import React from 'react';


const ImageCard = (props)=>{
    const{img, tag, date, des} = props;
        return (
            <div className="card">
                <img className="card-img-top" src={img} alt="Funny" width='50px' height='150px' />
                <div className="card-body">
                    <h5 className="card-title">Image Tag: {tag}</h5>
                    <p className="card-text">Image Description: {des}</p>
                </div>

                <div className="card-footer">
                <p className="card-text"><small className="text-muted">Date: {date}</small></p>
                </div>

            </div>
        );
}

export default ImageCard;


