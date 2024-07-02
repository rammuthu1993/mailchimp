import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "WM3ReQ3cQpFUVBllWk4OTQ"; // Add ypur API key;
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`; // Add your loadpath;

i18next
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// The default language
		fallbackLng: "en",

		ns: ["default"],
		defaultNS: "default",

		// Tt shows the supported languages
		supportedLngs: ["en", "ta"],
		backend: {
			loadPath: loadPath,
		},
	});


/* import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "WM3ReQ3cQpFUVBllWk4OTQ";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","ta"],
    
    backend: {
      loadPath: loadPath
    }
  }) */