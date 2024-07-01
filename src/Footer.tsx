function Footer() {
    const termsOfUseUrl = 'https://arttica.is/terms';

    return (
        <div className="App-footer">
            <div className="App-footer-copyright">
                © 2020-2024 n.u. logistics - All Rights Reserved
            </div>
            <div className="App-footer-links-container">
                <a href={ termsOfUseUrl } className="App-footer-link">Terms of use</a>
                <a href={ termsOfUseUrl } className="App-footer-link">Privacy policy</a>
            </div>
        </div>
    )
}

export default Footer;