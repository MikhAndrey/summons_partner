interface Contact {
    contact: string
}

function Contacts() {
    const ContactsData: Contact[] = [
        { contact: 'summonspartner@gmail.com' },
        { contact: '+1-394-3439-1435' }
    ]

    return (
        <div className="App-contacts" id="contacts">
            <div className="App-contacts-header color-night-blue">
                Contact us
            </div>
            <div className="App-contacts-links-container">
                { ContactsData.map(el => 
                    <div className="App-contacts-link color-dark-blue">{ el.contact }</div>
                ) }
            </div>
        </div>
    )
}

export default Contacts;