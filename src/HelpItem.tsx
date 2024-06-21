export interface HelpProps {
    header: string,
}

function HelpItem(props: HelpProps) {
    return (
        <div className="App-help-item color-black">
            { props.header }
            <button className="App-help-item-button back-orange color-white">+</button>
        </div>  
    )
}

export default HelpItem;