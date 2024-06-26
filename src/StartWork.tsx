import GetAppLinkItem, { GetAppLinkItemProps } from "./GetAppLinkItem";

function StartWork() {
    const GetAppLinksItems: GetAppLinkItemProps[] = [
        {
            id: 1,
            imageLink: "./app_store_link.png"
        },
        {
            id: 2, 
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
                        <GetAppLinkItem key={ el.id } id={ el.id } imageLink={ el.imageLink }/>
                    ) }
                </div>
            </div>
            <div className="App-start-work-phone-image-container">
                <img alt="get-app-phone" className="App-start-work-phone-image image-shadow" src="./get_app_phone.png"/>
                <img alt="get-app-phone"  className="App-start-work-phone-image-mobile image-shadow" src="./get_app_phone_mobile.png"/>
            </div>
            <div className="App-start-work-car-image-container">
                <img alt="start-work-car"  className="App-start-work-car-image" src="./police_car.png"/>
                <img alt="start-work-car"  className="App-start-work-car-image-mobile" src="./police_car_mobile.png"/>
            </div>
        </div>  
    )
}

export default StartWork;