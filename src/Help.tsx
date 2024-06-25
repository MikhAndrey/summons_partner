import HelpItem, { HelpProps } from "./HelpItem";

function Help() {
    const HelpItemsData : HelpProps[] = [
        { 
            header: 'How do i sign up for the project?',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' 
        },
        { 
            header: 'What thing that i should prepare before starting?',
            details: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' 
        },
        { 
            header: 'How much does the app cost?',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' 
        },
        { 
            header: 'The application does not start, what to do?',
            details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum.`
        },
        { 
            header: 'How do i sign up for the project?',
            details: `sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `
        },
        { 
            header: 'What thing that i should prepare before starting?',
            details: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' 
        },
        { 
            header: 'How much does the app cost?',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' 
        },
        { 
            header: 'The application does not start, what to do?',
            details: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' 
        },
    ];

    return (
        <div className="App-help" id="help">
            <div className="App-help-header header-text color-dark-blue">
                How we can help you?
            </div>
            <div className="App-help-view">
                { HelpItemsData.map(el => 
                    <HelpItem header={ el.header } details={ el.details }/>
                ) }
            </div>
        </div>
    )
}

export default Help;