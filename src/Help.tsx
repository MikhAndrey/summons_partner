import HelpItem, { HelpProps } from "./HelpItem";

function Help() {
    const HelpItemsData : HelpProps[] = [
        { header: 'How do i sign up for the project?' },
        { header: 'What thing that i should prepare before starting?' },
        { header: 'How much does the app cost?' },
        { header: 'The application does not start, what to do?' },
        { header: 'How do i sign up for the project?' },
        { header: 'What thing that i should prepare before starting?' },
        { header: 'How much does the app cost?' },
        { header: 'The application does not start, what to do?' },
    ];

    return (
        <div className="App-help" id="help">
            <div className="App-help-header header-text color-dark-blue">
                How we can help you?
            </div>
            <div className="App-help-view">
                { HelpItemsData.map(el => 
                    <HelpItem header={ el.header }/>
                ) }
            </div>
        </div>
    )
}

export default Help;