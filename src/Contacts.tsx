interface Contact {
    id: number,
    contact: string
}

function Contacts() {
    const ContactsData: Contact[] = [
        { id: 1, contact: 'summonspartner@gmail.com' },
        { id: 2, contact: '+1-394-3439-1435' }
    ]

    return (
        <div className="App-contacts" id="contacts">
            <div className="App-contacts-header color-night-blue">
                Contact us
            </div>
            <div className="App-contacts-links-container">
                { ContactsData.map(el => 
                    <div key={ el.id } className="App-contacts-link color-dark-blue">{ el.contact }</div>
                ) }
            </div>
        </div>
    )
}

export default Contacts;