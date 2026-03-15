const API_URL = "https://astro-api-1qnc.onrender.com/api/v1/vedic/panchang";
const DEFAULT_LOCATION = {
  name: "Udupi, Karnataka, India",
  latitude: 13.3409,
  longitude: 74.7421
};

const FIELDS = [
  "samvatsara",
  "aayana",
  "ritu",
  "maas",
  "paksha",
  "tithi",
  "vaasara",
  "nakshatra",
  "yoga",
  "karana",
  "sunrise",
  "sunset"
];

const LANGUAGE_DATA = {
  en: {
    title: "Digital Panchanga",
    dateLabel: "Select Date",
    languageLabel: "Language",
    loadButton: "Load Panchanga",
    detectingLocation: "Detecting location...",
    waiting: "Waiting for data...",
    loading: "Loading Panchanga...",
    invalidDate: "Please select a valid date.",
    apiLoaded: "Loaded from API.",
    fallback: "API unavailable. Showing fallback approximation.",
    geoUnavailable: "Geolocation unavailable. Using default: Udupi, Karnataka.",
    geoDenied: "Location permission denied. Using default: Udupi, Karnataka.",
    geoDetected: "Using detected location:",
    labels: {
      samvatsara: "Samvatsara",
      aayana: "Aayana",
      ritu: "Ritu",
      maas: "Maas",
      paksha: "Paksha",
      tithi: "Tithi",
      vaasara: "Vaasara",
      nakshatra: "Nakshatra",
      yoga: "Yoga",
      karana: "Karana",
      sunrise: "Sunrise",
      sunset: "Sunset"
    },
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    aayana: { Uttarayana: "Uttarayana", Dakshinayana: "Dakshinayana" },
    paksha: { "Shukla Paksha": "Shukla Paksha", "Krishna Paksha": "Krishna Paksha" }
  },
  hi: {
    title: "डिजिटल पंचांग",
    dateLabel: "तारीख चुनें",
    languageLabel: "भाषा",
    loadButton: "पंचांग लोड करें",
    detectingLocation: "स्थान पहचाना जा रहा है...",
    waiting: "डेटा की प्रतीक्षा हो रही है...",
    loading: "पंचांग लोड हो रहा है...",
    invalidDate: "कृपया सही तारीख चुनें।",
    apiLoaded: "API से डेटा प्राप्त हुआ।",
    fallback: "API उपलब्ध नहीं है। अनुमानित पंचांग दिखाया जा रहा है।",
    geoUnavailable: "Geolocation उपलब्ध नहीं है। डिफ़ॉल्ट: उडुपी, कर्नाटक।",
    geoDenied: "लोकेशन अनुमति नहीं मिली। डिफ़ॉल्ट: उडुपी, कर्नाटक।",
    geoDetected: "पहचाना गया स्थान:",
    labels: {
      samvatsara: "संवत्सर",
      aayana: "आयन",
      ritu: "ऋतु",
      maas: "मास",
      paksha: "पक्ष",
      tithi: "तिथि",
      vaasara: "वासर",
      nakshatra: "नक्षत्र",
      yoga: "योग",
      karana: "करण",
      sunrise: "सूर्योदय",
      sunset: "सूर्यास्त"
    },
    weekdays: ["भानुवासर", "इन्दुवासर", "भौमवासर", "सौम्यवासर", "बृहस्पतिवासर", "भृगुवासर", "मन्दवासर"],
    aayana: { Uttarayana: "उत्तरायण", Dakshinayana: "दक्षिणायण" },
    paksha: { "Shukla Paksha": "शुक्ल पक्ष", "Krishna Paksha": "कृष्ण पक्ष" }
  },
  kn: {
    title: "ಡಿಜಿಟಲ್ ಪಂಚಾಂಗ",
    dateLabel: "ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
    languageLabel: "ಭಾಷೆ",
    loadButton: "ಪಂಚಾಂಗ ಲೋಡ್ ಮಾಡಿ",
    detectingLocation: "ಸ್ಥಳವನ್ನು ಪತ್ತೆಹಚ್ಚಲಾಗುತ್ತಿದೆ...",
    waiting: "ಮಾಹಿತಿಗಾಗಿ ಕಾಯುತ್ತಿದೆ...",
    loading: "ಪಂಚಾಂಗ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    invalidDate: "ದಯವಿಟ್ಟು ಸರಿಯಾದ ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ.",
    apiLoaded: "API ಇಂದ ಲೋಡ್ ಮಾಡಲಾಗಿದೆ.",
    fallback: "API ಲಭ್ಯವಿಲ್ಲ. ಅಂದಾಜು ಪಂಚಾಂಗ ತೋರಿಸಲಾಗುತ್ತಿದೆ.",
    geoUnavailable: "Geolocation ಲಭ್ಯವಿಲ್ಲ. ಡೀಫಾಲ್ಟ್: ಉಡುಪಿ, ಕರ್ನಾಟಕ.",
    geoDenied: "ಸ್ಥಳ ಅನುಮತಿ ಸಿಗಲಿಲ್ಲ. ಡೀಫಾಲ್ಟ್: ಉಡುಪಿ, ಕರ್ನಾಟಕ.",
    geoDetected: "ಪತ್ತೆಯಾದ ಸ್ಥಳ:",
    labels: {
      samvatsara: "ಸಂವತ್ಸರ",
      aayana: "ಆಯನ",
      ritu: "ಋತು",
      maas: "ಮಾಸ",
      paksha: "ಪಕ್ಷ",
      tithi: "ತಿಥಿ",
      vaasara: "ವಾರ",
      nakshatra: "ನಕ್ಷತ್ರ",
      yoga: "ಯೋಗ",
      karana: "ಕರಣ",
      sunrise: "ಸೂರ್ಯೋದಯ",
      sunset: "ಸೂರ್ಯಾಸ್ತ"
    },
    weekdays: ["ಭಾನುವಾಸರ", "ಇಂದುವಾಸರ", "ಭೌಮವಾಸರ", "ಸೌಮ್ಯವಾಸರ", "ಬೃಹಸ್ಪತಿವಾಸರ", "ಭೃಗುವಾಸರ", "ಮಂದವಾಸರ"],
    aayana: { Uttarayana: "ಉತ್ತರಾಯಣ", Dakshinayana: "ದಕ್ಷಿಣಾಯಣ" },
    paksha: { "Shukla Paksha": "ಶುಕ್ಲ ಪಕ್ಷ", "Krishna Paksha": "ಕೃಷ್ಣ ಪಕ್ಷ" }
  },
  sa: {
    title: "Digital Panchanga",
    dateLabel: "Dinam Chinotu",
    languageLabel: "Bhasha",
    loadButton: "Panchangam Avah",
    detectingLocation: "Sthanam Nirdharayati...",
    waiting: "Dattam Pratikshate...",
    loading: "Panchangam Aharati...",
    invalidDate: "Kripaya sahi dinankam chinotu.",
    apiLoaded: "API margaena dattam praptam.",
    fallback: "API na labhyate. Anumita panchangam darshyate.",
    geoUnavailable: "Geolocation na labhyate. Moolasthanam: Udupi, Karnataka.",
    geoDenied: "Sthanam anumati na labdha. Moolasthanam: Udupi, Karnataka.",
    geoDetected: "Nirdharita sthanam:",
    labels: {
      samvatsara: "Samvatsara",
      aayana: "Aayana",
      ritu: "Ritu",
      maas: "Maasa",
      paksha: "Paksha",
      tithi: "Tithi",
      vaasara: "Vaasara",
      nakshatra: "Nakshatra",
      yoga: "Yoga",
      karana: "Karana",
      sunrise: "Suryodaya",
      sunset: "Suryasta"
    },
    weekdays: [
      "bhanuvasara",
      "Induvasara",
      "Bhowmavasara",
      "Sowmyavasara",
      "Brihaspativasara",
      "Bhriguvasara",
      "Mandavasara"
    ],
    aayana: { Uttarayana: "Uttarayana", Dakshinayana: "Dakshinayana" },
    paksha: { "Shukla Paksha": "Shukla Paksha", "Krishna Paksha": "Krishna Paksha" }
  }
};

const samvatsaraCycle = [
  "Prabhava", "Vibhava", "Shukla", "Pramoduta", "Prajotpatti", "Angirasa", "Shrimukha", "Bhava", "Yuva", "Dhata",
  "Ishvara", "Bahudhanya", "Pramathi", "Vikrama", "Vrisha", "Chitrabhanu", "Svabhanu", "Tarana", "Parthiva", "Vyaya",
  "Sarvajit", "Sarvadhari", "Virodhi", "Vikriti", "Khara", "Nandana", "Vijaya", "Jaya", "Manmatha", "Durmukhi",
  "Hevilambi", "Vilambi", "Vikari", "Sharvari", "Plava", "Shubhakritu", "Shobhakritu", "Krodhi", "Vishvavasu", "Parabhava",
  "Plavanga", "Kilaka", "Saumya", "Sadharana", "Virodhikritu", "Paridhavi", "Pramadicha", "Ananda", "Rakshasa", "Nala",
  "Pingala", "Kalayukti", "Siddharthi", "Raudri", "Durmati", "Dundubhi", "Rudhirodgari", "Raktakshi", "Krodhana", "Akshaya"
];

const nakshatras = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha",
  "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Moola", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

const yogas = [
  "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma", "Dhriti", "Shoola",
  "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana",
  "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"
];

const karanas = [
  "Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti", "Shakuni", "Chatushpada", "Naga", "Kimstughna"
];

const tithiNames = [
  "Pratipada", "Dvitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
  "Ekadashi", "Dvadashi", "Trayodashi", "Chaturdashi", "Purnima/Amavasya"
];

const englishWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const VALUE_MAPS = {
  hi: {
    ritu: {
      vasanta: "वसंत",
      grishma: "ग्रीष्म",
      varsha: "वर्षा",
      sharad: "शरद",
      hemanta: "हेमंत",
      shishira: "शिशिर"
    },
    maas: {
      magha: "माघ",
      phalguna: "फाल्गुन",
      chaitra: "चैत्र",
      vaishakha: "वैशाख",
      jyeshtha: "ज्येष्ठ",
      ashadha: "आषाढ़",
      shravana: "श्रावण",
      bhadrapada: "भाद्रपद",
      ashwin: "आश्विन",
      kartika: "कार्तिक",
      margashirsha: "मार्गशीर्ष",
      pausha: "पौष"
    },
    tithi: {
      pratipada: "प्रतिपदा",
      dvitiya: "द्वितीया",
      tritiya: "तृतीया",
      chaturthi: "चतुर्थी",
      panchami: "पंचमी",
      shashthi: "षष्ठी",
      saptami: "सप्तमी",
      ashtami: "अष्टमी",
      navami: "नवमी",
      dashami: "दशमी",
      ekadashi: "एकादशी",
      dvadashi: "द्वादशी",
      trayodashi: "त्रयोदशी",
      chaturdashi: "चतुर्दशी",
      "purnimaamavasya": "पूर्णिमा/अमावस्या"
    },
    nakshatra: {
      ashwini: "अश्विनी",
      bharani: "भरणी",
      krittika: "कृत्तिका",
      rohini: "रोहिणी",
      mrigashira: "मृगशीर्ष",
      ardra: "आर्द्रा",
      punarvasu: "पुनर्वसू",
      pushya: "पुष्य",
      ashlesha: "आश्लेषा",
      magha: "मघा",
      purvaphalguni: "पूर्व फाल्गुनी",
      uttaraphalguni: "उत्तर फाल्गुनी",
      hasta: "हस्त",
      chitra: "चित्रा",
      swati: "स्वाती",
      vishakha: "विशाखा",
      anuradha: "अनुराधा",
      jyeshtha: "ज्येष्ठा",
      moola: "मूल",
      purvaashadha: "पूर्वाषाढ़ा",
      uttaraashadha: "उत्तराषाढ़ा",
      shravana: "श्रवण",
      dhanishta: "धनिष्ठा",
      shatabhisha: "शतभिषा",
      purvabhadrapada: "पूर्व भाद्रपदा",
      uttarabhadrapada: "उत्तर भाद्रपदा",
      revati: "रेवती"
    },
    yoga: {
      vishkambha: "विष्कम्भ",
      priti: "प्रीति",
      ayushman: "आयुष्मान",
      saubhagya: "सौभाग्य",
      shobhana: "शोभन",
      atiganda: "अतिगण्ड",
      sukarma: "सुकर्म",
      dhriti: "धृति",
      shoola: "शूल",
      ganda: "गण्ड",
      vriddhi: "वृद्धि",
      dhruva: "ध्रुव",
      vyaghata: "व्याघात",
      harshana: "हर्षण",
      vajra: "वज्र",
      siddhi: "सिद्धि",
      vyatipata: "व्यतीपात",
      variyana: "वरीयान",
      parigha: "परिघ",
      shiva: "शिव",
      siddha: "सिद्ध",
      sadhya: "साध्य",
      shubha: "शुभ",
      shukla: "शुक्ल",
      brahma: "ब्रह्म",
      indra: "इन्द्र",
      vaidhriti: "वैधृति"
    },
    karana: {
      bava: "बव",
      balava: "बालव",
      kaulava: "कौलव",
      taitila: "तैतिल",
      garaja: "गरज",
      vanija: "वणिज",
      vishti: "विष्टि",
      shakuni: "शकुनि",
      chatushpada: "चतुष्पद",
      naga: "नाग",
      kimstughna: "किंस्तुघ्न"
    },
    paksha: { shukla: "शुक्ल", krishna: "कृष्ण" }
  },
  kn: {
    ritu: {
      vasanta: "ವಸಂತ",
      grishma: "ಗ್ರೀಷ್ಮ",
      varsha: "ವರ್ಷಾ",
      sharad: "ಶರದ್",
      hemanta: "ಹೇಮಂತ",
      shishira: "ಶಿಶಿರ"
    },
    maas: {
      magha: "ಮಾಘ",
      phalguna: "ಫಾಲ್ಗುಣ",
      chaitra: "ಚೈತ್ರ",
      vaishakha: "ವೈಶಾಖ",
      jyeshtha: "ಜ್ಯೇಷ್ಠ",
      ashadha: "ಆಷಾಢ",
      shravana: "ಶ್ರಾವಣ",
      bhadrapada: "ಭಾದ್ರಪದ",
      ashwin: "ಆಶ್ವಿನ",
      kartika: "ಕಾರ್ತಿಕ",
      margashirsha: "ಮಾರ್ಗಶಿರ",
      pausha: "ಪೌಷ"
    },
    tithi: {
      pratipada: "ಪ್ರತಿಪದ",
      dvitiya: "ದ್ವಿತೀಯ",
      tritiya: "ತೃತೀಯ",
      chaturthi: "ಚತುರ್ಥಿ",
      panchami: "ಪಂಚಮಿ",
      shashthi: "ಷಷ್ಠಿ",
      saptami: "ಸಪ್ತಮಿ",
      ashtami: "ಅಷ್ಟಮಿ",
      navami: "ನವಮಿ",
      dashami: "ದಶಮಿ",
      ekadashi: "ಏಕಾದಶಿ",
      dvadashi: "ದ್ವಾದಶಿ",
      trayodashi: "ತ್ರಯೋದಶಿ",
      chaturdashi: "ಚತುರ್ದಶಿ",
      "purnimaamavasya": "ಪೌರ್ಣಮಿ/ಅಮಾವಾಸ್ಯೆ"
    },
    nakshatra: {
      ashwini: "ಅಶ್ವಿನಿ",
      bharani: "ಭರಣಿ",
      krittika: "ಕೃತ್ತಿಕಾ",
      rohini: "ರೋಹಿಣಿ",
      mrigashira: "ಮೃಗಶಿರ",
      ardra: "ಆರ್ದ್ರ",
      punarvasu: "ಪುನರ್ವಸು",
      pushya: "ಪುಷ್ಯ",
      ashlesha: "ಆಶ್ಲೇಷ",
      magha: "ಮಘಾ",
      purvaphalguni: "ಪೂರ್ವ ಫಲ್ಗುಣಿ",
      uttaraphalguni: "ಉತ್ತರ ಫಲ್ಗುಣಿ",
      hasta: "ಹಸ್ತ",
      chitra: "ಚಿತ್ರಾ",
      swati: "ಸ್ವಾತಿ",
      vishakha: "ವಿಶಾಖಾ",
      anuradha: "ಅನುರಾಧಾ",
      jyeshtha: "ಜ್ಯೇಷ್ಠಾ",
      moola: "ಮೂಲ",
      purvaashadha: "ಪೂರ್ವಾಷಾಢ",
      uttaraashadha: "ಉತ್ತರಾಷಾಢ",
      shravana: "ಶ್ರವಣ",
      dhanishta: "ಧನಿಷ್ಠಾ",
      shatabhisha: "ಶತಭಿಷಾ",
      purvabhadrapada: "ಪೂರ್ವ ಭಾದ್ರಪದ",
      uttarabhadrapada: "ಉತ್ತರ ಭಾದ್ರಪದ",
      revati: "ರೇವತಿ"
    },
    yoga: {
      vishkambha: "ವಿಷ್ಕಂಭ",
      priti: "ಪ್ರೀತಿ",
      ayushman: "ಆಯುಷ್ಮಾನ್",
      saubhagya: "ಸೌಭಾಗ್ಯ",
      shobhana: "ಶೋಭನ",
      atiganda: "ಅತಿಗಂಡ",
      sukarma: "ಸುಕರ್ಮ",
      dhriti: "ಧೃತಿ",
      shoola: "ಶೂಲ",
      ganda: "ಗಂಡ",
      vriddhi: "ವೃದ್ಧಿ",
      dhruva: "ಧ್ರುವ",
      vyaghata: "ವ್ಯಾಘಾತ",
      harshana: "ಹರ್ಷಣ",
      vajra: "ವಜ್ರ",
      siddhi: "ಸಿದ್ಧಿ",
      vyatipata: "ವ್ಯತಿಪಾತ",
      variyana: "ವರೀಯಾನ್",
      parigha: "ಪರಿಘ",
      shiva: "ಶಿವ",
      siddha: "ಸಿದ್ಧ",
      sadhya: "ಸಾಧ್ಯ",
      shubha: "ಶುಭ",
      shukla: "ಶುಕ್ಲ",
      brahma: "ಬ್ರಹ್ಮ",
      indra: "ಇಂದ್ರ",
      vaidhriti: "ವೈಧೃತಿ"
    },
    karana: {
      bava: "ಬವ",
      balava: "ಬಾಲವ",
      kaulava: "ಕೌಲವ",
      taitila: "ತೈತಿಲ",
      garaja: "ಗರಜ",
      vanija: "ವಣಿಜ",
      vishti: "ವಿಷ್ಟಿ",
      shakuni: "ಶಕುನಿ",
      chatushpada: "ಚತುಷ್ಪದ",
      naga: "ನಾಗ",
      kimstughna: "ಕಿಂಸ್ತುಘ್ನ"
    },
    paksha: { shukla: "ಶುಕ್ಲ", krishna: "ಕೃಷ್ಣ" }
  },
  sa: {
    ritu: {
      vasanta: "वसन्त",
      grishma: "ग्रीष्म",
      varsha: "वर्षा",
      sharad: "शरद्",
      hemanta: "हेमन्त",
      shishira: "शिशिर"
    },
    maas: {
      magha: "माघ",
      phalguna: "फाल्गुन",
      chaitra: "चैत्र",
      vaishakha: "वैशाख",
      jyeshtha: "ज्येष्ठ",
      ashadha: "आषाढ",
      shravana: "श्रावण",
      bhadrapada: "भाद्रपद",
      ashwin: "आश्विन",
      kartika: "कार्तिक",
      margashirsha: "मार्गशीर्ष",
      pausha: "पौष"
    },
    tithi: {
      pratipada: "प्रतिपदा",
      dvitiya: "द्वितीया",
      tritiya: "तृतीया",
      chaturthi: "चतुर्थी",
      panchami: "पञ्चमी",
      shashthi: "षष्ठी",
      saptami: "सप्तमी",
      ashtami: "अष्टमी",
      navami: "नवमी",
      dashami: "दशमी",
      ekadashi: "एकादशी",
      dvadashi: "द्वादशी",
      trayodashi: "त्रयोदशी",
      chaturdashi: "चतुर्दशी",
      "purnimaamavasya": "पूर्णिमा/अमावास्या"
    },
    paksha: { shukla: "शुक्ल", krishna: "कृष्ण" }
  }
};

const dateInput = document.getElementById("dateInput");
const languageSelect = document.getElementById("languageSelect");
const loadBtn = document.getElementById("loadBtn");
const locationInfo = document.getElementById("locationInfo");
const sourceInfo = document.getElementById("sourceInfo");

let activeLocation = { ...DEFAULT_LOCATION };
let currentLanguage = "en";
let latestPanchanga = null;
let sourceStatusKey = "waiting";
let locationStatus = "detecting";
let locationCoordinates = null;

initialize();

function initialize() {
  const now = new Date();
  applyWeekdayBackgroundTheme(now);
  dateInput.value = toDateInputValue(now);
  setAllFields("-");
  applyLanguage();

  detectLocation().finally(() => {
    loadPanchanga();
  });

  loadBtn.addEventListener("click", loadPanchanga);
  dateInput.addEventListener("change", () => {
    const selectedDate = parseDateFromInput();
    if (selectedDate) {
      applyWeekdayBackgroundTheme(selectedDate);
    }
  });
  languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    applyLanguage();
    if (latestPanchanga) {
      renderPanchanga(latestPanchanga);
    }
  });
}

function applyWeekdayBackgroundTheme(date) {
  const dayIndex = date.getDay();
  applyWeekdayBackgroundByIndex(dayIndex);
}

function applyWeekdayBackgroundByIndex(dayIndex) {
  document.body.setAttribute("data-weekday", String(dayIndex));
}

function applyLanguage() {
  const text = LANGUAGE_DATA[currentLanguage] || LANGUAGE_DATA.en;

  document.getElementById("appTitle").textContent = text.title;
  document.getElementById("dateLabel").textContent = text.dateLabel;
  document.getElementById("languageLabel").textContent = text.languageLabel;
  loadBtn.textContent = text.loadButton;

  for (const field of FIELDS) {
    const labelEl = document.getElementById("label-" + field);
    if (labelEl && text.labels[field]) {
      labelEl.textContent = text.labels[field];
    }
  }

  renderLocationInfo();
  renderSourceInfo();
}

function detectLocation() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      activeLocation = { ...DEFAULT_LOCATION };
      locationStatus = "unavailable";
      locationCoordinates = null;
      renderLocationInfo();
      resolve();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        activeLocation = {
          name: "Your location",
          latitude: Number(position.coords.latitude.toFixed(6)),
          longitude: Number(position.coords.longitude.toFixed(6))
        };
        locationStatus = "detected";
        locationCoordinates = {
          latitude: activeLocation.latitude,
          longitude: activeLocation.longitude
        };
        renderLocationInfo();
        resolve();
      },
      () => {
        activeLocation = { ...DEFAULT_LOCATION };
        locationStatus = "denied";
        locationCoordinates = null;
        renderLocationInfo();
        resolve();
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 300000
      }
    );
  });
}

async function loadPanchanga() {
  const selectedDate = parseDateFromInput();
  if (!selectedDate) {
    sourceStatusKey = "invalidDate";
    renderSourceInfo();
    return;
  }

  sourceStatusKey = "loading";
  renderSourceInfo();

  const payload = {
    year: selectedDate.getFullYear(),
    month: selectedDate.getMonth() + 1,
    day: selectedDate.getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    latitude: activeLocation.latitude,
    longitude: activeLocation.longitude
  };

  try {
    const apiData = await fetchPanchangaFromApi(payload);
    latestPanchanga = normalizeApiData(apiData, selectedDate);
    renderPanchanga(latestPanchanga);
    sourceStatusKey = "apiLoaded";
    renderSourceInfo();
  } catch (error) {
    latestPanchanga = calculateFallbackPanchanga(selectedDate, activeLocation.latitude, activeLocation.longitude);
    renderPanchanga(latestPanchanga);
    sourceStatusKey = "fallback";
    renderSourceInfo();
  }
}

async function fetchPanchangaFromApi(payload) {
  const params = new URLSearchParams({
    year: String(payload.year),
    month: String(payload.month),
    day: String(payload.day),
    hour: String(payload.hour),
    minute: String(payload.minute),
    latitude: String(payload.latitude),
    longitude: String(payload.longitude)
  });

  const response = await fetch(API_URL + "?" + params.toString());
  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json();
  return data.data || data.result || data;
}

function normalizeApiData(raw, selectedDate) {
  const vaasaraRaw = getAny(raw, ["vaasara", "vasara", "weekday"]);
  const vaasaraIndex = resolveWeekdayIndex(vaasaraRaw, selectedDate.getDay());

  return {
    samvatsara: getAny(raw, ["samvatsara", "samvatsar", "samvatsara_name"]),
    aayana: getAny(raw, ["aayana", "ayanam", "ayana"]),
    ritu: getAny(raw, ["ritu", "ruthu", "season"]),
    maas: getAny(raw, ["maas", "masa", "month", "lunar_month"]),
    paksha: getAny(raw, ["paksha"]),
    tithi: getAny(raw, ["tithi"]),
    vaasaraIndex,
    nakshatra: getAny(raw, ["nakshatra", "naksatra"]),
    yoga: getAny(raw, ["yoga"]),
    karana: getAny(raw, ["karana", "karanam"]),
    sunrise: formatApiTime(getAny(raw, ["sunrise"])),
    sunset: formatApiTime(getAny(raw, ["sunset"]))
  };
}

function resolveWeekdayIndex(value, fallbackIndex) {
  if (!value || value === "-") {
    return fallbackIndex;
  }

  const cleaned = String(value).toLowerCase().replace(/\s+/g, "");

  for (let i = 0; i < englishWeekdays.length; i += 1) {
    if (cleaned.includes(englishWeekdays[i].toLowerCase())) {
      return i;
    }
  }

  const sanskritPattern = [
    "bhanuvasara",
    "induvasara",
    "bhowmavasara",
    "sowmyavasara",
    "brihaspativasara",
    "bhriguvasara",
    "mandavasara"
  ];

  for (let i = 0; i < sanskritPattern.length; i += 1) {
    if (cleaned.includes(sanskritPattern[i])) {
      return i;
    }
  }

  return fallbackIndex;
}

function getAny(source, keys) {
  for (const key of keys) {
    if (source && source[key] !== undefined && source[key] !== null && source[key] !== "") {
      return String(source[key]);
    }
  }
  return "-";
}

function formatApiTime(value) {
  if (!value || value === "-") {
    return "-";
  }
  if (/^\d{1,2}:\d{2}/.test(value)) {
    return value;
  }
  const date = new Date(value);
  if (!Number.isNaN(date.getTime())) {
    return formatTime(date.getHours() + date.getMinutes() / 60);
  }
  return String(value);
}

function calculateFallbackPanchanga(date, latitude, longitude) {
  const moonAge = getMoonAgeDays(date);
  const tithiNumber = Math.min(30, Math.max(1, Math.floor((moonAge / 29.53058867) * 30) + 1));
  const paksha = tithiNumber <= 15 ? "Shukla Paksha" : "Krishna Paksha";
  const tithiName = tithiNames[(tithiNumber - 1) % 15];
  const tithi = (tithiNumber <= 15 ? "Shukla " : "Krishna ") + tithiName;

  const sunLongitude = ((getDayOfYear(date) / 365.2422) * 360) % 360;
  const moonLongitude = (sunLongitude + (moonAge / 29.53058867) * 360) % 360;

  const nakshatra = nakshatras[Math.floor(moonLongitude / (360 / 27)) % 27];
  const yoga = yogas[Math.floor((((sunLongitude + moonLongitude) % 360) / (360 / 27))) % 27];
  const karana = karanas[(Math.floor((tithiNumber - 1) * 2) + 1) % karanas.length];

  const solar = approximateSunriseSunset(date, latitude, longitude);

  return {
    samvatsara: getSamvatsara(date),
    aayana: getAayana(date),
    ritu: getRitu(date),
    maas: getApproxMaas(date),
    paksha,
    tithi,
    vaasaraIndex: date.getDay(),
    nakshatra,
    yoga,
    karana,
    sunrise: solar.sunrise,
    sunset: solar.sunset
  };
}

function renderPanchanga(data) {
  const text = currentText();
  applyWeekdayBackgroundByIndex(data.vaasaraIndex);

  updateField("samvatsara", localizeValue("samvatsara", data.samvatsara));
  updateField("aayana", localizeAayana(data.aayana));
  updateField("ritu", localizeValue("ritu", data.ritu));
  updateField("maas", localizeValue("maas", data.maas));
  updateField("paksha", localizePaksha(data.paksha));
  updateField("tithi", localizeTithi(data.tithi));

  const weekdayName = text.weekdays[data.vaasaraIndex] || text.weekdays[new Date().getDay()];
  updateField("vaasara", weekdayName);

  updateField("nakshatra", localizeValue("nakshatra", data.nakshatra));
  updateField("yoga", localizeValue("yoga", data.yoga));
  updateField("karana", localizeValue("karana", data.karana));
  updateField("sunrise", data.sunrise);
  updateField("sunset", data.sunset);
}

function updateField(fieldName, value) {
  const el = document.getElementById(fieldName);
  if (el) {
    el.textContent = value || "-";
  }
}

function localizeAayana(value) {
  const text = currentText();
  if (!value || value === "-") {
    return "-";
  }
  const normalized = String(value).toLowerCase();
  if (normalized.includes("uttara")) {
    return text.aayana.Uttarayana;
  }
  if (normalized.includes("dakshina")) {
    return text.aayana.Dakshinayana;
  }
  return value;
}

function localizePaksha(value) {
  const text = currentText();
  if (!value || value === "-") {
    return "-";
  }
  const normalized = String(value).toLowerCase();
  if (normalized.includes("shukla")) {
    return text.paksha["Shukla Paksha"];
  }
  if (normalized.includes("krishna")) {
    return text.paksha["Krishna Paksha"];
  }
  return value;
}

function localizeTithi(value) {
  if (!value || value === "-" || currentLanguage === "en") {
    return value || "-";
  }

  const langMap = VALUE_MAPS[currentLanguage];
  if (!langMap || !langMap.tithi) {
    return value;
  }

  const normalized = normalizeValue(value);
  let localizedName = value;
  for (const key in langMap.tithi) {
    if (normalized.includes(key)) {
      localizedName = langMap.tithi[key];
      break;
    }
  }

  const pakshaMap = langMap.paksha || {};
  if (normalized.includes("shukla")) {
    return (pakshaMap.shukla || "Shukla") + " " + localizedName;
  }
  if (normalized.includes("krishna")) {
    return (pakshaMap.krishna || "Krishna") + " " + localizedName;
  }
  return localizedName;
}

function localizeValue(category, value) {
  if (!value || value === "-" || currentLanguage === "en") {
    return value || "-";
  }

  const langMap = VALUE_MAPS[currentLanguage];
  if (!langMap || !langMap[category]) {
    return value;
  }

  const categoryMap = langMap[category];
  const normalized = normalizeValue(value);

  if (categoryMap[normalized]) {
    return categoryMap[normalized];
  }

  for (const key in categoryMap) {
    if (normalized.includes(key)) {
      return categoryMap[key];
    }
  }

  return value;
}

function normalizeValue(value) {
  return String(value).toLowerCase().replace(/[^a-z]/g, "");
}

function getMoonAgeDays(date) {
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14, 0);
  const diffDays = (date.getTime() - knownNewMoon) / 86400000;
  const synodicMonth = 29.53058867;
  let age = diffDays % synodicMonth;
  if (age < 0) {
    age += synodicMonth;
  }
  return age;
}

function getSamvatsara(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const samvatsaraYear = month < 3 || (month === 3 && day < 21) ? year - 1 : year;
  const index = ((samvatsaraYear - 1987) % 60 + 60) % 60;
  return samvatsaraCycle[index];
}

function getAayana(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const value = month * 100 + day;
  if (value >= 114 && value < 716) {
    return "Uttarayana";
  }
  return "Dakshinayana";
}

function getRitu(date) {
  const month = date.getMonth() + 1;
  if (month === 3 || month === 4) return "Vasanta";
  if (month === 5 || month === 6) return "Grishma";
  if (month === 7 || month === 8) return "Varsha";
  if (month === 9 || month === 10) return "Sharad";
  if (month === 11 || month === 12) return "Hemanta";
  return "Shishira";
}

function getApproxMaas(date) {
  const month = date.getMonth() + 1;
  const maasByMonth = {
    1: "Magha",
    2: "Phalguna",
    3: "Chaitra",
    4: "Vaishakha",
    5: "Jyeshtha",
    6: "Ashadha",
    7: "Shravana",
    8: "Bhadrapada",
    9: "Ashwin",
    10: "Kartika",
    11: "Margashirsha",
    12: "Pausha"
  };
  return maasByMonth[month] || "-";
}

function approximateSunriseSunset(date, latitude, longitude) {
  const day = getDayOfYear(date);
  const latRad = (latitude * Math.PI) / 180;

  const declination = ((-23.44 * Math.PI) / 180) * Math.cos((2 * Math.PI * (day + 10)) / 365);
  const cosH = -Math.tan(latRad) * Math.tan(declination);

  let dayLengthHours;
  if (cosH <= -1) {
    dayLengthHours = 24;
  } else if (cosH >= 1) {
    dayLengthHours = 0;
  } else {
    const hourAngle = Math.acos(cosH);
    dayLengthHours = (24 * hourAngle) / Math.PI;
  }

  const timezoneOffsetHours = -new Date().getTimezoneOffset() / 60;
  const localSolarNoon = 12 + timezoneOffsetHours - longitude / 15;
  const sunriseHour = localSolarNoon - dayLengthHours / 2;
  const sunsetHour = localSolarNoon + dayLengthHours / 2;

  return {
    sunrise: formatTime(sunriseHour),
    sunset: formatTime(sunsetHour)
  };
}

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  return Math.floor(diff / 86400000);
}

function formatTime(decimalHour) {
  let adjusted = decimalHour;
  while (adjusted < 0) adjusted += 24;
  while (adjusted >= 24) adjusted -= 24;

  const hour = Math.floor(adjusted);
  const minute = Math.round((adjusted - hour) * 60);
  const normalizedHour = minute === 60 ? (hour + 1) % 24 : hour;
  const normalizedMinute = minute === 60 ? 0 : minute;

  return String(normalizedHour).padStart(2, "0") + ":" + String(normalizedMinute).padStart(2, "0");
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function parseDateFromInput() {
  if (!dateInput.value) {
    return null;
  }
  const [year, month, day] = dateInput.value.split("-").map(Number);
  if (!year || !month || !day) {
    return null;
  }
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function setAllFields(value) {
  for (const field of FIELDS) {
    const el = document.getElementById(field);
    if (el) {
      el.textContent = value;
    }
  }
}

function currentText() {
  return LANGUAGE_DATA[currentLanguage] || LANGUAGE_DATA.en;
}

function renderSourceInfo() {
  const text = currentText();
  sourceInfo.textContent = text[sourceStatusKey] || text.waiting;
}

function renderLocationInfo() {
  const text = currentText();

  if (locationStatus === "detecting") {
    locationInfo.textContent = text.detectingLocation || LANGUAGE_DATA.en.detectingLocation;
    return;
  }

  if (locationStatus === "detected" && locationCoordinates) {
    locationInfo.textContent =
      text.geoDetected + " " + locationCoordinates.latitude + ", " + locationCoordinates.longitude;
    return;
  }

  if (locationStatus === "denied") {
    locationInfo.textContent = text.geoDenied;
    return;
  }

  locationInfo.textContent = text.geoUnavailable;
}
