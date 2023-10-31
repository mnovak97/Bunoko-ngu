import i18next from 'i18next'
import { initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'cro',
        resources: {
            en: {
                translation: {
                    home: 'Home',
                    services: 'Services',
                    about:'About us',
                    contact: 'Contact',
                    careers: 'Careers',
                    write: 'Contact us',
                    name: 'Name',
                    message: 'Message',
                    email: 'Email',
                    subject: 'Subject',
                    send: 'Send',
                    join: 'Join us',
                    aboutUsParagraphOne: 'Company ‘BUNOKO N.G.U.’ is a successor to the trade founded in 1995. which was registered as an d.o.o. for real estate bussiness, construction and services in 2007.',
                    aboutUsParagraphTwo: 'Continuing the artisanal tradition, the company continued to develop as a specialist in the repair and servicing of electrical tools and machines, refrigeration technology and electrical installations, which is taken care of by our team of excellent master electromechanics.',
                    saturday: 'saturday',
                    week:'monday-friday',
                    workHours:'WORK HOURS',
                    mobile: 'Mobile',
                    phone: 'Phone',
                    contactUs: 'Contact us',
                    apply: 'Apply',
                    careerParagraph: 'Are you interested in a career in this field or do you need to do an internship? Are you motivated and ready to learn? In bunoko-ng, you have the opportunity to work with a mentor with over 20 years of experience!',
                    careerTitle: 'Are you looking for a career or are you interested in an internship?',
                    concreteMixer: 'Repair of concrete mixer vibrators',
                    concreteCranes: 'Repair of construction cranes',
                    electricTools: 'Repair of all types of electric hand tools',
                    tools: 'Tool service',
                    toolsSale: 'Sale of tools and accessories',
                    winding: 'Winding of electric motors and rotors',
                    airCondition: 'Repair and filling of car air conditioner',
                    ourServices: 'Our services',
                    more: 'Find out more',
                    tradition: 'A tradition of more than two decades of successful work is a guarantee of our quality, as our numerous clients have already convinced themselves. Call 091/ 20 05 862',
                    service: 'Car air conditioning service, all kinds of electrical tools and machines, refrigeration technology and electrical installations'

                }
            },
            cro: {
                translation: {
                    home: 'Početna',
                    services: 'Usluge',
                    about: "O nama",
                    contact: 'Kontakt',
                    careers: 'Karijere',
                    write: 'Pišite nam',
                    name: 'Ime',
                    message: 'Poruka',
                    email: 'Email',
                    subject: 'Predmet',
                    send: 'Pošalji',
                    join: 'Pridruži se',
                    aboutUsParagraphOne: 'Tvrtka ‘BUNOKO N.G.U.’ nasljednik je obrta osnovanog 1995. godine koji je 2007. registriran kao d.o.o. za poslovanje nekretninama, graditeljstvo i usluge.',
                    aboutUsParagraphTwo : 'Nastavljajući obrtničku tradiciju tvrtka se nastavila razvijati kao specijalist za popravak i servisiranje električnih alata i strojeva, rashladne tehnike i elektroinstalacija, a o čemu brine naša ekipa vrsnih majstora elektromehaničara.',
                    saturday: 'sub',
                    week: 'pon-pet',
                    workHours: 'RADNO VRIJEME',
                    mobile: 'Mobitel',
                    phone: 'Telefon',
                    contactUs: 'Kontaktiraj nas',
                    apply: 'Prijavi se',
                    careerParagraph: 'Zanima te karijera u ovom području ili pak trebaš odraditi praksu? Motiviran si i spreman učiti? U bunoko-ngu imaš priliku raditi uz mentora s preko 20 godina iskustva!',
                    careerTitle: 'Tražiš karijeru ili te zanima praksa',
                    concreteMixer: 'Popravak vibratora betonatora betona',
                    concreteCranes: 'Popravak građevinskih dizalica',
                    electricTools: 'Popravak svih vrsta električnog ručnog alata',
                    tools: 'Servis alata',
                    toolsSale: 'Prodaja alata i pribora',
                    winding: 'Prematanje elektromotora i rotora',
                    airCondition: 'Popravak i punjenje auto-klima',
                    ourServices: 'Naše usluge',
                    more: 'Saznaj više',
                    tradition: 'Tradicija duža od dva desetljeća uspješnog rada jamstvo su naše kvalitete u što su se već uvjerili naši brojni klijenti. Nazovite 091/ 20 05 862',
                    service: 'Servis auto klime, svih vrsta električnog alata i strojeva, rashladne tehnike i elektroinstalacija'
                }
            }
        }
    })