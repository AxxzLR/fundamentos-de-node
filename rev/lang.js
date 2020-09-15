//#region Recursos
const selfie = '../assets/static/selfie.jpg'

const aboutIcon = '../assets/static/user-icon.svg'
const workIcon = '../assets/static/work-icon.svg'
const servicesICon = '../assets/static/cafe-icon.svg'
const contactIcon = '../assets/static/mail-icon.svg'
const homeIcon = '../assets/static/home-icon.svg'

const webdevIcon = '../assets/static/dev-icon.svg'
const designIcon = '../assets/static/design-icon.svg'
const networkIcon = '../assets/static/network-icon.svg'

const facebook = '../assets/static/fb-icon.svg'
const instagram = '../assets/static/ig-icon.svg'
const twitter = '../assets/static/tw-icon.svg'
const linkedin = '../assets/static/in-icon.svg'
const github = '../assets/static/gh-icon.svg'

const jsLogo = '../assets/static/js-logo.png'
const reactLogo = '../assets/static/react-logo.svg'
const reduxLogo = '../assets/static/redux-logo.png'
const nodeLogo = '../assets/static/node-logo.png'
const web = '../assets/static/web-icon.svg'
const netLogo = '../assets/static/net-logo.png'
const gitLogo = '../assets/static/git-logo.png'
const xdLogo = '../assets/static/xd-logo.svg'
const aiLogo = '../assets/static/ai-logo.png'

const ecomerce = '../assets/static/shop-icon.svg'
const admin = '../assets/static/admin-icon.svg'
const uinterface = '../assets/static/ui-icon.svg'
const uinteraction = '../assets/static/uinter-icon.svg'
//#endregion

const getContentByLang = (lang) => runObject(lang, content)

const exploreData = (lang, data) => (
    typeof data === 'object'
        ? Array.isArray(data)
            ? runArray(lang, data)
            : (data.hasOwnProperty('es') && data.hasOwnProperty('en'))
                ? data[lang]
                : runObject(lang, data)
        : data
)

const runArray = (lang, data) => {
    let ret = []
    data.forEach(element => {
        ret = [...ret, exploreData(lang, element)]
    });
    console.log(ret)
    return ret
}

const runObject = (lang, data) => {
    let ret = {}
    for (const key in data) {
        ret = { ...ret, [key]: exploreData(lang, data[key]) }
    }
    return ret
}



const content = {
    navbar: [
        {
            view: "home",
            icon: homeIcon,
            text: { es: "Inicio", en: "Home" }
        },
        {
            view: "about",
            icon: aboutIcon,
            text: { es: "Sobre mí", en: "About" }
        },
        // {
        //     view: "work",
        //     icon: workIcon,
        //     text: { es: "Trabajo", en: "Work" }
        // },
        {
            view: "services",
            icon: servicesICon,
            text: { es: "Servicios", en: "Services" }
        },
        {
            view: "contact",
            icon: contactIcon,
            // text: "Contacto"
            text: { es: "Contacto", en: "Contact" }
        },
    ],
    socialMedia: [
        { icon: facebook, url: "/", txt: "Facebook" },
        { icon: instagram, url: "/", txt: "Instagram" },
        { icon: twitter, url: "/", txt: "Twitter" },
        { icon: linkedin, url: "/", txt: "Linkedin" },
        { icon: github, url: "/", txt: "Github" },
    ],
    home: {
        mainText: { es: "Hola, soy Axel", en: "Hi, I'm Axel" },
        secondaryText: { es: "Desarrollador web, Diseñador UI", en: "Web Developer, UI Designer" },
        cta: { es: "Contáctame", en: "Contact me" }
    },
    about: {
        title: { es: "Sobre mí", en: "About me" },
        text: {
            es: "Profesional desarrollo y diseño, me gusta crear cosas estéticas y funcionales, manteniéndolo simple.\n\nComencé profesionalmente hace algunos años, trabajando para pequeñas y grandes empresas como parte del equipo de desarrollo y recientemente como FreeLancer.\n\nSoy una persona organizada, capaz de resolver problemas, curioso y en constante aprendizaje.\n\nEntusiasta del motociclismo, me gusta viajar y los videojuegos.",
            en: "Professional in development and design, I like to create beauty and functional things, keeping it simple. I started professionally some years ago, working for small and big companies as part of the development team and recently as a FreeLancer.\n\nI am an organized person, capable of solving problems, curious and in constant learning.\n\nMotorcycling enthusiast, I like traveling and video games."
        },
        img: selfie,
    },
    // work: {
    //     title: "Trabajo",
    //     timeline: [
    //         {
    //             id: "tml_murguia",
    //             toLeft: true,
    //             Logo: Murguia,
    //             Title: "Murguía Consultores",
    //             Period: "2018 - Actual",
    //             Desc: 'Hola\nEsta es la descripcion',
    //         }
    //     ]
    // },
    skills: {
        title: { es: "Servicios", en: "Services" },
        titleServices: { es: "¿Cómo te puedo ayudar?", en: "How can I help you?" },
        exp: [
            {
                id: "exp_webdev",
                title: { es: "Desarrollo web", en: "Web Development" },
                icon: networkIcon,
                text: {
                    es: "Puedo programar plataformas eficientes y escalables, con procesos optimizados, que permitan al usuario tener su flujo e información siempre disponible.",
                    en: "I can code efficient and scalable platforms with optimized process that could allow the user get their workflow and information always available."
                },
                titleDots: { es: "Herramientas de Desarrollo", en: "Development tools" },
                dots: [
                    { id: "li_js", text: "JavaScript", icon: jsLogo },
                    { id: "li_react", text: "React", icon: reactLogo },
                    { id: "li_redux", text: "Redux", icon: reduxLogo },
                    { id: "li_node", text: "Node JS", icon: nodeLogo },
                    { id: "li_web", text: "CSS & HTML", icon: web },
                    { id: "li_net", text: ".NET (C#)", icon: netLogo },
                    { id: "li_git", text: "Git", icon: gitLogo },
                ],
                services: [
                    {
                        id: "srv_ecom",
                        icon: ecomerce,
                        title: "E-Commerce",
                    },
                    {
                        id: "srv_admin",
                        icon: admin,
                        title: "CRM / ERP",
                    },
                    {
                        id: "srv_web",
                        icon: web,
                        title: { es: "Sitios web / Apps web", en: "Web sites / Web apps" },
                    },
                ]
            },
            {
                id: "exp_uides",
                title: { es: "Diseño UI", en: "UI Design" },
                icon: designIcon,
                text: {
                    es: 'Puedo construir interfaces limpias, con interacción fluida e intuitiva, utilizando "mobile first".',
                    en: 'I can build clear interfaces with fluid and intuitive interaction, using "mobile first".',
                },
                titleDots: { es: "Herramientas de Diseño", en: "Design tools" },
                dots: [
                    { id: "li_xd", text: "Adobe XD", icon: xdLogo },
                    { id: "li_ai", text: "Adobe Illustrator", icon: aiLogo },
                    { id: "li_fgm", text: "Figma", icon: '' },
                ],
                services: [
                    {
                        id: "srv_ui",
                        icon: uinterface,
                        title: { es: "Diseño de interfaz", en: "Interface design" },
                    },
                    {
                        id: "srv_uinter",
                        icon: uinteraction,
                        title: { es: "Diseño de interacción", en: "Interaction design" },
                    },
                    {
                        id: "srv_resp",
                        icon: webdevIcon,
                        title: { es: "Diseño Responsivo", en: "Responsive design" },
                    },
                ]
            },
        ]
    },
    contact: {
        title: { es: "Contacto", en: "Contact" },
        text: {
            es: "Estoy emocionado por saber sobre tu proyecto y espero tener la oportunidad de poder contribuir en él.",
            en: "I'm excited to know about your project and I hope get the opportunity to work on it."
        },
        form: {
            name: { es: "Nombre", en: "Name" },
            email: { es: "Correo", en: "Email" },
            subject: { es: "Asunto", en: "Subject" },
            message: { es: "Mensaje", en: "Message" },
            send: { es: "Enviar", en: "Send" }
        }
    },
    prueba: 'Soy una prueba xD',
    pruebaLang: { es: "Español", en: "English" }
}

console.log("Resultado", getContentByLang('en'))