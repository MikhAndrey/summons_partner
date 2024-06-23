import React from "react";
import ReviewItem, {ReviewProps} from "./ReviewItem";

function Reviews() {
    const reviewItems: ReviewProps[] = [
        {
            rating: 5,
            text: "If you’re on patrol, you need this app. It includes all the violations needed for all the summonses, and you can save the ones you use the most for easier access. Furthermore, it has TPO narratives when are very important to have, especially for those who are just starting their career. The reference section is useful.\n" +
                "You can have your rdo calendar, pay day, and vacation picks all within the same app too. My most favorite, is definitely the OT calculator, this app makes it very easy to keep track of your ot in a very organized manner.",
            avatarLink: "./user_avatar1.png"
        },
        {
            rating: 5,
            text: "I have been using this app for over half a year and I can honestly say that this app has everything you need when you are on patrol. Whether is looking up violation codes or how to write a story that spells out the crime, it has everything you need. The overtime add on is worth the extra money. It is very easy to use and has everything you need to stay on top of your money.\n" +
                "This app is very user friendly and there are no glitches whatsoever. The creator works hard to constantly update and make changes.",
            avatarLink: "./user_avatar2.png"
        },
    ]
    
    return (
        <div id="reviews">
            <div className="App-reviews-container back-dark-blue">
                <div className="App-reviews-info">
                    <div className="App-reviews-label">
                        <div>
                            <div className="header-text">What people say</div>
                            <div className="header-text">about app</div>
                        </div>
                        <div>
                            <div className="main-label-description">More than 1.2K users have shared</div>
                            <div className="main-label-description">their experience with our app!</div>
                        </div>
                    </div>
                    <div className="App-reviews-content">
                        {reviewItems.map(el => (
                            <ReviewItem text={el.text} rating={el.rating} avatarLink={el.avatarLink}></ReviewItem>
                        ))}
                    </div>
                    <div className="App-reviews-button">
                        <span className="App-ref-link-label color-orange">Show more</span>
                        <img className="App-ref-link-icon color-orange" src="./ref_link_icon.png" alt="More"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
