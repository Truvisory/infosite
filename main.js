

var tech = [
    {
        name: 'AngularJS',
        logo: 'https://angular.io/assets/images/logos/angular/angular.png',
        type: 'Front-end web application framework',
        desc: 'AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.',
        link: 'https://angularjs.org/'
    },
    {
        name: 'Bootstrap',
        logo: 'https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png',
        type: 'CSS framework',
        desc: 'Bootstrap is a free and open-source front-end framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many earlier web frameworks, it concerns itself with front-end development only.',
        link: 'https://getbootstrap.com/'
    },
        {
        name: 'Ember.js',
        logo: 'https://www.emberjs.com/images/brand/ember_Ember-Light-18e7748d.png',
        type: 'Front-end web application framework',
        desc: 'Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. It allows developers to create scalable single-page web applications[3] by incorporating common idioms and best practices into the framework.',
        link: 'https://www.emberjs.com/'
    },
        {
        name: '.NET',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png',
        type: 'Software framework',
        desc: '.NET is a free, cross-platform, open source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, gaming, and IoT.',
        link:'https://www.microsoft.com/net'
    },
        {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        type: 'Javascript library',
        desc: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.  React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.',
        link: 'https://reactjs.org/'
    },
        {
        name: 'jQuery',
        logo: 'https://pbs.twimg.com/profile_images/788014136575668224/lxEKmMnB_200x200.jpg',
        type: 'Javascript library',
        desc: 'jQuery\'s syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library. This enables developers to create abstractions for low-level interaction and animation, advanced effects and high-level, themeable widgets.',
        link: 'https://jquery.com/'
    },
        {
        name: 'MongoDB',
        logo: 'https://user-images.githubusercontent.com/11978772/40430921-73d53922-5e63-11e8-8dcd-1662136c3212.png',
        type: 'Database',
        desc: 'MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata.',
        link: 'https://www.mongodb.com/'
    },
        {
        name: 'MySQL',
        logo: 'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/mysql-workbench-icon.png',
        type: 'Database',
        desc: 'MySQL is the world’s most popular open source database. With its proven performance, reliability, and ease-of-use, MySQL has become the leading database choice for web-based applications, used by high profile web properties including Facebook, Twitter, YouTube, and all five of the top five websites*. Additionally, it is an extremely popular choice as embedded database, distributed by thousands of ISVs and OEMs.',
        link: 'https://www.mysql.com/'
    },
        {
        name: 'JSON',
        logo: 'https://image.flaticon.com/icons/svg/136/136525.svg',
        type: 'Data interchange format',
        desc: 'JavaScript Object Notation is an open-standard file format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value). It is a very common data format used for asynchronous browser–server communication, including as a replacement for XML in some AJAX-style systems.',
        link: 'https://www.json.org/'
    },
        {
        name: 'XML',
        logo: 'https://image.flaticon.com/icons/svg/136/136526.svg',
        type: 'Markup language',
        desc: 'Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.',
        link: 'https://developer.mozilla.org/en-US/docs/XML_introduction'
    },
]

var parent = document.querySelector(".row")

for (var i = 0; i < tech.length; i++) {
    var card = document.createElement("div")
    card.classList.add('card', 'col-lg-3')
    var selection = tech[i];
    var itemHTML = 
    `
    <img class="card-img-top mx-auto" style="width: auto; height: 75px;" src="${selection.logo}">
    <div class="card-body">
        <h3 class="card-title text-white bg-dark">&nbsp;${selection.name}</h3>
        <p class="card-text">Type: ${selection.type}</p>
        <p class="card-text">${selection.desc}</p>
        <a href=${selection.link} class="btn btn-primary btn-block" target="_blank">${selection.name}</a></div>
    `;

    card.innerHTML = itemHTML
    parent.appendChild(card);
}