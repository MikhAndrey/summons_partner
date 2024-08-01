const myDocument = document.querySelector.bind(document);

const howItWorksContent = [
    {id: 1, name: "NYS Penal Law", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
    {id: 2, name: "NYPD Patrol Guide", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
    {id: 3, name: "Most common TPO", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
    {id: 4, name: "Department Phone Book", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "}
];

const featuresItemsContent = [
    {
        id: 1,
        name: "RDO Calendar", 
        description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
        imageLink: "./mobile_screen_rdo_calendar.png"
    },
    {
        id: 2,
        name: "Overtime Calculator", 
        description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
        imageLink: "./mobile_screen_overtime_calculator.png"
    },
    {
        id: 3,
        name: "Overtime History", 
        description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
        imageLink: "./mobile_screen_overtime_history.png"
    }
];

const loadHowItWorks = () => {
    howItWorksContent.forEach(el => {
        myDocument('.App-howitworks-items-container').insertAdjacentHTML('beforeend', `
            <div class="App-howitworks-about-item">
                <div class="App-icon-wrapper back-light-blue">
                <img src="./assets/images/calendar.png" class="App-icon"/>
                </div>
                <div class="App-howitworks-about-item-name color-dark-blue">${el.name}</div>
                <div class="description-text color-night-blue">${el.description}</div>
            </div>
        `);
    });
}

const loadFeatures = () => {
    featuresItemsContent.forEach(el => {
        myDocument('.App-features-items-container').insertAdjacentHTML('beforeend', `
            <div class="App-features-item">
                <div class="App-features-item-main-info">
                    <div class="App-icon-wrapper back-orange">
                        <img src="./assets/images/calendar.png" class="App-icon"/>
                    </div>
                    <div class="App-features-item-name color-dark-blue">${el.name}</div>
                    <div class="description-text color-night-blue">${el.description}</div>
                </div>
                <div class="App-features-item-image-wrapper">
                    <div class="App-features-item-mobile-screen-outer-container">
                        <div class="App-features-item-mobile-screen-inner-container">
                            <div class="App-mobile-screen-mask"></div>
                            <img class="App-mobile-screen-image" src="./assets/images/${el.imageLink}" alt="Mobile screen"/>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

window.addEventListener('load', () => {
    loadHowItWorks();
    loadFeatures();
});

myDocument('.burger-menu-button').addEventListener('click', () => {
    myDocument('.App-content-area').classList.add('invisible');
    myDocument('.App-header-overlay').classList.remove('invisible');
    myDocument('.burger-menu-items').classList.remove('invisible');
    myDocument('.burger-menu-button').classList.add('invisible');
    myDocument('.close-menu-button').classList.remove('invisible');
});

myDocument('.close-menu-button').addEventListener('click', () => {
    myDocument('.App-content-area').classList.remove('invisible');
    myDocument('.App-header-overlay').classList.add('invisible');
    myDocument('.burger-menu-items').classList.add('invisible');
    myDocument('.burger-menu-button').classList.remove('invisible');
    myDocument('.close-menu-button').classList.add('invisible');
});