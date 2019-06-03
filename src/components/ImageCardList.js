import React from 'react';
import ImageCard from './ImageCard';

const ImageCardList = (props) => {
    const{posts} = props;
    const cardComponentArray = posts.slice(0,4);
    return (
        <div>
            {cardComponentArray.map((image, i) =>{
                return (
                    <ImageCard
                        key={i}
                        img={posts[i].image}
                        tag={posts[i].tag}
                        date={posts[i].date}
                        des={posts[i].description} />
                );
            })}
        </div>
    );
}
export default ImageCardList;
