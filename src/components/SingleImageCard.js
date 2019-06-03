import React from 'react';
import ImageCard from './ImageCard';
import './style-card.css';

const SingleImageCard = (props) => {
    const{posts,id} = props;
    return (
        <div>
            <ImageCard
                key={id}
                img={posts[id].image}
                tag={posts[id].tag}
                date={posts[id].date}
                des={posts[id].description}
            />
        </div>
    );
}
export default SingleImageCard;
