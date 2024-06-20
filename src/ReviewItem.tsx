import React from "react";

export interface ReviewProps {
    rating: number;
    text: string;
    avatarLink: string;
}

function ReviewItem(props: ReviewProps) {
    const stars = [];
    for (let i = 0; i < props.rating; i++) {
        stars.push(<img key={i} src="./rating_star.png" className="App-review-rating-star"/>);
    }
    return (
        <div className="App-review-item">
            <div className="App-review-rating-container back-orange">
                {stars}
            </div>
            <div className="App-review-text-container">
                <div className="App-review-text description-text color-night-blue">{props.text}</div>
            </div>
            <div className="App-review-avatar-wrapper">
                <img className="App-review-avatar" src={props.avatarLink}/>
            </div>
        </div>
    );
}

export default ReviewItem;
