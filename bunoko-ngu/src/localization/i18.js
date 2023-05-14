import i18next from 'i18next'
import { initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    home: 'Home',
                    services: 'Services',
                    contacts: 'Contacts'
                }
            },
            cro: {
                translation: {
                    home: 'Početna',
                    services: 'Ponuda',
                    contacts: 'Kontakt'
                }
            }
        }
    })