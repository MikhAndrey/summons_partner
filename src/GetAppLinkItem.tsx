export interface GetAppLinkItemProps {
    id: number,
    imageLink: string,
    redirectLink: string
}

function GetAppLinkItem(props: GetAppLinkItemProps) {
    return (
        <a href={props.redirectLink} target="_blank" className="App-start-work-get-app-link-container">
            <img alt="app-link" className="App-start-work-get-app-link-image" src={ props.imageLink }/>
        </a>  
    )
}

export default GetAppLinkItem;
