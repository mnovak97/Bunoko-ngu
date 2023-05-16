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
                    contact: 'Contact'
                }
            },
            cro: {
                translation: {
                    home: 'Početna',
                    services: 'Ponuda',
                    about: "O nama",
                    contact: 'Kontakt'
                }
            }
        }
    })