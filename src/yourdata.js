const photo = require('../src/assets/images/IMG_4141.jpg')
export default
    {
        name :'GustavoDEV',
        headerTagline: [
                        '👨🏻‍💻 GustavoDEV - Software Enginner',
                        '👾 Desarrollador Web y Mobile',
                        '  Santiago, Chile'
    ],
        contactEmail:'maxyverdugo@gmail.com',
        abouttext: "Soy una persona altamente motivada e interesada en progresar y aprender constantemente nuevas tecnologias, me gusta aportar con mis conocimientos para dar soluciones a los problemas que se impongas o ideas que tengan mis clientes, siempre buscando un trabajo de calidad que ayude a progresar.",
        abouttext2: "En mi experiencia, he aportado en muchos proyectos, en su mayoría del mundo financiero en empresas del rubro como Sura, EuroCapital y Melón. He trabajado apps moviles y apps web, tambien colaborando con pymes que quieren integrarse al mundo digital en su mayoría Tiendas.",
        aboutImage:photo,
       ShowAboutImage:true,
       projects:[
           {
            id: 1,
            title:'Node JS',
             service:'Full-Stack',
             imageSrc:"https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png",
            },
            {
                id: 2,
                title: 'JavaScript',
                service: 'Full-Stack',
                imageSrc: "https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",
            },
            { 
                id: 3,
                title: 'Express JS',
                service: 'Backend',
                imageSrc: "https://cdn.iconscout.com/icon/free/png-512/express-8-1175029.png",
            },
            {
                id: 4,
                title: '.NET Core',
                service: 'Backend',
                imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
           },
           {
               id: 5,
               title: 'React JS',
               service: 'FrontEnd',
               imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/react-4-1175110.png'
           },
           {
               id: '6',
               title: 'React Native',
               service: 'FrontEnd Mobile',
               imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/react-native-1-555609.png',
           },
           {
               id: '7',
               title: 'NativeScript',
               service: 'FrontEnd Mobile',
               imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/nativescript-282809.png'
           },
           {
               id: '8',
               title: 'Heroku',
               service: 'Cloud',
               imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/heroku-2752161-2284978.png'
           },
           {
                id: '9',
                title: 'Mongo DB',
                service: 'DataBase',
                imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png'
            },
            {
                id: '10',
                title: 'MySql',
                service: 'DataBase',
                imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/mysql-2336955-1982836.png'
            },
            {
                id: '11',
                title: 'SQL Server',
                service: 'DataBase',
                imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/sql-4-190807.png'
            },
            {
                id: '12',
                title: 'GitHub',
                service: 'Repo',
                imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/github-84-436555.png'
            },
            {
                id: '13',
                title: 'BitBucket',
                service: 'Repo',
                imageSrc: 'https://cdn.iconscout.com/icon/free/png-512/bitbucket-1693609-1442650.png'
            }
        ],
        social: [
            {   name:'Github',
                url:'https://github.com/GustavoVerdugo',
                icon: 'fab fa-github'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/maxyverdugo/',
                icon: 'fab fa-instagram'
            },
            {
                name: 'Linkedin',
                url: 'https://www.linkedin.com/in/gustavo-verdugo-ortiz-37b032168/',
                icon: 'fab fa-linkedin-in'
            }

        ]
    }