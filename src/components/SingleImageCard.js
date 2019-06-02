import React from 'react';
import ImageCard from './ImageCard';


const SingleImageCard = (props) => {
    const{posts,id} = props;

    return (
        <div>
            <div className="container mt-sm-0 ">
                <div className="row">
                    <div className="col">
                        <div className="card-deck ">
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