import React, { useState } from 'react';
import like from '../img/like.png'


const LikeButton = () => {
  const [likes, setLikes] = useState(46);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter"><img src={like} className='heart' alt=''></img>{ ` ${likes}` }</span>
    </button>
  );
};

export default LikeButton;