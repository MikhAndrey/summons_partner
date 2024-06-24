export interface HelpProps {
    header: string,
}

function HelpItem(props: HelpProps) {
    return (
        <div className="App-help-item color-black">
            <div>
                { props.header }
            </div>
            <div>
                <button className="App-help-item-button"/>
            </div>
        </div>  
    )
}

export default HelpItem;