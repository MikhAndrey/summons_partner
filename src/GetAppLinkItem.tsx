export interface GetAppLinkItemProps {
    imageLink: string,
}

function GetAppLinkItem(props: GetAppLinkItemProps) {
    return (
        <div className="App-start-work-get-app-link-container">
            <img className="App-start-work-get-app-link-image" src={ props.imageLink }/>
        </div>  
    )
}

export default GetAppLinkItem;