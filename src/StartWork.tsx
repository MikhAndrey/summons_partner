import GetAppLinkItem, { GetAppLinkItemProps } from "./GetAppLinkItem";

function StartWork() {
    const GetAppLinksItems: GetAppLinkItemProps[] = [
        {
            imageLink: "./app_store_link.png"
        },
        {
            imageLink: "./google_play_link.png"
        },
    ];

    return (
        <div className="App-start-work back-orange">
            <div className="App-start-work-header header-text">
                Start your work<br/> with us now
            </div>
            <div className="App-start-work-desciption">
                Physical space is often conceived in three linear dimensions,
                although modern physicists usually con
            </div>
            <div className="App-start-work-get-app">
                Get the App
                <div className="App-start-work-get-app-links-container">
                    { GetAppLinksItems.map(el => 
                        <GetAppLinkItem imageLink={ el.imageLink }/>
                    ) }
                </div>
            </div>
            <div className="App-start-work-phone-image-container">
                <img className="App-start-work-phone-image image-shadow" src="./get_app_phone.png"/>
                <img className="App-start-work-phone-image-mobile image-shadow" src="./get_app_phone_mobile.png"/>
            </div>
            <div className="App-start-work-car-image-container">
                <img className="App-start-work-car-image" src="./police_car.png"/>
                <img className="App-start-work-car-image-mobile" src="./police_car_mobile.png"/>
            </div>
        </div>  
    )
}

export default StartWork;