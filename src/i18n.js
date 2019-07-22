import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        lng: 'pl', // to fixed react-i18next:: i18n.languages were undefined or empty undefined 
        resources: {
            pl: {
                translations: {
                    "text1": "Litwo, Ojczyzno moja! ty jesteś jak zdrowie.",
                    "text2": "Ile cię trzeba cenić, ten tylko się dowie, Kto cię stracił. Dziś piękność twą w całej ozdobie Widzę i opisuję, bo tęsknię po tobie.",
                    "result": "$t(text1), $t(text2)",
                }
            },
            de: {
                translations: {
                    "result": "Deutsches Ipsum Dolor id latine Glühwein complectitur pri, mea meliore denique 99 Luftballons id. Elitr expetenda nam an, Mercedes Benz ei reque euismod assentior. Odio Reise iracundia ex pri. Ut vel Schwarzwälder Kirschtorte mandamus, quas natum adversarium ei Schnaps diam minim honestatis eum no",
                }
            },
            en: {
                translations: {
                    "result": "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."
                }
            }
        },
        ns: ["translations"],
        defaultNS: "translations",
    });

export default i18n;
