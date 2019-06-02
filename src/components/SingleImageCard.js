import React from 'react';
import ImageCard from './ImageCard';
import './style-card.css';

const SingleImageCard = (props) => {
    const{posts,id} = props;
    return (
        <div>
            <div className='container-fluid d-flex justify-content-center '>
                <div className="row">
                    <div className="m-auto">
                        <div className="card-deck">
                            <ImageCard
                                key={id}
                                img={posts[id].image}
                                tag={posts[id].tag}
                                date={posts[id].date}
                                des={posts[id].description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SingleImageCard;