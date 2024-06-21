export interface GetAppLinkItemProps {
    imageLink: string,
}

function GetAppLinkItem(props: GetAppLinkItemProps) {
    return (
        <div className="App-start-work-get-app-link">
            <img src={ props.imageLink }/>
        </div>  
    )
}

export default GetAppLinkItem;