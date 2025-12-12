const employees = [
    {
        "First Name": "LUDOVICK FILBERT",
        "Last Name": "NAMBUNGA",
        "Employee ID": 1119,
        "Department": "WORKSHOP",
        "Phone": 656417165,
        "Position": "WORKSHOP SUPERVISOR",
        "Position WORD": "WORKSHOP SUPERVISOR"
    },
    {
        "First Name": "LELA ROBERT",
        "Last Name": "TENGO",
        "Employee ID": 92,
        "Department": "WORKSHOP",
        "Phone": 755755008,
        "Position": "DATA CLECK",
        "Position WORD": "DATA CLECK"
    },
    {
        "First Name": "SHABAN IBRAHIM",
        "Last Name": "KILYAMAWE",
        "Employee ID": 1180,
        "Department": "WORKSHOP",
        "Phone": 677128522,
        "Position": "SR MECHANIC",
        "Position WORD": "SR MECHANIC"
    },
    {
        "First Name": "INNOCENT GODFREY",
        "Last Name": "GODFREY",
        "Employee ID": 1120,
        "Department": "WORKSHOP",
        "Phone": 714993640,
        "Position": "AUTO-ELECTRCIAN",
        "Position WORD": "AUTO-ELECTRCIAN"
    },
    {
        "First Name": "CHARLES",
        "Last Name": "SAMWEL",
        "Employee ID": 973,
        "Department": "WORKSHOP",
        "Phone": 719515219,
        "Position": "DRIVER(LMV 3)",
        "Position WORD": "DRIVER(LMV 3)"
    },
    {
        "First Name": "MUSA",
        "Last Name": "MASANJA",
        "Employee ID": 195,
        "Department": "WORKSHOP",
        "Phone": 677415387,
        "Position": "ASST MC TRACTOR",
        "Position WORD": "ASST MC TRACTOR"
    },
    {
        "First Name": "HAPSON",
        "Last Name": "HENRY",
        "Employee ID": 1217,
        "Department": "WORKSHOP",
        "Phone": 759183169,
        "Position": "SR MECHANIC",
        "Position WORD": "SR MECHANIC"
    },
    {
        "First Name": "FADHILI",
        "Last Name": "SADOCK",
        "Employee ID": 1111,
        "Department": "WORKSHOP",
        "Phone": 699518611,
        "Position": "MC/HELPER",
        "Position WORD": "MC/HELPER"
    },
    {
        "First Name": "RASHID PANKI",
        "Last Name": "BUKURU",
        "Employee ID": 234,
        "Department": "WORKSHOP",
        "Phone": 745770291,
        "Position": "MECHANICS HELPER",
        "Position WORD": "MECHANICS HELPER"
    },
    {
        "First Name": "KARIM",
        "Last Name": "RAMADHANI",
        "Employee ID": 239,
        "Department": "WORKSHOP",
        "Phone": 693219773,
        "Position": "MECHANICS HELPER",
        "Position WORD": "MECHANICS HELPER"
    },
    {
        "First Name": "MICHAEL",
        "Last Name": "ALEX",
        "Employee ID": 236,
        "Department": "WORKSHOP",
        "Phone": 755656641,
        "Position": "TRYEMAN HELPER",
        "Position WORD": "TRYEMAN HELPER"
    },
    {
        "First Name": "JOHANES CHARLES",
        "Last Name": "CHARLES",
        "Employee ID": 246,
        "Department": "WORKSHOP",
        "Phone": 74669112,
        "Position": "WELDER",
        "Position WORD": "WELDER"
    },
    {
        "First Name": "JUMA RAMADHANI",
        "Last Name": "RAMADHANI",
        "Employee ID": 126,
        "Department": "WORKSHOP",
        "Phone": 765978312,
        "Position": "DRIVER",
        "Position WORD": "DRIVER"
    },
    {
        "First Name": "MOHAMED",
        "Last Name": "KLIKETI",
        "Employee ID": 94,
        "Department": "WORKSHOP",
        "Phone": 655297396,
        "Position": "DRIVER",
        "Position WORD": "DRIVER"
    },
    {
        "First Name": "ELINDA MUTTA",
        "Last Name": "MUTTA",
        "Employee ID": 3314,
        "Department": "WORKSHOP",
        "Phone": 618204994,
        "Position": "DATA CLERK",
        "Position WORD": "DATA CLERK"
    },
    {
        "First Name": "ALEXANDER NKURUSHI",
        "Last Name": "MAHANGA",
        "Employee ID": 4074,
        "Department": "WORKSHOP",
        "Phone": 750621618,
        "Position": "MECHANICS",
        "Position WORD": "MECHANICS"
    },
    {
        "First Name": "ALIKADI ROBERT",
        "Last Name": "RIFA",
        "Employee ID": 4205,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "MECHANICS",
        "Position WORD": "MECHANICS"
    },
    {
        "First Name": "ANDREW SAFARI",
        "Last Name": "MSTAPHER",
        "Employee ID": 3311,
        "Department": "WORKSHOP",
        "Phone": 794786557,
        "Position": "WELDER",
        "Position WORD": "WELDER"
    },
    {
        "First Name": "ANICETH JOACHIM",
        "Last Name": "KAPILI",
        "Employee ID": 2851,
        "Department": "WORKSHOP",
        "Phone": 756661024,
        "Position": "MECHANICS HELPER",
        "Position WORD": "MECHANICS HELPER"
    },
    {
        "First Name": "ATHUMANI ALLY",
        "Last Name": "NYANGWA",
        "Employee ID": 2991,
        "Department": "WORKSHOP",
        "Phone": 762487090,
        "Position": "AUTO-ELECTRICIAN",
        "Position WORD": "AUTO-ELECTRICIAN"
    },
    {
        "First Name": "BABUU FRANCIS",
        "Last Name": "CHAPUGA",
        "Employee ID": 3312,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "MECHANICS",
        "Position WORD": "MECHANICS"
    },
    {
        "First Name": "BRUNO YUSUPH",
        "Last Name": "BUKURU",
        "Employee ID": 3078,
        "Department": "WORKSHOP",
        "Phone": 612908275,
        "Position": "GREASEMAN",
        "Position WORD": "GREASEMAN"
    },
    {
        "First Name": "CUTHBERTH WALLEC",
        "Last Name": "KIMARO",
        "Employee ID": 2993,
        "Department": "WORKSHOP",
        "Phone": 754603161,
        "Position": "MECHANIC HELPER",
        "Position WORD": "MECHANIC HELPER"
    },
    {
        "First Name": "DAVID SAMWEL",
        "Last Name": "MWANGU",
        "Employee ID": 2850,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "TOOL ROOM",
        "Position WORD": "TOOL ROOM"
    },
    {
        "First Name": "DEUS LAURENT",
        "Last Name": "BUNGWA",
        "Employee ID": 4068,
        "Department": "WORKSHOP",
        "Phone": 653271717,
        "Position": "WELDER",
        "Position WORD": "WELDER"
    },
    {
        "First Name": "EDWIN ELIAS",
        "Last Name": "NEKE",
        "Employee ID": 3050,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "DRIVER",
        "Position WORD": "DRIVER"
    },
    {
        "First Name": "ELIA YONA",
        "Last Name": "SATU",
        "Employee ID": 4207,
        "Department": "WORKSHOP",
        "Phone": 694190613,
        "Position": "MECHANIC",
        "Position WORD": "MECHANIC"
    },
    {
        "First Name": "EMILI MBUTA MBUTA",
        "Last Name": "BUKULU",
        "Employee ID": 2975,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "MECHANIC HELPER",
        "Position WORD": "MECHANIC HELPER"
    },
    {
        "First Name": "EMMANUEL MWANAKUNDI",
        "Last Name": "BALIZA",
        "Employee ID": 2187,
        "Department": "WORKSHOP",
        "Phone": 699324746,
        "Position": "MECHANICS",
        "Position WORD": "MECHANICS"
    },
    {
        "First Name": "ERICK PATRICK",
        "Last Name": "MAKAKA",
        "Employee ID": 3866,
        "Department": "WORKSHOP",
        "Phone": 686546137,
        "Position": "MECHANIC TECHNICIAN",
        "Position WORD": "MECHANIC TECHNICIAN"
    },
    {
        "First Name": "EVONESS SIMON",
        "Last Name": "MATAYO",
        "Employee ID": 3158,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "DATA CLERK",
        "Position WORD": "DATA CLERK"
    },
    {
        "First Name": "FELICIAN MACHIBYA",
        "Last Name": "JOSEPH",
        "Employee ID": 3020,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "ELECTRICIAN",
        "Position WORD": "ELECTRICIAN"
    },
    {
        "First Name": "FILEMON ABEL",
        "Last Name": "FILIMON",
        "Employee ID": 3887,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "FUWADI MOHAMED",
        "Last Name": "KONDO",
        "Employee ID": 3473,
        "Department": "WORKSHOP",
        "Phone": 755136445,
        "Position": "MECHANIC ASSISTANT",
        "Position WORD": "MECHANIC ASSISTANT"
    },
    {
        "First Name": "GEORGE MWESINGWA",
        "Last Name": "BASHANGE",
        "Employee ID": 3334,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "WORKSHOP NIGHT SUPERVISOR",
        "Position WORD": "WORKSHOP NIGHT SUPERVISOR"
    },
    {
        "First Name": "GOODNESS RENATUS",
        "Last Name": "RENATUS",
        "Employee ID": 2563,
        "Department": "WORKSHOP",
        "Phone": 685703119,
        "Position": "ENVIROMENT CLEANER",
        "Position WORD": "ENVIROMENT CLEANER"
    },
    {
        "First Name": "HASSAN RAMADHAN",
        "Last Name": "HASSAN",
        "Employee ID": 1410,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "TYREMAN",
        "Position WORD": "TYREMAN"
    },
    {
        "First Name": "HERMAN NASHON",
        "Last Name": "NASHON",
        "Employee ID": 2621,
        "Department": "WORKSHOP",
        "Phone": 621542715,
        "Position": "LMV DRIVER",
        "Position WORD": "LMV DRIVER"
    },
    {
        "First Name": "IBRAHIM SAGU",
        "Last Name": "NKALANGO",
        "Employee ID": 4067,
        "Department": "WORKSHOP",
        "Phone": 624210328,
        "Position": "ASSISTANT MECHANIC",
        "Position WORD": "ASSISTANT MECHANIC"
    },
    {
        "First Name": "IMANI CHUBWA",
        "Last Name": "STEPHANO",
        "Employee ID": 1325,
        "Department": "WORKSHOP",
        "Phone": 614408336,
        "Position": "WELDER HELPER",
        "Position WORD": "WELDER HELPER"
    },
    {
        "First Name": "ISMAIL SADICK",
        "Last Name": "MAULID",
        "Employee ID": 4208,
        "Department": "WORKSHOP",
        "Phone": 672546618,
        "Position": "MECHANIC LMV",
        "Position WORD": "MECHANIC LMV"
    },
    {
        "First Name": "ISMAIL SALUM",
        "Last Name": "MKWAMA",
        "Employee ID": 3346,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "ASSISTANY MECHANIC",
        "Position WORD": "ASSISTANY MECHANIC"
    },
    {
        "First Name": "JACKSON CHUBWA",
        "Last Name": "KABUGA",
        "Employee ID": 1129,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "MTR OPARATOR",
        "Position WORD": "MTR OPARATOR"
    },
    {
        "First Name": "JANUARY RUVUNANGU",
        "Last Name": "MUDUGO",
        "Employee ID": 3057,
        "Department": "WORKSHOP",
        "Phone": 76406624,
        "Position": "DRIVER",
        "Position WORD": "DRIVER"
    },
    {
        "First Name": "JEREMIA JOEL",
        "Last Name": "RUBASHA",
        "Employee ID": 2988,
        "Department": "WORKSHOP",
        "Phone": 688742720,
        "Position": "MECHANIC HELPER",
        "Position WORD": "MECHANIC HELPER"
    },
    {
        "First Name": "JOHN LUCAS",
        "Last Name": "MAGANGA",
        "Employee ID": 2947,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "MECHANICS",
        "Position WORD": "MECHANICS"
    },
    {
        "First Name": "JOSEPH JOSEPH",
        "Last Name": "MLAWA",
        "Employee ID": 2221,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "WORKSHOP HELPER",
        "Position WORD": "WORKSHOP HELPER"
    },
    {
        "First Name": "JOSEPHMAKULA",
        "Last Name": "LUPEMBA",
        "Employee ID": 3059,
        "Department": "WORKSHOP",
        "Phone": 763457081,
        "Position": "DRIVER",
        "Position WORD": "DRIVER"
    },
    {
        "First Name": "JOYCE ESROM",
        "Last Name": "HELMAN",
        "Employee ID": 2948,
        "Department": "WORKSHOP",
        "Phone": 625690487,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "JUHUDI JALI",
        "Last Name": "NYANZILA",
        "Employee ID": 4203,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "TRYEMAN HELPER",
        "Position WORD": "TRYEMAN HELPER"
    },
    {
        "First Name": "JUSTUS PATRICK",
        "Last Name": "NTIBINONA",
        "Employee ID": 3344,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "LMV DRIVER",
        "Position WORD": "LMV DRIVER"
    },
    {
        "First Name": "KASSIM AHMADI",
        "Last Name": "NGENGEZA",
        "Employee ID": 3048,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "MECHANICS",
        "Position WORD": "MECHANICS"
    },
    {
        "First Name": "KIMASA SAMBU",
        "Last Name": "KIMASA",
        "Employee ID": 3107,
        "Department": "WORKSHOP",
        "Phone": 794526992,
        "Position": "TYREMAN",
        "Position WORD": "TYREMAN"
    },
    {
        "First Name": "LEONARD SOLLY",
        "Last Name": "PHILIPO",
        "Employee ID": 2889,
        "Department": "WORKSHOP",
        "Phone": 792604411,
        "Position": "MECHANIC HELPER",
        "Position WORD": "MECHANIC HELPER"
    },
    {
        "First Name": "MALITINI PATRICK",
        "Last Name": "LUVAKUBUSA",
        "Employee ID": 4066,
        "Department": "WORKSHOP",
        "Phone": 618944939,
        "Position": "WELDER HELPER",
        "Position WORD": "WELDER HELPER"
    },
    {
        "First Name": "MANDUS BAHATI",
        "Last Name": "NTAMOBWA",
        "Employee ID": 3480,
        "Department": "WORKSHOP",
        "Phone": 628523594,
        "Position": "ELDER",
        "Position WORD": "ELDER"
    },
    {
        "First Name": "MASUDI HARUNA",
        "Last Name": "NTAMOBWA",
        "Employee ID": 2875,
        "Department": "WORKSHOP",
        "Phone": 758225662,
        "Position": "TYREMAN",
        "Position WORD": "TYREMAN"
    },
    {
        "First Name": "MARSEL",
        "Last Name": "ANDREA",
        "Employee ID": 4230,
        "Department": "WORKSHOP",
        "Phone": 746755613,
        "Position": "MECHANICS",
        "Position WORD": "MECHANICS"
    },
    {
        "First Name": "MIRAJI JUMA",
        "Last Name": "RAJABU",
        "Employee ID": 4204,
        "Department": "WORKSHOP",
        "Phone": 621208722,
        "Position": "AUTO ELECTRICIAN",
        "Position WORD": "AUTO ELECTRICIAN"
    },
    {
        "First Name": "MWITA NYABANZE",
        "Last Name": "CHOKERA",
        "Employee ID": 3487,
        "Department": "WORKSHOP",
        "Phone": 749250644,
        "Position": "CAR WASH",
        "Position WORD": "CAR WASH"
    },
    {
        "First Name": "NASHON SUGUTA",
        "Last Name": "MAREKERO",
        "Employee ID": 3744,
        "Department": "WORKSHOP",
        "Phone": 783866375,
        "Position": "SENIOR WELDER",
        "Position WORD": "SENIOR WELDER"
    },
    {
        "First Name": "NEEMA JAMES",
        "Last Name": "MAHUGITA",
        "Employee ID": 2961,
        "Department": "WORKSHOP",
        "Phone": 689536358,
        "Position": "TOOL ROOM",
        "Position WORD": "TOOL ROOM"
    },
    {
        "First Name": "NICHOLAUS MARCO",
        "Last Name": "CHARLES",
        "Employee ID": 2992,
        "Department": "WORKSHOP",
        "Phone": 750880331,
        "Position": "MECHANIC HELPER",
        "Position WORD": "MECHANIC HELPER"
    },
    {
        "First Name": "NICODEMUS DIYAMAY",
        "Last Name": "SARWAT",
        "Employee ID": 2893,
        "Department": "WORKSHOP",
        "Phone": 7424499181,
        "Position": "MECHANIC HELPER",
        "Position WORD": "MECHANIC HELPER"
    },
    {
        "First Name": "PHILBERT ALEX",
        "Last Name": "BUJIJI",
        "Employee ID": 3164,
        "Department": "WORKSHOP",
        "Phone": 769097445,
        "Position": "GREASE MAN",
        "Position WORD": "GREASE MAN"
    },
    {
        "First Name": "RAMADHAN HAMADI",
        "Last Name": "HAULE",
        "Employee ID": 1483,
        "Department": "WORKSHOP",
        "Phone": 611496396,
        "Position": "MOTOR BIKE TECHNICIAN",
        "Position WORD": "MOTOR BIKE TECHNICIAN"
    },
    {
        "First Name": "ROBERT CHARLES",
        "Last Name": "CHARLES",
        "Employee ID": 2559,
        "Department": "WORKSHOP",
        "Phone": 754293224,
        "Position": "AUTO ELECTRICIAN HELPER",
        "Position WORD": "AUTO ELECTRICIAN HELPER"
    },
    {
        "First Name": "ROBERT THOBIAS",
        "Last Name": "FAIDA",
        "Employee ID": 972,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "LMV DRIVER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAMSON LUCIAN",
        "Last Name": "MKUDE",
        "Employee ID": 3049,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "HOWO DRIVER",
        "Position WORD": NaN
    },
    {
        "First Name": "BARAKA NASANI",
        "Last Name": "MRAGANE",
        "Employee ID": 4,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "LMV DRIVER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAGANA SAMWEL",
        "Last Name": "MWIGICHO",
        "Employee ID": 3626,
        "Department": "WORKSHOP",
        "Phone": NaN,
        "Position": "MECHANIC ASSISTANT",
        "Position WORD": "MECHANIC ASSISTANT"
    },
    {
        "First Name": "AHMED ",
        "Last Name": "SHABANI",
        "Employee ID": 1306,
        "Department": "SHEQ",
        "Phone": 765078794,
        "Position": "SHEQ MANAGER",
        "Position WORD": "SHEQ MANAGER"
    },
    {
        "First Name": "GRACE ",
        "Last Name": "HYERA",
        "Employee ID": 2746,
        "Department": "SHEQ",
        "Phone": 747279644,
        "Position": "HSE OFFICER",
        "Position WORD": "HSE OFFICER"
    },
    {
        "First Name": "FARAJA WILLY",
        "Last Name": "LUVANDA",
        "Employee ID": 2181,
        "Department": "SHEQ",
        "Phone": 717081245,
        "Position": "SAFETY OFFICER",
        "Position WORD": "SAFETY OFFICER"
    },
    {
        "First Name": "AYUBU ",
        "Last Name": "MISIGARO",
        "Employee ID": 2909,
        "Department": "SHEQ",
        "Phone": 627890735,
        "Position": "SAFETY SUPERVISOR",
        "Position WORD": "SAFETY SUPERVISOR"
    },
    {
        "First Name": "INNOCENT",
        "Last Name": " SINDOKILA",
        "Employee ID": 2028,
        "Department": "SHEQ",
        "Phone": 657052823,
        "Position": "SAFETY OFFICER",
        "Position WORD": "SAFETY OFFICER"
    },
    {
        "First Name": "ELIDA",
        "Last Name": " PETER",
        "Employee ID": 56,
        "Department": "SHEQ",
        "Phone": 765571225,
        "Position": "ENV SUPERVISOR",
        "Position WORD": "ENV SUPERVISOR"
    },
    {
        "First Name": "LINETH ",
        "Last Name": "OWINO",
        "Employee ID": 2910,
        "Department": "SHEQ",
        "Phone": 766318566,
        "Position": "SAFETY OFFICER",
        "Position WORD": "SAFETY OFFICER"
    },
    {
        "First Name": "ISRACK ",
        "Last Name": "ISRAEL",
        "Employee ID": 1078,
        "Department": "SHEQ",
        "Phone": 749480220,
        "Position": "DOCTOR",
        "Position WORD": "DOCTOR"
    },
    {
        "First Name": "JANETH ",
        "Last Name": "KIMILA",
        "Employee ID": 2797,
        "Department": "SHEQ",
        "Phone": "762 088 790",
        "Position": "DOCTOR",
        "Position WORD": "DOCTOR"
    },
    {
        "First Name": "CESILIA ",
        "Last Name": "NJOVU",
        "Employee ID": 53,
        "Department": "SHEQ",
        "Phone": 764314348,
        "Position": "DOCTOR",
        "Position WORD": "DOCTOR"
    },
    {
        "First Name": "HILDA ",
        "Last Name": "KAJOLO",
        "Employee ID": 1206,
        "Department": "SHEQ",
        "Phone": 622054693,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "RICHARD",
        "Last Name": " LEONARD",
        "Employee ID": 211,
        "Department": "SHEQ",
        "Phone": 794918842,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "MWAMVUA ",
        "Last Name": "MRISHO ",
        "Employee ID": 204,
        "Department": "SHEQ",
        "Phone": 747156686,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "GILIAN ",
        "Last Name": "DANFORD",
        "Employee ID": 212,
        "Department": "SHEQ",
        "Phone": 765874886,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "LEA ",
        "Last Name": "KAVANO",
        "Employee ID": 208,
        "Department": "SHEQ",
        "Phone": 747262521,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "DIANA ",
        "Last Name": "JAMES",
        "Employee ID": 175,
        "Department": "SHEQ",
        "Phone": 621449394,
        "Position": "CLEANEER",
        "Position WORD": "CLEANEER"
    },
    {
        "First Name": "SIFA  ",
        "Last Name": "DANFORD",
        "Employee ID": 217,
        "Department": "SHEQ",
        "Phone": 624107329,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "ADAM  ",
        "Last Name": "MANENO",
        "Employee ID": 2952,
        "Department": "SHEQ",
        "Phone": 752809652,
        "Position": "HSE",
        "Position WORD": "HSE"
    },
    {
        "First Name": "ABEL ",
        "Last Name": "DASTAN",
        "Employee ID": 2871,
        "Department": "SHEQ",
        "Phone": 766376563,
        "Position": "LABOUR CAMP SUPERVISOR ",
        "Position WORD": "LABOUR CAMP SUPERVISOR "
    },
    {
        "First Name": "ADELINA ",
        "Last Name": "KYARUZI ",
        "Employee ID": 1561,
        "Department": "SHEQ",
        "Phone": 613311791,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "AGNES ",
        "Last Name": "GELARD",
        "Employee ID": 2177,
        "Department": "SHEQ",
        "Phone": 757366092,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "AGNES ",
        "Last Name": "SIX",
        "Employee ID": 2816,
        "Department": "SHEQ",
        "Phone": 740972256,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "AMIDA ",
        "Last Name": "HAMIS",
        "Employee ID": 1407,
        "Department": "SHEQ",
        "Phone": 749361037,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "ASIFIWE ",
        "Last Name": "RAULENCE ",
        "Employee ID": 3250,
        "Department": "SHEQ",
        "Phone": 743119538,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "BEATHA ",
        "Last Name": "ALAM ",
        "Employee ID": 3118,
        "Department": "SHEQ",
        "Phone": NaN,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "CHAUSIKU ",
        "Last Name": "PAUL ",
        "Employee ID": 2940,
        "Department": "SHEQ",
        "Phone": 757944984,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "DANFORD ",
        "Last Name": "SETH",
        "Employee ID": 1089,
        "Department": "SHEQ",
        "Phone": 769613340,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "ELIADA ",
        "Last Name": "SAMSON ",
        "Employee ID": 3253,
        "Department": "SHEQ",
        "Phone": NaN,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "ELOI ",
        "Last Name": "COSMAS ",
        "Employee ID": 2895,
        "Department": "SHEQ",
        "Phone": NaN,
        "Position": "PAINTER",
        "Position WORD": "PAINTER"
    },
    {
        "First Name": "EUNICE",
        "Last Name": " JOHN",
        "Employee ID": 1315,
        "Department": "SHEQ",
        "Phone": 614262221,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "FELISTA",
        "Last Name": " ELIAS ",
        "Employee ID": 1551,
        "Department": "SHEQ",
        "Phone": 629719404,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "GEOFREY",
        "Last Name": " MGALONDAGA",
        "Employee ID": 3329,
        "Department": "SHEQ",
        "Phone": 769780392,
        "Position": "CHEF",
        "Position WORD": "CHEF"
    },
    {
        "First Name": "JANETH ",
        "Last Name": "JOSEPH ",
        "Employee ID": 2844,
        "Department": "SHEQ",
        "Phone": 629899261,
        "Position": "NURSE",
        "Position WORD": "NURSE"
    },
    {
        "First Name": "JANSON",
        "Last Name": " JACOB ",
        "Employee ID": 1289,
        "Department": "SHEQ",
        "Phone": 747056117,
        "Position": "DATA CLERK ",
        "Position WORD": "DATA CLERK "
    },
    {
        "First Name": "JOINA ",
        "Last Name": " SAMSON",
        "Employee ID": 860,
        "Department": "SHEQ",
        "Phone": 748274140,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "KELVIN  ",
        "Last Name": "AMON",
        "Employee ID": 3214,
        "Department": "SHEQ",
        "Phone": "0747207 088",
        "Position": "HSE",
        "Position WORD": "HSE"
    },
    {
        "First Name": "LESA ",
        "Last Name": "CHARLES ",
        "Employee ID": 210,
        "Department": "SHEQ",
        "Phone": 763218398,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "LETISIA ",
        "Last Name": " STEWARD",
        "Employee ID": 3204,
        "Department": "SHEQ",
        "Phone": 757801756,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "MAISHA",
        "Last Name": " REVOCATUS",
        "Employee ID": 3106,
        "Department": "SHEQ",
        "Phone": 740598711,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "MAJALIWA ",
        "Last Name": "BARAKA",
        "Employee ID": 3170,
        "Department": "SHEQ",
        "Phone": 614294182,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "MARTHA ",
        "Last Name": "MPALANZI",
        "Employee ID": 3007,
        "Department": "SHEQ",
        "Phone": 747843406,
        "Position": "DOCTOR",
        "Position WORD": "DOCTOR"
    },
    {
        "First Name": "MERISA ",
        "Last Name": "GERSHON",
        "Employee ID": 2984,
        "Department": "SHEQ",
        "Phone": 789827418,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "MONICA ",
        "Last Name": "DANIEL",
        "Employee ID": 180,
        "Department": "SHEQ",
        "Phone": 749641228,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "PEACE ",
        "Last Name": "SHEM ",
        "Employee ID": 3251,
        "Department": "SHEQ",
        "Phone": 746398119,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "REBEKA ",
        "Last Name": "JOHN",
        "Employee ID": 3252,
        "Department": "SHEQ",
        "Phone": 742713528,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "RESTUTA ",
        "Last Name": " LIBERATUS",
        "Employee ID": 2945,
        "Department": "SHEQ",
        "Phone": 775918030,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "ROSEMARY ",
        "Last Name": "NDEGEKE",
        "Employee ID": 3135,
        "Department": "SHEQ",
        "Phone": 752572668,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "SECILIA ",
        "Last Name": " BENARD",
        "Employee ID": 2976,
        "Department": "SHEQ",
        "Phone": 755866889,
        "Position": "HSE",
        "Position WORD": "HSE"
    },
    {
        "First Name": "TOMAS ",
        "Last Name": "TATIZO",
        "Employee ID": 3036,
        "Department": "SHEQ",
        "Phone": NaN,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "VANESA ",
        "Last Name": "SILVIUS",
        "Employee ID": 2859,
        "Department": "SHEQ",
        "Phone": 629893118,
        "Position": "CLEANER ",
        "Position WORD": "CLEANER "
    },
    {
        "First Name": "THOMAS",
        "Last Name": " JONATHAN",
        "Employee ID": 4690,
        "Department": "SHEQ",
        "Phone": 628028296,
        "Position": "SAFETY ENGINEER",
        "Position WORD": "SAFETY ENGINEER"
    },
    {
        "First Name": "REMINA ",
        "Last Name": "JUMA",
        "Employee ID": 4972,
        "Department": "SHEQ",
        "Phone": NaN,
        "Position": "CLEANER",
        "Position WORD": "CLEANER"
    },
    {
        "First Name": "RINASHE ",
        "Last Name": "MUZAMBI",
        "Employee ID": 2204,
        "Department": "IRRIGATION",
        "Phone": 7762073506,
        "Position": "IRRIGATION MANAGER",
        "Position WORD": "IRRIGATION MANAGER"
    },
    {
        "First Name": "ELIUD ",
        "Last Name": "MPAHAJE",
        "Employee ID": 3208,
        "Department": "IRRIGATION",
        "Phone": "O654297997",
        "Position": "DATA CLERK",
        "Position WORD": "DATA CLERK"
    },
    {
        "First Name": "YVONE ",
        "Last Name": "KOKA",
        "Employee ID": 266,
        "Department": "IRRIGATION",
        "Phone": 748304700,
        "Position": "MACHINERY SUPERVISOR",
        "Position WORD": "MACHINERY SUPERVISOR"
    },
    {
        "First Name": "JIPSON ",
        "Last Name": "WILFRED",
        "Employee ID": 3712,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "STONE PICKER",
        "Position WORD": "STONE PICKER"
    },
    {
        "First Name": "GOODDAFSON ",
        "Last Name": "YAVAN",
        "Employee ID": 3828,
        "Department": "IRRIGATION",
        "Phone": 795927767,
        "Position": "STONE PICKER",
        "Position WORD": "STONE PICKER"
    },
    {
        "First Name": "ZUWENA",
        "Last Name": "MAJULA",
        "Employee ID": 3635,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "STONE PICKER",
        "Position WORD": "STONE PICKER"
    },
    {
        "First Name": "JULIUS ",
        "Last Name": "MLAZI",
        "Employee ID": 1145,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "MACHINERY  CHECKER",
        "Position WORD": "MACHINERY  CHECKER"
    },
    {
        "First Name": "GASPER ",
        "Last Name": "JACOB",
        "Employee ID": 1229,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "MACHINERY SUPERVISOR",
        "Position WORD": "MACHINERY SUPERVISOR"
    },
    {
        "First Name": "RAMADHAN ",
        "Last Name": "JUMANNE",
        "Employee ID": 3119,
        "Department": "IRRIGATION",
        "Phone": 744322742,
        "Position": "MACHINE CHECKER",
        "Position WORD": "MACHINE CHECKER"
    },
    {
        "First Name": "BALICHAKO",
        "Last Name": "JUSTIN",
        "Employee ID": 3633,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "MACHINE CHECKER",
        "Position WORD": "MACHINE CHECKER"
    },
    {
        "First Name": "ESSAU",
        "Last Name": "ADREA",
        "Employee ID": 3636,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "MACHINE CHECKER",
        "Position WORD": "MACHINE CHECKER"
    },
    {
        "First Name": "AJUAYE ",
        "Last Name": "YOTAM",
        "Employee ID": 3711,
        "Department": "IRRIGATION",
        "Phone": 769040939,
        "Position": "MACHINE CHECKER",
        "Position WORD": "MACHINE CHECKER"
    },
    {
        "First Name": "JOVET",
        "Last Name": "AMON",
        "Employee ID": 1499,
        "Department": "IRRIGATION",
        "Phone": 626643964,
        "Position": "PUMP ATTENDANT",
        "Position WORD": "PUMP ATTENDANT"
    },
    {
        "First Name": "MASOUD",
        "Last Name": "BUNDALA",
        "Employee ID": 2228,
        "Department": "IRRIGATION",
        "Phone": 766773016,
        "Position": "PUMP ATTENDANT",
        "Position WORD": "PUMP ATTENDANT"
    },
    {
        "First Name": "ZACHARIA ",
        "Last Name": "CHARLES",
        "Employee ID": 3336,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "OPERATOR",
        "Position WORD": "OPERATOR"
    },
    {
        "First Name": "RAJABU ",
        "Last Name": "AYUBU",
        "Employee ID": 3673,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "STONE PICKER",
        "Position WORD": "STONE PICKER"
    },
    {
        "First Name": "SAMWEL",
        "Last Name": "DAUDI",
        "Employee ID": 3379,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "STONE PICKER",
        "Position WORD": "STONE PICKER"
    },
    {
        "First Name": "SARAH",
        "Last Name": "MBOGO",
        "Employee ID": 3349,
        "Department": "IRRIGATION",
        "Phone": 628334689,
        "Position": "TRIP CHECKING",
        "Position WORD": "TRIP CHECKING"
    },
    {
        "First Name": "PAMBANIO",
        "Last Name": "BITIBIYE",
        "Employee ID": 3011,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "STONE PICKER",
        "Position WORD": "STONE PICKER"
    },
    {
        "First Name": "TOBIAS",
        "Last Name": "WILLIUM",
        "Employee ID": 178,
        "Department": "IRRIGATION",
        "Phone": 67916456,
        "Position": "PUMP ATTENDANT",
        "Position WORD": "PUMP ATTENDANT"
    },
    {
        "First Name": "ISACK ",
        "Last Name": "TANU",
        "Employee ID": 3157,
        "Department": "IRRIGATION",
        "Phone": 750241991,
        "Position": "PUMP ATTENDANT",
        "Position WORD": "PUMP ATTENDANT"
    },
    {
        "First Name": "ELIUD ",
        "Last Name": "APOLINALY",
        "Employee ID": 3129,
        "Department": "IRRIGATION",
        "Phone": 617508421,
        "Position": "PUMP ATTENDANT",
        "Position WORD": "PUMP ATTENDANT"
    },
    {
        "First Name": "JACKSON",
        "Last Name": "GASPER",
        "Employee ID": 3393,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "OPERATOR",
        "Position WORD": "OPERATOR"
    },
    {
        "First Name": "EDWARD",
        "Last Name": "NGARAMA",
        "Employee ID": 3634,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "JAMIMU ",
        "Last Name": "MOHAMED",
        "Employee ID": 3638,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "ESTA",
        "Last Name": "MSAFIRI",
        "Employee ID": 3826,
        "Department": "IRRIGATION",
        "Phone": 745861015,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "HAMIS ",
        "Last Name": "SALUM",
        "Employee ID": 2576,
        "Department": "IRRIGATION",
        "Phone": 675854796,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "BRYON ",
        "Last Name": "SUNDAY",
        "Employee ID": 1188,
        "Department": "IRRIGATION",
        "Phone": 74936654,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "ALMACHIUS",
        "Last Name": "LUTEGANYA",
        "Employee ID": 104,
        "Department": "IRRIGATION",
        "Phone": 620773517,
        "Position": "GRP SUPERVISOR",
        "Position WORD": "GRP SUPERVISOR"
    },
    {
        "First Name": "JAPHET",
        "Last Name": "KAVULA",
        "Employee ID": 655,
        "Department": "IRRIGATION",
        "Phone": 629993539,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "SHEDRACK",
        "Last Name": "PAULO",
        "Employee ID": 2582,
        "Department": "IRRIGATION",
        "Phone": 783627004,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "BONIFACE",
        "Last Name": "RICHARD",
        "Employee ID": 2199,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "GRAYDENI",
        "Last Name": "LESPICH",
        "Employee ID": 3859,
        "Department": "IRRIGATION",
        "Phone": 760141049,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "SEVELINO",
        "Last Name": "KIBWIGILI",
        "Employee ID": 261,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "RAY",
        "Last Name": "RESPIS",
        "Employee ID": 2567,
        "Department": "IRRIGATION",
        "Phone": 753573818,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "ONYESHO",
        "Last Name": "OBEID",
        "Employee ID": 2979,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "GRP",
        "Position WORD": "GRP"
    },
    {
        "First Name": "YAHAYA ",
        "Last Name": "JUMANNE",
        "Employee ID": 648,
        "Department": "IRRIGATION",
        "Phone": 625714878,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "ARON",
        "Last Name": "LUMANIKA",
        "Employee ID": 2568,
        "Department": "IRRIGATION",
        "Phone": 695258642,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "GIZIBERT",
        "Last Name": "WILLIUM",
        "Employee ID": 3870,
        "Department": "IRRIGATION",
        "Phone": 763178141,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "SEBASTIAN",
        "Last Name": "SEVERINO",
        "Employee ID": 3852,
        "Department": "IRRIGATION",
        "Phone": 753770272,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "JOSEPH",
        "Last Name": "RAIMOND",
        "Employee ID": 3847,
        "Department": "IRRIGATION",
        "Phone": 621134619,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "SHAURI",
        "Last Name": "RICHARD",
        "Employee ID": 3846,
        "Department": "IRRIGATION",
        "Phone": 758082447,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "FAIDA ",
        "Last Name": "JOSEPHAT",
        "Employee ID": 2569,
        "Department": "IRRIGATION",
        "Phone": 742507241,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "HOSEA",
        "Last Name": "BONIFACE",
        "Employee ID": 3851,
        "Department": "IRRIGATION",
        "Phone": 74454413,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "PETER ",
        "Last Name": "JACKSON",
        "Employee ID": 1297,
        "Department": "IRRIGATION",
        "Phone": 750788299,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "AHAD",
        "Last Name": "ARON",
        "Employee ID": 1311,
        "Department": "IRRIGATION",
        "Phone": 628928877,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "MORIS",
        "Last Name": "DAUDI",
        "Employee ID": 1213,
        "Department": "IRRIGATION",
        "Phone": 795929377,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "IDD",
        "Last Name": "TUMAIN",
        "Employee ID": 2574,
        "Department": "IRRIGATION",
        "Phone": 710545397,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "HILALI",
        "Last Name": "ABUBAKAR",
        "Employee ID": 2982,
        "Department": "IRRIGATION",
        "Phone": 68659866,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "LUCK",
        "Last Name": "JAMES",
        "Employee ID": 2584,
        "Department": "IRRIGATION",
        "Phone": 738232340,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "OMARY",
        "Last Name": "FUNDI",
        "Employee ID": 2561,
        "Department": "IRRIGATION",
        "Phone": 656296892,
        "Position": "MACHINERY SUPERVISOR",
        "Position WORD": "MACHINERY SUPERVISOR"
    },
    {
        "First Name": "ALISEN",
        "Last Name": "MESHI",
        "Employee ID": 2622,
        "Department": "IRRIGATION",
        "Phone": 627920226,
        "Position": "NURSERY B SUPERVISOR",
        "Position WORD": "NURSERY B SUPERVISOR"
    },
    {
        "First Name": "JOSEPH",
        "Last Name": "JEREMIA",
        "Employee ID": 3815,
        "Department": "IRRIGATION",
        "Phone": 744253673,
        "Position": "PUMP ATTENDANT",
        "Position WORD": "PUMP ATTENDANT"
    },
    {
        "First Name": "BAHAME ",
        "Last Name": "CHENYE",
        "Employee ID": 3814,
        "Department": "IRRIGATION",
        "Phone": 756939611,
        "Position": "PUMP ATTENDANT",
        "Position WORD": "PUMP ATTENDANT"
    },
    {
        "First Name": "BAHATI ABDU ",
        "Last Name": "JABIGI",
        "Employee ID": 3382,
        "Department": "IRRIGATION",
        "Phone": 746541571,
        "Position": "PUMP ATTENDANT",
        "Position WORD": "PUMP ATTENDANT"
    },
    {
        "First Name": "AZOR ",
        "Last Name": "SOSTENESS",
        "Employee ID": 1310,
        "Department": "IRRIGATION",
        "Phone": 626683429,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "YOHANA",
        "Last Name": "KAVULA",
        "Employee ID": 850,
        "Department": "IRRIGATION",
        "Phone": 678946179,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "EDIBERT",
        "Last Name": "EDSON",
        "Employee ID": 1214,
        "Department": "IRRIGATION",
        "Phone": 795210986,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "ANDERSON ",
        "Last Name": "MPIMA",
        "Employee ID": 3850,
        "Department": "IRRIGATION",
        "Phone": 759814546,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "MSTAAFA ",
        "Last Name": "ASHERY",
        "Employee ID": 3855,
        "Department": "IRRIGATION",
        "Phone": 747950826,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "SYLIVANUS ",
        "Last Name": "WILSON",
        "Employee ID": 2577,
        "Department": "IRRIGATION",
        "Phone": 742403081,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "MIPANGO ",
        "Last Name": "CHABOYA",
        "Employee ID": 2570,
        "Department": "IRRIGATION",
        "Phone": 747678135,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "MENILIK",
        "Last Name": "HAMIS",
        "Employee ID": 3848,
        "Department": "IRRIGATION",
        "Phone": 747678135,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "ELVIS",
        "Last Name": "OBEID",
        "Employee ID": 1299,
        "Department": "IRRIGATION",
        "Phone": 765454084,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "RUHUTA ",
        "Last Name": "MASUNZU",
        "Employee ID": 2987,
        "Department": "IRRIGATION",
        "Phone": 742314176,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "YOSHUA ",
        "Last Name": "LAMECK",
        "Employee ID": 3849,
        "Department": "IRRIGATION",
        "Phone": 748983523,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "JACKSON ",
        "Last Name": "LUGALILA",
        "Employee ID": 2571,
        "Department": "IRRIGATION",
        "Phone": 693746297,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "JACKSON ",
        "Last Name": "STEPHANO",
        "Employee ID": 1339,
        "Department": "IRRIGATION",
        "Phone": 781508468,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "FALES",
        "Last Name": "SEDEKIA",
        "Employee ID": 3857,
        "Department": "IRRIGATION",
        "Phone": 684532987,
        "Position": "GRP HELPER",
        "Position WORD": "GRP HELPER"
    },
    {
        "First Name": "NICHOLAU  ",
        "Last Name": "JOSHUA",
        "Employee ID": 2695,
        "Department": "IRRIGATION",
        "Phone": 624216919,
        "Position": "EXCAVATOR SUPERVISOR",
        "Position WORD": "EXCAVATOR SUPERVISOR"
    },
    {
        "First Name": "YUNUS  HASSAN",
        "Last Name": "NGWALE",
        "Employee ID": 3225,
        "Department": "IRRIGATION",
        "Phone": 755794304,
        "Position": " ENG GT",
        "Position WORD": " ENG GT"
    },
    {
        "First Name": "CHARLES ",
        "Last Name": "MATALO",
        "Employee ID": 4389,
        "Department": "IRRIGATION",
        "Phone": 760653177,
        "Position": "IRRIGATION HELPER",
        "Position WORD": "irrigation helper"
    },
    {
        "First Name": "ENOCK MICHAEL",
        "Last Name": NaN,
        "Employee ID": 3816,
        "Department": "IRRIGATION",
        "Phone": 6295359106,
        "Position": "IRRIGATION HELPER",
        "Position WORD": "irrigation helper"
    },
    {
        "First Name": "LEAH BENEDICTO",
        "Last Name": NaN,
        "Employee ID": 3124,
        "Department": "IRRIGATION",
        "Phone": 699789394,
        "Position": "IRRIGATION HELPER",
        "Position WORD": "irrigation helper"
    },
    {
        "First Name": "SADOCK NZIKWILINDA",
        "Last Name": NaN,
        "Employee ID": 3085,
        "Department": "IRRIGATION",
        "Phone": 761916682,
        "Position": "IRRIGATION HELPER",
        "Position WORD": "irrigation helper"
    },
    {
        "First Name": "JOSEPH NDABAHE",
        "Last Name": NaN,
        "Employee ID": 3120,
        "Department": "IRRIGATION",
        "Phone": 627920226,
        "Position": "IRRIGATION HELPER",
        "Position WORD": "irrigation helper"
    },
    {
        "First Name": "SHABAN SIGWAVUBA",
        "Last Name": "SIGWAVUBA",
        "Employee ID": 3254,
        "Department": "IRRIGATION",
        "Phone": 629926490,
        "Position": "IRRIGATION HELPER",
        "Position WORD": "irrigation helper"
    },
    {
        "First Name": "ENOCK MISIGALO",
        "Last Name": NaN,
        "Employee ID": 3278,
        "Department": "IRRIGATION",
        "Phone": 745230236,
        "Position": "IRRIGATION HELPER",
        "Position WORD": "irrigation helper"
    },
    {
        "First Name": "JAMES MAJALIWA",
        "Last Name": NaN,
        "Employee ID": 3405,
        "Department": "IRRIGATION",
        "Phone": 626461963,
        "Position": "IRRIGATION HELPER",
        "Position WORD": "irrigation helper"
    },
    {
        "First Name": "ROBNSON BERNARD",
        "Last Name": "SILAYO",
        "Employee ID": 3228,
        "Department": "IRRIGATION",
        "Phone": 672877468,
        "Position": " ENG GT",
        "Position WORD": " ENG GT"
    },
    {
        "First Name": "WILLIAM JAMES",
        "Last Name": "MARWA",
        "Employee ID": 1347,
        "Department": "SURVEY",
        "Phone": 763426284,
        "Position": "MANAGER",
        "Position WORD": "MANAGER"
    },
    {
        "First Name": "NELISILE M",
        "Last Name": "MPOFU",
        "Employee ID": 2638,
        "Department": "SURVEY",
        "Phone": 653604454,
        "Position": "MANAGER",
        "Position WORD": "MANAGER"
    },
    {
        "First Name": "ABDALLAH I",
        "Last Name": "ABDALLAH",
        "Employee ID": 1321,
        "Department": "SURVEY",
        "Phone": 787516901,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "BRANDON TITO",
        "Last Name": "RAPHAEL",
        "Employee ID": 3056,
        "Department": "SURVEY",
        "Phone": 628682153,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "MELKIOLY E",
        "Last Name": "NGOYA",
        "Employee ID": 3137,
        "Department": "SURVEY",
        "Phone": 688701230,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "GODLISTEN LOTH",
        "Last Name": "MLLEL",
        "Employee ID": 3171,
        "Department": "SURVEY",
        "Phone": 677894959,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "MELKISEDEK N",
        "Last Name": "MANGALILI",
        "Employee ID": 75,
        "Department": "SURVEY",
        "Phone": 788671999,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "ZAKAYO MATHIAS",
        "Last Name": "CHUZYE",
        "Employee ID": 83,
        "Department": "SURVEY",
        "Phone": 765494931,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "LEWIS  LUCAS",
        "Last Name": "JACOBO",
        "Employee ID": 3313,
        "Department": "SURVEY",
        "Phone": 673485458,
        "Position": "DATA CLERK",
        "Position WORD": "DATA CLERK"
    },
    {
        "First Name": "AJUAYE  JACOB",
        "Last Name": NaN,
        "Employee ID": 416,
        "Department": "SURVEY",
        "Phone": 624478891,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ALOYCE ALAM",
        "Last Name": NaN,
        "Employee ID": 2854,
        "Department": "SURVEY",
        "Phone": 795117406,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ARON MAJUTO",
        "Last Name": NaN,
        "Employee ID": 3190,
        "Department": "SURVEY",
        "Phone": 749255129,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ASHURA OTTO ",
        "Last Name": NaN,
        "Employee ID": 970,
        "Department": "SURVEY",
        "Phone": 792271262,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "AZIGARD YOHANA",
        "Last Name": NaN,
        "Employee ID": 1211,
        "Department": "SURVEY",
        "Phone": 755219953,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "BOSCO IMAN",
        "Last Name": NaN,
        "Employee ID": 1358,
        "Department": "SURVEY",
        "Phone": 688684381,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "CHARLES SHANGO ",
        "Last Name": NaN,
        "Employee ID": 3206,
        "Department": "SURVEY",
        "Phone": 762721176,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "DEOGRATIUS L",
        "Last Name": "LIBERATUS",
        "Employee ID": 3203,
        "Department": "SURVEY",
        "Phone": 613487001,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "DIOF MASUMBUKO",
        "Last Name": NaN,
        "Employee ID": 1323,
        "Department": "SURVEY",
        "Phone": 624229939,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ELAMU JONSON",
        "Last Name": NaN,
        "Employee ID": 1036,
        "Department": "SURVEY",
        "Phone": 746098085,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ELIA KAZAMOYO",
        "Last Name": NaN,
        "Employee ID": 3200,
        "Department": "SURVEY",
        "Phone": 685528035,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ELIA RAMSON",
        "Last Name": NaN,
        "Employee ID": 3189,
        "Department": "SURVEY",
        "Phone": 772131169,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ELIAZALI ELIUD ",
        "Last Name": NaN,
        "Employee ID": 3210,
        "Department": "SURVEY",
        "Phone": 743807339,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "EMMANUEL LESHA ",
        "Last Name": NaN,
        "Employee ID": 3211,
        "Department": "SURVEY",
        "Phone": 780328619,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "EZROM EMMANUEL",
        "Last Name": NaN,
        "Employee ID": 2853,
        "Department": "SURVEY",
        "Phone": 650110536,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "JOSIA STEPHANO",
        "Last Name": NaN,
        "Employee ID": 3201,
        "Department": "SURVEY",
        "Phone": 672232185,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "MARIUS MATHIAS",
        "Last Name": NaN,
        "Employee ID": 255,
        "Department": "SURVEY",
        "Phone": 747099171,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "MATHIAS RIZIKI",
        "Last Name": NaN,
        "Employee ID": 3185,
        "Department": "SURVEY",
        "Phone": 748422937,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "MAULID NDAYATA",
        "Last Name": NaN,
        "Employee ID": 3165,
        "Department": "SURVEY",
        "Phone": 679202594,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "METHOD WILLIAM",
        "Last Name": NaN,
        "Employee ID": 1108,
        "Department": "SURVEY",
        "Phone": 616620418,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "NASHON SIAJALI",
        "Last Name": NaN,
        "Employee ID": 3192,
        "Department": "SURVEY",
        "Phone": 616985643,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "RIZIKI LAURENT",
        "Last Name": NaN,
        "Employee ID": 3188,
        "Department": "SURVEY",
        "Phone": 626431480,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "SAID MASHAKA",
        "Last Name": NaN,
        "Employee ID": 2852,
        "Department": "SURVEY",
        "Phone": 741490960,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "SHUKURU KILONGO",
        "Last Name": NaN,
        "Employee ID": 3186,
        "Department": "SURVEY",
        "Phone": 744423057,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "STEVEN PETRO",
        "Last Name": NaN,
        "Employee ID": 1322,
        "Department": "SURVEY",
        "Phone": 623963660,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "THABIT NESTORY",
        "Last Name": NaN,
        "Employee ID": 3209,
        "Department": "SURVEY",
        "Phone": 767849863,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "TWAHIL MOHAMED",
        "Last Name": NaN,
        "Employee ID": 1031,
        "Department": "SURVEY",
        "Phone": 747581929,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "YESSE RUHUNGE",
        "Last Name": NaN,
        "Employee ID": 3187,
        "Department": "SURVEY",
        "Phone": 750773604,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "AMANI CLEOPHACE",
        "Last Name": "SALABAGA",
        "Employee ID": 1073,
        "Department": "SURVEY",
        "Phone": 627890578,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "CHARLES",
        "Last Name": "DANFORD",
        "Employee ID": 4691,
        "Department": "SURVEY",
        "Phone": 612991661,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "EDWIN JUSTINE",
        "Last Name": "MAGENI",
        "Employee ID": 3115,
        "Department": "SURVEY",
        "Phone": 745300371,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "JAMES EMMANUEL",
        "Last Name": "MBUTILA",
        "Employee ID": 1259,
        "Department": "SURVEY",
        "Phone": 744922017,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "KIKULACHO",
        "Last Name": " JARED",
        "Employee ID": 2950,
        "Department": "SURVEY",
        "Phone": 750911578,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "MUSA",
        "Last Name": "JARED",
        "Employee ID": 249,
        "Department": "SURVEY",
        "Phone": 611823710,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "NICKSON EDWIN",
        "Last Name": "BWINYO",
        "Employee ID": 3114,
        "Department": "SURVEY",
        "Phone": 753648901,
        "Position": "SURVEYOR",
        "Position WORD": "SURVEYOR"
    },
    {
        "First Name": "WILBROD",
        "Last Name": " SELEMAN",
        "Employee ID": 1348,
        "Department": "SURVEY",
        "Phone": 655383560,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "PYDI",
        "Last Name": "RAJU",
        "Employee ID": 1412,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CIVIL ENGINEER",
        "Position WORD": "CIVIL ENGINEER"
    },
    {
        "First Name": "MBARAKA",
        "Last Name": "OMARI",
        "Employee ID": 1052,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CIVIL QS",
        "Position WORD": "CIVIL QS"
    },
    {
        "First Name": "ELIFURAHA",
        "Last Name": "MNZAVA",
        "Employee ID": 2748,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "DATA CLERK",
        "Position WORD": "DATA CLERK"
    },
    {
        "First Name": "EDMUNDI",
        "Last Name": "NSHAMA",
        "Employee ID": 2794,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CIVIL TECH",
        "Position WORD": "CIVIL TECH"
    },
    {
        "First Name": "YOSHUA",
        "Last Name": "PETRO",
        "Employee ID": 82,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": "SUPERVISOR"
    },
    {
        "First Name": "NABOS",
        "Last Name": "BENARD",
        "Employee ID": 220,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "PLUMBER",
        "Position WORD": "PLUMBER"
    },
    {
        "First Name": "ALEX",
        "Last Name": "SABUHORO",
        "Employee ID": 225,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "WILSONI",
        "Last Name": "DAMAS",
        "Employee ID": 1021,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "CYNTHIA",
        "Last Name": "HAULE",
        "Employee ID": 3195,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "DATA CLERK TRAINEE",
        "Position WORD": "DATA CLERK TRAINEE"
    },
    {
        "First Name": "LAMECK",
        "Last Name": "AMOS",
        "Employee ID": 3287,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "SUPERVISOR TRAINEE",
        "Position WORD": "SUPERVISOR TRAINEE"
    },
    {
        "First Name": "MATOKEO",
        "Last Name": "NDAGILE",
        "Employee ID": 3392,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CM-OP - 01",
        "Position WORD": "CM-OP - 01"
    },
    {
        "First Name": "HAJI",
        "Last Name": "KILENGAWAMA",
        "Employee ID": 2752,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "WELDER",
        "Position WORD": "WELDER"
    },
    {
        "First Name": "MANSOURY",
        "Last Name": "ATHUMANI",
        "Employee ID": 3196,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "ALUMINIUM TECH",
        "Position WORD": "ALUMINIUM TECH"
    },
    {
        "First Name": "PERESI",
        "Last Name": "ISSA",
        "Employee ID": 2751,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "STEEL FIXER ",
        "Position WORD": "STEEL FIXER "
    },
    {
        "First Name": "TARCISIUS",
        "Last Name": "MGALA",
        "Employee ID": 3283,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "HOSEA",
        "Last Name": "MAHOBE",
        "Employee ID": 2771,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "IMANI",
        "Last Name": "VICENTI",
        "Employee ID": 3286,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "ELISHA",
        "Last Name": "NYOGORI",
        "Employee ID": 2749,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "DICKSON",
        "Last Name": "YORAMU",
        "Employee ID": 2781,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "FANUEL",
        "Last Name": "NDYANA",
        "Employee ID": 3285,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "SATIEL",
        "Last Name": "PETER",
        "Employee ID": 2694,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "GABRIEL",
        "Last Name": "KIDUMYA",
        "Employee ID": 3284,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "MAJUTO",
        "Last Name": "VITALIUS",
        "Employee ID": 2780,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "MACHOZI",
        "Last Name": "JUMA",
        "Employee ID": 4072,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": "CARPENTER"
    },
    {
        "First Name": "MATHAYO",
        "Last Name": "ZACHARIA",
        "Employee ID": 2680,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "DANIFORD",
        "Last Name": "RUVIWABI",
        "Employee ID": 2676,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "NAROD",
        "Last Name": "AMRI",
        "Employee ID": 4070,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "YOTHAMU",
        "Last Name": "THOBIAS",
        "Employee ID": 2682,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "KISIGAYE",
        "Last Name": "PETER",
        "Employee ID": 4206,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "YORAMU",
        "Last Name": "JOSEPHAT",
        "Employee ID": 3141,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "STEPHANO",
        "Last Name": "NASORO",
        "Employee ID": 2679,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "PAINENTO",
        "Last Name": "BULENDA",
        "Employee ID": 4071,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "JEREMIA",
        "Last Name": "KACHIRA",
        "Employee ID": 3691,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "BRYSON",
        "Last Name": "THOBIAS",
        "Employee ID": 4240,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": "MASON"
    },
    {
        "First Name": "JOSEPHINE",
        "Last Name": "CHINGULE",
        "Employee ID": 4222,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "PLUMBER",
        "Position WORD": "PLUMBER"
    },
    {
        "First Name": "OSKA",
        "Last Name": "CHAHITA",
        "Employee ID": 3172,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "PLUMBER",
        "Position WORD": "PLUMBER"
    },
    {
        "First Name": "DISMAS",
        "Last Name": "MULILIYE",
        "Employee ID": 3167,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "PLUMBER",
        "Position WORD": "PLUMBER"
    },
    {
        "First Name": "ELIUD",
        "Last Name": "MWEBEA",
        "Employee ID": 2675,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "JOSEPHU",
        "Last Name": "DAMAS",
        "Employee ID": 1510,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "EZRA",
        "Last Name": "AMANI",
        "Employee ID": 2929,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "PASCAL",
        "Last Name": "WILIAM",
        "Employee ID": 2668,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "SHABAN",
        "Last Name": "RUBEN",
        "Employee ID": 2735,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "GILBERT",
        "Last Name": "DYANKA",
        "Employee ID": 2930,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "AYOUB",
        "Last Name": "JARED",
        "Employee ID": 2934,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "RAYSON",
        "Last Name": "JAMES",
        "Employee ID": 228,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "NORBERT",
        "Last Name": "JOSEPHAT",
        "Employee ID": 733,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ALFAXAD",
        "Last Name": "IMANI",
        "Employee ID": 2737,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "RICHARD",
        "Last Name": "ABDUL",
        "Employee ID": 2633,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "TRYPHONE",
        "Last Name": "PROTAS",
        "Employee ID": 2673,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ANOLD",
        "Last Name": "KULIJE",
        "Employee ID": 1688,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "HAKI",
        "Last Name": "JULIUS",
        "Employee ID": 2672,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "NASHONI",
        "Last Name": "BARAKA",
        "Employee ID": 2634,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "MICHAEL",
        "Last Name": "JUMA",
        "Employee ID": 226,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "TABARO",
        "Last Name": "NAMUHOYA",
        "Employee ID": 3288,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": "HELPER"
    },
    {
        "First Name": "ISSAC",
        "Last Name": "MLAWA",
        "Employee ID": 1202,
        "Department": "SECURITY",
        "Phone": 754534364,
        "Position": "SECURITY SUPERVISOR",
        "Position WORD": "SECURITY SUPERVISOR"
    },
    {
        "First Name": "IMMANUEL WILFRED",
        "Last Name": "MALYA",
        "Employee ID": 2810,
        "Department": "SECURITY",
        "Phone": 628505121,
        "Position": "LOGISTIC SUPERVISOR",
        "Position WORD": "LOGISTIC SUPERVISOR"
    },
    {
        "First Name": "JOSEPHAT B",
        "Last Name": "RUBALATUKA",
        "Employee ID": 2811,
        "Department": "SECURITY",
        "Phone": 787311820,
        "Position": "LIASON OFFICER",
        "Position WORD": "LIASON OFFICER"
    },
    {
        "First Name": "PHILIPO PETRO",
        "Last Name": "KOMBA",
        "Employee ID": 2856,
        "Department": "SECURITY",
        "Phone": 764102608,
        "Position": "SECURITY OFFICER",
        "Position WORD": "SECURITY OFFICER"
    },
    {
        "First Name": "THOMAS RICHARD",
        "Last Name": "NKWABI",
        "Employee ID": 2862,
        "Department": "SECURITY",
        "Phone": 745517777,
        "Position": "SECURITY OFFICER",
        "Position WORD": "SECURITY OFFICER"
    },
    {
        "First Name": "PAUL",
        "Last Name": "MESHACK MATOZI",
        "Employee ID": 334,
        "Department": "SECURITY",
        "Phone": 693824027,
        "Position": "FUEL ATTENDER",
        "Position WORD": "FUEL ATTENDER"
    },
    {
        "First Name": "EMILIAN",
        "Last Name": "EMILIAN",
        "Employee ID": 1349,
        "Department": "SECURITY",
        "Phone": 757894884,
        "Position": "FUEL ATTENDER",
        "Position WORD": "FUEL ATTENDER"
    },
    {
        "First Name": "TENGA KAKENZI",
        "Last Name": "MALANGUKA",
        "Employee ID": 2127,
        "Department": "SECURITY",
        "Phone": 743463691,
        "Position": "TRACTOR OP-LOW HP",
        "Position WORD": "TRACTOR OP-LOW HP"
    },
    {
        "First Name": "NACKSON ALFRED",
        "Last Name": "NCHULLU",
        "Employee ID": 2564,
        "Department": "SECURITY",
        "Phone": 617191748,
        "Position": "ASST SECURITY OFFICER",
        "Position WORD": "ASST SECURITY OFFICER"
    },
    {
        "First Name": "ABDALAH SAID",
        "Last Name": "NG'WALA",
        "Employee ID": 2843,
        "Department": "SECURITY",
        "Phone": 695011930,
        "Position": "SECURITY OFFICER",
        "Position WORD": "SECURITY OFFICER"
    },
    {
        "First Name": "TAMI ENOCK",
        "Last Name": "FARU",
        "Employee ID": 2845,
        "Department": "SECURITY",
        "Phone": 622846189,
        "Position": "ASST SECURITY OFFICER",
        "Position WORD": "ASST SECURITY OFFICER"
    },
    {
        "First Name": "HALUNE NAMSON",
        "Last Name": "MLAWA",
        "Employee ID": 3198,
        "Department": "SECURITY",
        "Phone": 747053019,
        "Position": "DATA CLERK",
        "Position WORD": "DATA CLERK"
    },
    {
        "First Name": "ANORD PATRICK",
        "Last Name": "RAPHAEL",
        "Employee ID": 2944,
        "Department": "SECURITY",
        "Phone": 620822533,
        "Position": "FUEL ATTENDER",
        "Position WORD": "FUEL ATTENDER"
    },
    {
        "First Name": "THEODORE POPE",
        "Last Name": NaN,
        "Employee ID": 3390,
        "Department": "SECURITY",
        "Phone": 764886148,
        "Position": "FUEL SUPERVISOR",
        "Position WORD": "FUEL SUPERVISOR"
    },
    {
        "First Name": "IMANI YONA",
        "Last Name": "JOHN",
        "Employee ID": 3469,
        "Department": "SECURITY",
        "Phone": 620604548,
        "Position": "FUEL ATTENDER",
        "Position WORD": "FUEL ATTENDER"
    },
    {
        "First Name": "DEVICE JULIUS",
        "Last Name": "MWANGA",
        "Employee ID": 3812,
        "Department": "SECURITY",
        "Phone": 78588334,
        "Position": "FUEL ATTENDER",
        "Position WORD": "FUEL ATTENDER"
    },
    {
        "First Name": "THAISON ELIZEUS",
        "Last Name": "RWETABULULA",
        "Employee ID": 4398,
        "Department": "SECURITY",
        "Phone": 783163406,
        "Position": "BOWSER DRIVER",
        "Position WORD": "BOWSER DRIVER"
    },
    {
        "First Name": "MABULA RICHARD",
        "Last Name": "MAPALALA",
        "Employee ID": 4399,
        "Department": "SECURITY",
        "Phone": 621586963,
        "Position": "FUEL ATTENDER",
        "Position WORD": "FUEL ATTENDER"
    },
    {
        "First Name": "FEDRICK MILAGILO",
        "Last Name": "KADANGI",
        "Employee ID": 4327,
        "Department": "SECURITY",
        "Phone": 621586963,
        "Position": "FUEL ATTENDER",
        "Position WORD": "FUEL ATTENDER"
    },
    {
        "First Name": "ARISEN AGAIZA",
        "Last Name": "EZERA",
        "Employee ID": 3,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": "SUPERVISOR"
    },
    {
        "First Name": "JONAS",
        "Last Name": "BUZINGO",
        "Employee ID": 19,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": "SUPERVISOR"
    },
    {
        "First Name": "PATANISO ATANASI",
        "Last Name": "BUKAKIYE",
        "Employee ID": 33,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": "SUPERVISOR"
    },
    {
        "First Name": "ELIA NGARAMA",
        "Last Name": "BIHENDA",
        "Employee ID": 785,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": "ROOT COLLECTION"
    },
    {
        "First Name": "INNOCENT  ",
        "Last Name": "BONIFACE",
        "Employee ID": 1025,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CHAINSAW OPERATOR",
        "Position WORD": "CHAINSAW OPERATOR"
    },
    {
        "First Name": "NASSORO OMARY",
        "Last Name": "KITIME",
        "Employee ID": 1126,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "BETHON",
        "Last Name": "KAGOMA",
        "Employee ID": 1144,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": "SUPERVISOR"
    },
    {
        "First Name": "JORAM AMOS",
        "Last Name": "MKIRYA",
        "Employee ID": 2168,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "FILBERT",
        "Last Name": "JARED",
        "Employee ID": 2188,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": "SUPERVISOR"
    },
    {
        "First Name": "MASUDI MRISHO",
        "Last Name": "MINYIMBA",
        "Employee ID": 2209,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "GODFREY",
        "Last Name": "MASSAWE",
        "Employee ID": 2637,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "PAUL JOHN",
        "Last Name": "KAIZILEGE",
        "Employee ID": 2642,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "LAURENT ERASTO",
        "Last Name": "LUKUNGA",
        "Employee ID": 2652,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROLLER COMPACTOR OP",
        "Position WORD": "ROLLER COMPACTOR OP"
    },
    {
        "First Name": "MATHIAS BONIFACE",
        "Last Name": "KALAWA",
        "Employee ID": 2697,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOXER OPERATOR",
        "Position WORD": "DOXER OPERATOR"
    },
    {
        "First Name": "MOHAMED JUMA",
        "Last Name": "FULE",
        "Employee ID": 2714,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOXER OPERATOR",
        "Position WORD": "DOXER OPERATOR"
    },
    {
        "First Name": "REVOCATUS WILLIAM",
        "Last Name": "KATTO",
        "Employee ID": 2782,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "FREDRICK THOMAS ",
        "Last Name": "MWAKALINGA",
        "Employee ID": 2828,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "FESTO  CHARLES",
        "Last Name": "MAKERE",
        "Employee ID": 2936,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": "SUPERVISOR"
    },
    {
        "First Name": "DANDORD EMMANUEL",
        "Last Name": "BIZOZA",
        "Employee ID": 2938,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": "SUPERVISOR"
    },
    {
        "First Name": "DAUDI SIRIKALE",
        "Last Name": "NYAMISUNGURA",
        "Employee ID": 2999,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GRADER OPERATOR",
        "Position WORD": "GRADER OPERATOR"
    },
    {
        "First Name": "JARED VEDASTO",
        "Last Name": "KISIMBANI",
        "Employee ID": 3000,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "JOSEPH DANIEL",
        "Last Name": "YONA",
        "Employee ID": 3001,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GRADER OPERATOR",
        "Position WORD": "GRADER OPERATOR"
    },
    {
        "First Name": "GOZIBATI GODWIN",
        "Last Name": "MULAKI",
        "Employee ID": 3003,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "ELIAS AZOLI",
        "Last Name": "IBRAHIM",
        "Employee ID": 3004,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CHAIN SAW MECHANIC",
        "Position WORD": "CHAIN SAW MECHANIC"
    },
    {
        "First Name": "INNOCENT MUSSA",
        "Last Name": "NGINILA",
        "Employee ID": 3009,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GRADER OPERATOR",
        "Position WORD": "GRADER OPERATOR"
    },
    {
        "First Name": "MARIKI AHAMAD",
        "Last Name": "RUZUYA",
        "Employee ID": 3014,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CRANE OPERATOR",
        "Position WORD": "CRANE OPERATOR"
    },
    {
        "First Name": "JAMES RAPHAEL",
        "Last Name": "MAPANDE",
        "Employee ID": 3018,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROLLER COMPACTOR",
        "Position WORD": "ROLLER COMPACTOR"
    },
    {
        "First Name": "PASCHAL ELIAS",
        "Last Name": "MTOTO",
        "Employee ID": 3023,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CHAIN SAW HELPER",
        "Position WORD": "CHAIN SAW HELPER"
    },
    {
        "First Name": "LENAD SELEMANI",
        "Last Name": "MATABALI",
        "Employee ID": 3025,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CHAIN SAW HELPER",
        "Position WORD": "CHAIN SAW HELPER"
    },
    {
        "First Name": "JUSTIN  SAMSONI",
        "Last Name": "MAGWENDE",
        "Employee ID": 3026,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CHAIN SAW HELPER",
        "Position WORD": "CHAIN SAW HELPER"
    },
    {
        "First Name": "ELICK ZAWADI",
        "Last Name": "SIZI",
        "Employee ID": 3031,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CHAIN SAW HELPER",
        "Position WORD": "CHAIN SAW HELPER"
    },
    {
        "First Name": "CLEMENT NGASA",
        "Last Name": "NYOLOBI",
        "Employee ID": 3032,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CHAIN SAW HELPER",
        "Position WORD": "CHAIN SAW HELPER"
    },
    {
        "First Name": "HENRY ROBAT",
        "Last Name": "MWANDEMELE",
        "Employee ID": 3037,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROLLER COMPACTOR",
        "Position WORD": "ROLLER COMPACTOR"
    },
    {
        "First Name": "FREDY CHRISTOPHER",
        "Last Name": "MWITA",
        "Employee ID": 3039,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "JEMINIUS PETRO",
        "Last Name": "KILALIMA",
        "Employee ID": 3063,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": "ROOT COLLECTION"
    },
    {
        "First Name": "BENSON SADOCK",
        "Last Name": "NGWILIKIYE",
        "Employee ID": 3068,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": "ROOT COLLECTION"
    },
    {
        "First Name": "BAHATI AMON",
        "Last Name": "NTAHUA",
        "Employee ID": 3070,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": NaN,
        "Position WORD": "ROOT COLLECTION"
    },
    {
        "First Name": "ASHIRAFU IDDI",
        "Last Name": "IBRAHIMU",
        "Employee ID": 3097,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": "ROOT COLLECTION"
    },
    {
        "First Name": "JOCTAN BEANS",
        "Last Name": "BWIRE",
        "Employee ID": 3113,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "JOSHUA MGANYALI ",
        "Last Name": "NGAYAHANDE",
        "Employee ID": 3150,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "TREE BURNING",
        "Position WORD": "TREE BURNING"
    },
    {
        "First Name": "ISMAIL ELIAS",
        "Last Name": "MASWAGA",
        "Employee ID": 3162,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "ERASTO ANDREW",
        "Last Name": "BALINAGO",
        "Employee ID": 3181,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "TRIP CHECKER",
        "Position WORD": "TRIP CHECKER"
    },
    {
        "First Name": "OMARY SALEHE",
        "Last Name": "NYANGI",
        "Employee ID": 3212,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "MERDAD METHOD",
        "Last Name": "MORICE",
        "Employee ID": 3231,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "SHANIFA  BELNARD",
        "Last Name": "CHENGULA",
        "Employee ID": 3239,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "ADAM JENELA",
        "Last Name": "MKONDO",
        "Employee ID": 3245,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "AMRI MARITINI",
        "Last Name": "CHARLES",
        "Employee ID": 3302,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": "ROOT COLLECTION"
    },
    {
        "First Name": "KAKASA MICHAEL",
        "Last Name": "KAHALE",
        "Employee ID": 3326,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "PETER SIMON",
        "Last Name": "PETER",
        "Employee ID": 3483,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": "DOZER OPERATOR"
    },
    {
        "First Name": "ABDUL NUHU",
        "Last Name": "SHABAN",
        "Employee ID": 3485,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "WHEEL LOADER OP",
        "Position WORD": "WHEEL LOADER OP"
    },
    {
        "First Name": "BARAKA JACKSON",
        "Last Name": "MWITA",
        "Employee ID": 3843,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "CHAINSAW OPERATOR",
        "Position WORD": "CHAINSAW OPERATOR"
    },
    {
        "First Name": "ANSWARY   MUGISHANGWE",
        "Last Name": "JAPHARY",
        "Employee ID": 4786,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DATA CLERK",
        "Position WORD": "DATA CLERK"
    },
    {
        "First Name": "SHAMSI ATHUMANI",
        "Last Name": "SAMDIAY",
        "Employee ID": 98,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "HFT DRIVER",
        "Position WORD": "HFT DRIVER"
    },
    {
        "First Name": "HARUNA BENSON",
        "Last Name": "MICHAEL",
        "Employee ID": 2796,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "LOW BED HELPER",
        "Position WORD": "LOW BED HELPER"
    },
    {
        "First Name": "ZIGRO JAFARI",
        "Last Name": "NDABAGENDA",
        "Employee ID": 2954,
        "Department": "IRRIGATION",
        "Phone": 626461963,
        "Position": "eng. Greaduate trainee",
        "Position WORD": NaN
    },
    {
        "First Name": "ALEX  DANFORD",
        "Last Name": NaN,
        "Employee ID": 3422,
        "Department": "IRRIGATION",
        "Phone": 795776376,
        "Position": "IRRIGATION HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "STIVEN ANANIA",
        "Last Name": NaN,
        "Employee ID": 4996,
        "Department": "IRRIGATION",
        "Phone": 755354825,
        "Position": "IRRIGATION HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSHUA ELPOKEA",
        "Last Name": "MUNURE",
        "Employee ID": 1181,
        "Department": "IRRIGATION",
        "Phone": 677128517,
        "Position": "ENG.  IRRIGATION",
        "Position WORD": NaN
    },
    {
        "First Name": "ROGGERS PASCAR",
        "Last Name": NaN,
        "Employee ID": 3424,
        "Department": "IRRIGATION",
        "Phone": 699389221,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "LEAH MESHAK",
        "Last Name": NaN,
        "Employee ID": 3883,
        "Department": "IRRIGATION",
        "Phone": 610848927,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ALEX LAZARO",
        "Last Name": NaN,
        "Employee ID": 2597,
        "Department": "IRRIGATION",
        "Phone": 683606237,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "NAFUMEN FADES",
        "Last Name": NaN,
        "Employee ID": 2259,
        "Department": "IRRIGATION",
        "Phone": 760448427,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "YASINTA TOBIAS",
        "Last Name": NaN,
        "Employee ID": 4382,
        "Department": "IRRIGATION",
        "Phone": 744530268,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "SAFINA PATRIC",
        "Last Name": NaN,
        "Employee ID": 4686,
        "Department": "IRRIGATION",
        "Phone": 623446768,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "NURU LAZARO",
        "Last Name": NaN,
        "Employee ID": 4388,
        "Department": "IRRIGATION",
        "Phone": 749892400,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "NZELE INNOCENT ",
        "Last Name": NaN,
        "Employee ID": 584,
        "Department": "IRRIGATION",
        "Phone": 761578065,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "HASHIM SAID",
        "Last Name": NaN,
        "Employee ID": 1482,
        "Department": "IRRIGATION",
        "Phone": 764472664,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "MASHAKA MESHAKI",
        "Last Name": NaN,
        "Employee ID": 1486,
        "Department": "IRRIGATION",
        "Phone": 681127106,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ENOCK ANDASON ",
        "Last Name": NaN,
        "Employee ID": 3248,
        "Department": "IRRIGATION",
        "Phone": 795292513,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "AHABU SIKITU",
        "Last Name": NaN,
        "Employee ID": 3821,
        "Department": "IRRIGATION",
        "Phone": 683603168,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "PETER DAMAS",
        "Last Name": NaN,
        "Employee ID": 3383,
        "Department": "IRRIGATION",
        "Phone": 785102219,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "DOTO CHINGO ",
        "Last Name": "BASOMI",
        "Employee ID": 349,
        "Department": "IRRIGATION",
        "Phone": 757747687,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "MALIMI JUMA ",
        "Last Name": NaN,
        "Employee ID": 4213,
        "Department": "IRRIGATION",
        "Phone": 740448632,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "WILLIAM PHILIMON",
        "Last Name": NaN,
        "Employee ID": 4997,
        "Department": "IRRIGATION",
        "Phone": 750789763,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "OCTAVIAN JACOB",
        "Last Name": NaN,
        "Employee ID": 3823,
        "Department": "IRRIGATION",
        "Phone": 759538610,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "TIMOTHEO JUMA",
        "Last Name": NaN,
        "Employee ID": 3420,
        "Department": "IRRIGATION",
        "Phone": 741817226,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "LEAH ADRIANO",
        "Last Name": NaN,
        "Employee ID": 4688,
        "Department": "IRRIGATION",
        "Phone": NaN,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "DAINES WILJES",
        "Last Name": NaN,
        "Employee ID": 4685,
        "Department": "IRRIGATION",
        "Phone": 769095987,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ABSON EZRA ",
        "Last Name": NaN,
        "Employee ID": 3829,
        "Department": "IRRIGATION",
        "Phone": 616487579,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "KASINDI SAMSON ",
        "Last Name": NaN,
        "Employee ID": 3585,
        "Department": "IRRIGATION",
        "Phone": 756364183,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "VITUS SATIELY ",
        "Last Name": NaN,
        "Employee ID": 3854,
        "Department": "IRRIGATION",
        "Phone": 624829856,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "SARAFINA GEORGE ",
        "Last Name": NaN,
        "Employee ID": 3404,
        "Department": "IRRIGATION",
        "Phone": 693305828,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "PESA ATHANAS",
        "Last Name": NaN,
        "Employee ID": 2607,
        "Department": "IRRIGATION",
        "Phone": 624077816,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ISAYA BALANDONDA",
        "Last Name": NaN,
        "Employee ID": 3099,
        "Department": "IRRIGATION",
        "Phone": 62117837,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "FRANCIS NAFTALY ",
        "Last Name": NaN,
        "Employee ID": 4550,
        "Department": "IRRIGATION",
        "Phone": 650212962,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "JIRES ERASTO",
        "Last Name": NaN,
        "Employee ID": 3423,
        "Department": "IRRIGATION",
        "Phone": 623498605,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "FIDES CASTO",
        "Last Name": NaN,
        "Employee ID": 4559,
        "Department": "IRRIGATION",
        "Phone": 759705362,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "SAMWEL MESHAKI",
        "Last Name": NaN,
        "Employee ID": 4553,
        "Department": "IRRIGATION",
        "Phone": 777690892,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "AMOS ALFAN",
        "Last Name": NaN,
        "Employee ID": 4675,
        "Department": "IRRIGATION",
        "Phone": 795490961,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "AMOS NDOGO ",
        "Last Name": NaN,
        "Employee ID": 4704,
        "Department": "IRRIGATION",
        "Phone": 712738336,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "NEEMA ZAKARIA",
        "Last Name": NaN,
        "Employee ID": 4555,
        "Department": "IRRIGATION",
        "Phone": 612637971,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "EGISA RICHARD",
        "Last Name": NaN,
        "Employee ID": 4641,
        "Department": "IRRIGATION",
        "Phone": 692964533,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "MADGALENA  YOTHAM",
        "Last Name": NaN,
        "Employee ID": 4640,
        "Department": "IRRIGATION",
        "Phone": 795384952,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "AMRI GERALD",
        "Last Name": NaN,
        "Employee ID": 4694,
        "Department": "IRRIGATION",
        "Phone": 744346025,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "AMAN MAJALIWA",
        "Last Name": NaN,
        "Employee ID": 4703,
        "Department": "IRRIGATION",
        "Phone": 769865689,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "BRIGHTON MESSIU ",
        "Last Name": NaN,
        "Employee ID": 4674,
        "Department": "IRRIGATION",
        "Phone": 758701680,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ABEL MANGUMI",
        "Last Name": NaN,
        "Employee ID": 4386,
        "Department": "IRRIGATION",
        "Phone": 682427567,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "LAURENT MICHAEL",
        "Last Name": NaN,
        "Employee ID": 4696,
        "Department": "IRRIGATION",
        "Phone": 747277590,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "KASIMU SEKA ",
        "Last Name": NaN,
        "Employee ID": 4211,
        "Department": "IRRIGATION",
        "Phone": 692993936,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "EMANUEL  STEWARD ",
        "Last Name": NaN,
        "Employee ID": 4625,
        "Department": "IRRIGATION",
        "Phone": 744919368,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "DAUD METHOD",
        "Last Name": NaN,
        "Employee ID": 4651,
        "Department": "IRRIGATION",
        "Phone": 774231251,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "APOLINARY JUSTINE ",
        "Last Name": NaN,
        "Employee ID": 3303,
        "Department": "IRRIGATION",
        "Phone": 794488207,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "SELESTINA CHARLES",
        "Last Name": NaN,
        "Employee ID": 3136,
        "Department": "IRRIGATION",
        "Phone": 742046637,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "JACKSON SEVELIAN",
        "Last Name": NaN,
        "Employee ID": 4427,
        "Department": "IRRIGATION",
        "Phone": 795436722,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "FROLA PASCAL",
        "Last Name": NaN,
        "Employee ID": 4412,
        "Department": "IRRIGATION",
        "Phone": 743935346,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIYA AREN",
        "Last Name": NaN,
        "Employee ID": 4693,
        "Department": "IRRIGATION",
        "Phone": 792622110,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "AMONI MIREMBE ",
        "Last Name": NaN,
        "Employee ID": 4421,
        "Department": "IRRIGATION",
        "Phone": 755469089,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "GWANKO CHABOYA",
        "Last Name": NaN,
        "Employee ID": 480,
        "Department": "IRRIGATION",
        "Phone": 7611556568,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSHUA BRYSON",
        "Last Name": NaN,
        "Employee ID": 4699,
        "Department": "IRRIGATION",
        "Phone": 786834414,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "JACKSON WINFRED",
        "Last Name": NaN,
        "Employee ID": 3569,
        "Department": "IRRIGATION",
        "Phone": 746375946,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "MUSSA ATHUMAN",
        "Last Name": NaN,
        "Employee ID": 4697,
        "Department": "IRRIGATION",
        "Phone": 682952613,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "SALOME  FABIAN",
        "Last Name": NaN,
        "Employee ID": 3117,
        "Department": "IRRIGATION",
        "Phone": 715659318,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "YOSHUA STANSLAUS",
        "Last Name": NaN,
        "Employee ID": 3289,
        "Department": "IRRIGATION",
        "Phone": 614829516,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "FEDES STANLEY",
        "Last Name": NaN,
        "Employee ID": 4658,
        "Department": "IRRIGATION",
        "Phone": 757297450,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "REMINATHA STEPHANO",
        "Last Name": NaN,
        "Employee ID": 4432,
        "Department": "IRRIGATION",
        "Phone": 695356809,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "MECKTLIDA STEPHANO",
        "Last Name": NaN,
        "Employee ID": 4659,
        "Department": "IRRIGATION",
        "Phone": 752413667,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "OSWARD STEPHANO",
        "Last Name": NaN,
        "Employee ID": 4702,
        "Department": "IRRIGATION",
        "Phone": 755345373,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSHUA GUMBA ",
        "Last Name": NaN,
        "Employee ID": 4676,
        "Department": "IRRIGATION",
        "Phone": 765722097,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "FEDRICK ISAYA",
        "Last Name": NaN,
        "Employee ID": 4695,
        "Department": "IRRIGATION",
        "Phone": 745158883,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ALEX BARAKA",
        "Last Name": "CHARLES",
        "Employee ID": 4556,
        "Department": "IRRIGATION",
        "Phone": 761879236,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ENOCK YOTHAM",
        "Last Name": NaN,
        "Employee ID": 4644,
        "Department": "IRRIGATION",
        "Phone": 623416847,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "TRAIFON JOFREY",
        "Last Name": NaN,
        "Employee ID": 4679,
        "Department": "IRRIGATION",
        "Phone": 787442077,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "GWASA CHIZA ",
        "Last Name": NaN,
        "Employee ID": 4422,
        "Department": "IRRIGATION",
        "Phone": 7602268342,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "GADIUS SEBASTIAN",
        "Last Name": NaN,
        "Employee ID": 2602,
        "Department": "IRRIGATION",
        "Phone": 621202947,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIZABERT  JULIUS",
        "Last Name": NaN,
        "Employee ID": 262,
        "Department": "IRRIGATION",
        "Phone": 753880607,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "FARAJA JOHN",
        "Last Name": NaN,
        "Employee ID": 2232,
        "Department": "IRRIGATION",
        "Phone": 750918832,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "FOTUNATA REMI",
        "Last Name": NaN,
        "Employee ID": 4655,
        "Department": "IRRIGATION",
        "Phone": 766658996,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "VESTINA CHARLES ",
        "Last Name": NaN,
        "Employee ID": 5002,
        "Department": "IRRIGATION",
        "Phone": 670311073,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "JUSTINA PIUS",
        "Last Name": NaN,
        "Employee ID": 4551,
        "Department": "IRRIGATION",
        "Phone": 762296469,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSEPHAT VICENT ",
        "Last Name": NaN,
        "Employee ID": 3351,
        "Department": "IRRIGATION",
        "Phone": 654065826,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIUD SLVANUS",
        "Last Name": NaN,
        "Employee ID": 4560,
        "Department": "IRRIGATION",
        "Phone": 748336392,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "DAVID ABDALLAH",
        "Last Name": NaN,
        "Employee ID": 4218,
        "Department": "IRRIGATION",
        "Phone": 742835378,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "SIAJIRI KIRUNDURU",
        "Last Name": NaN,
        "Employee ID": 4216,
        "Department": "IRRIGATION",
        "Phone": 749826404,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "MIUJIZA  ALFAYO",
        "Last Name": NaN,
        "Employee ID": 4384,
        "Department": "IRRIGATION",
        "Phone": 793942387,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ELEN MARCO",
        "Last Name": NaN,
        "Employee ID": 3280,
        "Department": "IRRIGATION",
        "Phone": 612586486,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "PASCHAL NYEDETSE",
        "Last Name": NaN,
        "Employee ID": 3831,
        "Department": "IRRIGATION",
        "Phone": 623076530,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "MOABU ABELY",
        "Last Name": NaN,
        "Employee ID": 4419,
        "Department": "IRRIGATION",
        "Phone": 740204931,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "SOSTENES GIDION ",
        "Last Name": "CHUBWA",
        "Employee ID": 5004,
        "Department": "IRRIGATION",
        "Phone": 653751111,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ALLY FUNGA ",
        "Last Name": NaN,
        "Employee ID": 2562,
        "Department": "IRRIGATION",
        "Phone": 749802045,
        "Position": "PLUMBER SUPERVISOR ",
        "Position WORD": NaN
    },
    {
        "First Name": "FRANK FOCUS",
        "Last Name": NaN,
        "Employee ID": 4554,
        "Department": "IRRIGATION",
        "Phone": 760360884,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSEPHAT JONATHAN",
        "Last Name": NaN,
        "Employee ID": 4635,
        "Department": "IRRIGATION",
        "Phone": 761505890,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "SAHAU ASHERY ",
        "Last Name": NaN,
        "Employee ID": 2613,
        "Department": "IRRIGATION",
        "Phone": 745417337,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ADAM AMRI ",
        "Last Name": NaN,
        "Employee ID": 4426,
        "Department": "IRRIGATION",
        "Phone": 616025101,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ODAS PAUL ",
        "Last Name": NaN,
        "Employee ID": 3856,
        "Department": "IRRIGATION",
        "Phone": 783401349,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "DENISA PASKALI",
        "Last Name": NaN,
        "Employee ID": 286,
        "Department": "IRRIGATION",
        "Phone": 710262404,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIZABERT JUMANNE ",
        "Last Name": NaN,
        "Employee ID": 4656,
        "Department": "IRRIGATION",
        "Phone": 74772136,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "CHARLES HANGAIKO ",
        "Last Name": NaN,
        "Employee ID": 4385,
        "Department": "IRRIGATION",
        "Phone": 754815429,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "ADOROFINA HOSEA ",
        "Last Name": NaN,
        "Employee ID": 4433,
        "Department": "IRRIGATION",
        "Phone": 749989734,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "FELISTER NIKOLAUS ",
        "Last Name": NaN,
        "Employee ID": 4383,
        "Department": "IRRIGATION",
        "Phone": 764497357,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "OBED LILONKA ",
        "Last Name": NaN,
        "Employee ID": 3101,
        "Department": "IRRIGATION",
        "Phone": 6204424091,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "HOSEA GWANKO ",
        "Last Name": NaN,
        "Employee ID": 4420,
        "Department": "IRRIGATION",
        "Phone": 717224733,
        "Position": "irrigation helper",
        "Position WORD": NaN
    },
    {
        "First Name": "HERI LADISLAUS",
        "Last Name": "LUANDE",
        "Employee ID": 938,
        "Department": "IRRIGATION",
        "Phone": 743406479,
        "Position": "ENG. IRRIGATION SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "REHEMA ALEXANDER ",
        "Last Name": NaN,
        "Employee ID": 49,
        "Department": "IRRIGATION",
        "Phone": 757262939,
        "Position": "PLUMBER SUPERVISOR ",
        "Position WORD": NaN
    },
    {
        "First Name": "CYNTHIA MNUGA",
        "Last Name": "HAULE",
        "Employee ID": 4223,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "DATA CLERK TRAINEE",
        "Position WORD": "DATA CLERK TRAINEE"
    },
    {
        "First Name": "RICHARD FRANK",
        "Last Name": "ISANGO",
        "Employee ID": 79,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "CIVIL ENG. TECHNICIAN",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIYA ELIAS ",
        "Last Name": "KALEB",
        "Employee ID": 4229,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "SAFETY OFFICER",
        "Position WORD": NaN
    },
    {
        "First Name": "OSCAR ",
        "Last Name": "BAHARAYE",
        "Employee ID": 3410,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TAISON ",
        "Last Name": "ELIZEUS",
        "Employee ID": 3412,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ARONE ",
        "Last Name": "LAMECK",
        "Employee ID": 3402,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KELVIN ",
        "Last Name": "FRED",
        "Employee ID": 3411,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JAPHET ",
        "Last Name": "JEREMIA",
        "Employee ID": 3630,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SALIM ",
        "Last Name": "KHALID",
        "Employee ID": 3629,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ISAYA ",
        "Last Name": "RENATUS",
        "Employee ID": 3631,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DAUDI ",
        "Last Name": "KADUNDUGWA",
        "Employee ID": 3632,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ASHERI ",
        "Last Name": "PAULO",
        "Employee ID": 3745,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SHABAN ",
        "Last Name": "ATHUMAN",
        "Employee ID": 3746,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HOSEA ",
        "Last Name": "BENEDICTO",
        "Employee ID": 3747,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RUEUBEN  ",
        "Last Name": "GERVAS",
        "Employee ID": 3749,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ALEX ",
        "Last Name": "ANTON",
        "Employee ID": 3748,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DECAS ",
        "Last Name": "JIRES",
        "Employee ID": 3575,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "SADOK ",
        "Last Name": "ISRAEL",
        "Employee ID": 3627,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "ABASI ",
        "Last Name": "PHILBETH",
        "Employee ID": 3401,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "FOREMAN",
        "Position WORD": NaN
    },
    {
        "First Name": "DEKASI ",
        "Last Name": "SAMSON",
        "Employee ID": 758,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "FOREMAN",
        "Position WORD": NaN
    },
    {
        "First Name": "NICHOLAUS ",
        "Last Name": "WILBARD",
        "Employee ID": 3628,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "PLUMBER",
        "Position WORD": NaN
    },
    {
        "First Name": "GODFREY ",
        "Last Name": "MKOMBACHEPA",
        "Employee ID": 3389,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "ELECTRICIAN",
        "Position WORD": NaN
    },
    {
        "First Name": "TEOFILO ",
        "Last Name": "RAPHAEL",
        "Employee ID": 3804,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "THADEO ",
        "Last Name": "RAPHAEL",
        "Employee ID": 3803,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "YASIR ",
        "Last Name": "JOEL",
        "Employee ID": 3986,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "EVANCE ",
        "Last Name": "NGARAMA",
        "Employee ID": 3985,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "STEVEN  ",
        "Last Name": "JACKSON",
        "Employee ID": 4228,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FADHILI JUMA ",
        "Last Name": "MAKABALA",
        "Employee ID": 4406,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "OPERATOR",
        "Position WORD": NaN
    },
    {
        "First Name": "AUSON ",
        "Last Name": "TIBAIGANA",
        "Employee ID": 4547,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "WELDER",
        "Position WORD": NaN
    },
    {
        "First Name": "EDSON ",
        "Last Name": "KAPALETA",
        "Employee ID": 4618,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "BATCH PLANT OPERATOR",
        "Position WORD": NaN
    },
    {
        "First Name": "RAPHAEL ",
        "Last Name": "KACHIRA",
        "Employee ID": 4670,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "TALSIS ",
        "Last Name": "MGANDO",
        "Employee ID": 4664,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "DONALD ",
        "Last Name": "VENACE",
        "Employee ID": 4669,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAFARI ",
        "Last Name": "MWIMBA",
        "Employee ID": 4665,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FRANK ",
        "Last Name": "JOSAM",
        "Employee ID": 4668,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RABISON ",
        "Last Name": "STANSLAUS",
        "Employee ID": 4667,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BERNARD ",
        "Last Name": "PAUL",
        "Employee ID": 3008,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "FOREMAN",
        "Position WORD": NaN
    },
    {
        "First Name": "NURU ",
        "Last Name": "MARCO",
        "Employee ID": 3029,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "TRIP CHECKER",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIA ",
        "Last Name": "HANGAIKO",
        "Employee ID": 3087,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "TRIP CHECKER",
        "Position WORD": NaN
    },
    {
        "First Name": "ISSA ",
        "Last Name": "AMANI",
        "Employee ID": 3805,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "ELECTRICIAN",
        "Position WORD": NaN
    },
    {
        "First Name": "JUMA ",
        "Last Name": "RASHID",
        "Employee ID": 4666,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FRANK ",
        "Last Name": "EDWARD",
        "Employee ID": 4765,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "BATCH PLANT OPERATOR",
        "Position WORD": NaN
    },
    {
        "First Name": "GIRIADY ",
        "Last Name": "WILSON",
        "Employee ID": 4973,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "MIXER DRIVER",
        "Position WORD": NaN
    },
    {
        "First Name": "KELVIN MOSES ",
        "Last Name": "MBAMBALA",
        "Employee ID": 4764,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "MIXER DRIVER",
        "Position WORD": NaN
    },
    {
        "First Name": "IRENE THADEO ",
        "Last Name": "BANTU",
        "Employee ID": 3319,
        "Department": "FACTORY",
        "Phone": 762499300,
        "Position": "LOGISTICS OFFICER",
        "Position WORD": NaN
    },
    {
        "First Name": "OBEID THOMAS ",
        "Last Name": "GUBACHE",
        "Employee ID": 4963,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "NIGHT SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "NELSON FRANCIS ",
        "Last Name": "MOSHI",
        "Employee ID": 4969,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "DATA CLERK",
        "Position WORD": NaN
    },
    {
        "First Name": "MUSA ",
        "Last Name": "RUDY",
        "Employee ID": 5021,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAUL ",
        "Last Name": "KAHELELE",
        "Employee ID": 4747,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NICHOLAUS ",
        "Last Name": "CHARLES",
        "Employee ID": 4912,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PETER ",
        "Last Name": "JOHN",
        "Employee ID": 5023,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TULIA  ",
        "Last Name": "DAMIANO",
        "Employee ID": 5025,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAIMON ",
        "Last Name": "KHALID",
        "Employee ID": 5026,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSEPH ",
        "Last Name": "DAUDI",
        "Employee ID": 5022,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EMMANUEL ELIAS ",
        "Last Name": "TARIMO",
        "Employee ID": 4990,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "SURVEYOR",
        "Position WORD": NaN
    },
    {
        "First Name": "MARIAM BONIFACE ",
        "Last Name": "KIBADA",
        "Employee ID": 5098,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "CLEANER",
        "Position WORD": NaN
    },
    {
        "First Name": "BARAKA JACKSON ",
        "Last Name": "MWITA",
        "Employee ID": 5101,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "TRIP CHECKER",
        "Position WORD": NaN
    },
    {
        "First Name": "STEVEN LESPIS ",
        "Last Name": "CHRISTOPHER",
        "Employee ID": 5100,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "TRIP CHECKER",
        "Position WORD": NaN
    },
    {
        "First Name": "SENTIARO THOMAS ",
        "Last Name": "PAUL",
        "Employee ID": 5109,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ALERUYA ZEFIRINI ",
        "Last Name": "MDUGO",
        "Employee ID": 5110,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOHN NDARICHAKO ",
        "Last Name": "NGARAMA",
        "Employee ID": 5111,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AMRI KIJIGO ",
        "Last Name": "SINDABHAKURANA",
        "Employee ID": 5112,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KABAGAMBE KAROLI ",
        "Last Name": "KIBAGO",
        "Employee ID": 5104,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AMRI REUBEN ",
        "Last Name": "MDUGO",
        "Employee ID": 5122,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BARAKA BUTAKALA ",
        "Last Name": "LUYOMBE",
        "Employee ID": 5123,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SHABANI PAISI ",
        "Last Name": "RUHOGO",
        "Employee ID": 5147,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HIGOMBEYE OBEID ",
        "Last Name": "MABEGA",
        "Employee ID": 5148,
        "Department": "FACTORY",
        "Phone": NaN,
        "Position": "DRIVER",
        "Position WORD": NaN
    },
    {
        "First Name": "ALKADO BRAISON",
        "Last Name": "JUMA",
        "Employee ID": 5028,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ANTON ANOD",
        "Last Name": "MALILA",
        "Employee ID": 5029,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ANTONI JAREDI",
        "Last Name": "CHUBWA",
        "Employee ID": 4445,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "ASHELI REONARD",
        "Last Name": "WILLIAM",
        "Employee ID": 5083,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "LAND HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AYUBU ANTON",
        "Last Name": "BUKOKE",
        "Employee ID": 5008,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKER",
        "Position WORD": NaN
    },
    {
        "First Name": "AZORI BAYAGA",
        "Last Name": "MPOFU",
        "Employee ID": 3088,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "BUNDARA HANGAISHA",
        "Last Name": "TENGANISHA",
        "Employee ID": 4717,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "DOZER OPERATOR",
        "Position WORD": NaN
    },
    {
        "First Name": "EDINA DANIEL",
        "Last Name": "KATAGA",
        "Employee ID": 5031,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EDSON BENARD",
        "Last Name": "MKOMA ",
        "Employee ID": 4562,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "EDSON TIALIZWA",
        "Last Name": "PAUL",
        "Employee ID": 4566,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "EDWARD DANIEL",
        "Last Name": "SETH",
        "Employee ID": 4577,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIZABETH MAKONDA",
        "Last Name": "NDALIHOLANYE",
        "Employee ID": 5032,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EMANUEL MKONO",
        "Last Name": "CHARLES ",
        "Employee ID": 4490,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "EMANUELY DANIEL",
        "Last Name": "BUNDALA",
        "Employee ID": 4484,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "ENOS LAMECK",
        "Last Name": "KAVULA",
        "Employee ID": 4570,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "ERICK ELIAS",
        "Last Name": "KAGINA",
        "Employee ID": 4541,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "ERICK EMMANUEL",
        "Last Name": "MUHONGE",
        "Employee ID": 4591,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "FAUSTA FANUEL",
        "Last Name": "KIDIMA",
        "Employee ID": 4482,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "FESTO ISACKA",
        "Last Name": "SABUKEYE ",
        "Employee ID": 4481,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "FRANK UNDERSON",
        "Last Name": "KAVUZE",
        "Employee ID": 5036,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "GABRIEL BENEDICTO",
        "Last Name": "BIYOLELO",
        "Employee ID": 5034,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "GABRIEL NDAYAVUGWA",
        "Last Name": "KIBELENGE",
        "Employee ID": 4474,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "GIBSON AGOSTINO",
        "Last Name": "RENDELI",
        "Employee ID": 4581,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "HERI VITUS",
        "Last Name": "STEWARD",
        "Employee ID": 5039,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "IMAN NTABO",
        "Last Name": "KIYICHA",
        "Employee ID": 5040,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "INNOCENT JUMA",
        "Last Name": "BARNABAS",
        "Employee ID": 5041,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "IRINE DIODON",
        "Last Name": "PIERRE",
        "Employee ID": 4607,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "ISACK HUSSEIN",
        "Last Name": "NKWEZI",
        "Employee ID": 5042,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JEREMIA CHUBWA",
        "Last Name": "NDAKAZI",
        "Employee ID": 4444,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "JIHISI NGOROBA",
        "Last Name": "NSANZUGWIMO",
        "Employee ID": 4447,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "JILALA SIMON",
        "Last Name": "SAYIDA",
        "Employee ID": 4455,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "JOISI BUZINGO",
        "Last Name": "KAGOMA",
        "Employee ID": 5015,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKER",
        "Position WORD": NaN
    },
    {
        "First Name": "JULIETHA EDWARD",
        "Last Name": "KACHUKUZI",
        "Employee ID": 5009,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "JUSTA MATAPILA",
        "Last Name": "KALIBHUBHUKE",
        "Employee ID": 5044,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KESSI MATESO",
        "Last Name": "SIMION",
        "Employee ID": 4537,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKER",
        "Position WORD": NaN
    },
    {
        "First Name": "LAHERI ZAKARIA",
        "Last Name": "MBUMBA",
        "Employee ID": 4478,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "LEAH SAMWEL",
        "Last Name": "LULIMBIYE",
        "Employee ID": 5033,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LUSIA GERVAS",
        "Last Name": "NZIHEBE",
        "Employee ID": 4475,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "MAARIFA MAKULILO",
        "Last Name": "NTABANDI",
        "Employee ID": 4441,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "MATHIAS DEUS",
        "Last Name": "MARTINE",
        "Employee ID": 4461,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "MESHACK RUBEGWA",
        "Last Name": "RULATAZE",
        "Employee ID": 5046,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NDAISENGA EDIMO",
        "Last Name": "EMMANUEL",
        "Employee ID": 4499,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "PAULINA ELISHA",
        "Last Name": "BUKURU",
        "Employee ID": 5047,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PENINA EMMANUEL",
        "Last Name": "SAMSONI",
        "Employee ID": 5048,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RABAN CHICHARO",
        "Last Name": "LUTOZI",
        "Employee ID": 5013,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKER",
        "Position WORD": NaN
    },
    {
        "First Name": "REBEKA SAMWEL",
        "Last Name": "KAMANA",
        "Employee ID": 4471,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "RICHARD BARAKA",
        "Last Name": "MATHIAS",
        "Employee ID": 4516,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "RUBEN FABIANO",
        "Last Name": "HAMISI",
        "Employee ID": 5050,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RUSIA KAGOMA",
        "Last Name": "MSIGARO",
        "Employee ID": 5051,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SADOCK DAUSON",
        "Last Name": "HARUNA",
        "Employee ID": 4493,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "SEBASTIAN THOBIAS",
        "Last Name": "MASUMBUKO",
        "Employee ID": 2937,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "SHEDURAKI KASASE",
        "Last Name": "GOMEGWA",
        "Employee ID": 5053,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SHELITIELI NELSON",
        "Last Name": "RAFAEL",
        "Employee ID": 4588,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "STELLA JOHN",
        "Last Name": "BUYAGAGI",
        "Employee ID": 4480,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "STEVE BARAKA",
        "Last Name": "EDWARD",
        "Employee ID": 5054,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TANU PAGASA",
        "Last Name": "BHAHUBHONA",
        "Employee ID": 5055,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "THOBIAS NGARAMA",
        "Last Name": "MISIMBO",
        "Employee ID": 4586,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "THOBIAS SADOCK",
        "Last Name": "RUCHATSI",
        "Employee ID": 5010,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "THOMAS ESTACHI",
        "Last Name": "MBONIFASI",
        "Employee ID": 5043,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "TREE BURNING",
        "Position WORD": NaN
    },
    {
        "First Name": "ULED LESPICH",
        "Last Name": "POLYKARIPO",
        "Employee ID": 5056,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "VEDASTUS CHRISTOPHER",
        "Last Name": "RICHARD",
        "Employee ID": 4466,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "VENAS DIDAS",
        "Last Name": "JUMANNE",
        "Employee ID": 4503,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "ZABULONI JEREMIA",
        "Last Name": "ZIRALIYE",
        "Employee ID": 5011,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "ZEBIA BARUTAZO",
        "Last Name": "MNYANIKO",
        "Employee ID": 4468,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "SHUHUDA MVUYE ",
        "Last Name": "FEDRICK",
        "Employee ID": 4527,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "AMBAKISYE LADISLAUS",
        "Last Name": "SIMION",
        "Employee ID": 3138,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROAD SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "KIBANGO TYABA ",
        "Last Name": "MUCHILO",
        "Employee ID": 4459,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": NaN
    },
    {
        "First Name": "ISACK MEDRACK ",
        "Last Name": "KAPULU",
        "Employee ID": 4587,
        "Department": "Land Department",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": NaN
    },
    {
        "First Name": "FATUMA OMARY",
        "Last Name": "NDWATTA",
        "Employee ID": 4787,
        "Department": "CIVIL",
        "Phone": 789882610,
        "Position": "CIVIL TECH",
        "Position WORD": NaN
    },
    {
        "First Name": "MELKIADES VALENTINE",
        "Last Name": "KABADI",
        "Employee ID": 3061,
        "Department": "CIVIL",
        "Phone": 743455832,
        "Position": "CIVIL TECH",
        "Position WORD": NaN
    },
    {
        "First Name": "SHALLOM HIROMIN",
        "Last Name": "MLAWA",
        "Employee ID": 4069,
        "Department": "CIVIL",
        "Phone": 680398644,
        "Position": "MATERIAL CONTROLLER",
        "Position WORD": NaN
    },
    {
        "First Name": "YOSHUA BENARD",
        "Last Name": "KAGINA",
        "Employee ID": 3202,
        "Department": "CIVIL",
        "Phone": 627410785,
        "Position": "SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "REGNALD LEOPOSTA",
        "Last Name": "RAPHAEL",
        "Employee ID": 4712,
        "Department": "CIVIL",
        "Phone": 769425564,
        "Position": "FOREMAN",
        "Position WORD": NaN
    },
    {
        "First Name": "ABEL MUHELEZI",
        "Last Name": "KIBUIHURU",
        "Employee ID": 4400,
        "Department": "CIVIL",
        "Phone": 765172721,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "RAJABU MUSSA",
        "Last Name": "MPOTWA",
        "Employee ID": 3407,
        "Department": "CIVIL",
        "Phone": 775849925,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "ALEX BWILINDE",
        "Last Name": "CHUBWA",
        "Employee ID": 4653,
        "Department": "CIVIL",
        "Phone": 763754104,
        "Position": "MASON/CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "DANIEL BENARD",
        "Last Name": "BUNUYE",
        "Employee ID": 3933,
        "Department": "CIVIL",
        "Phone": 742744467,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "DICKSON SAIMON",
        "Last Name": "MATHEW",
        "Employee ID": 4722,
        "Department": "CIVIL",
        "Phone": 625125591,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "BAKARI CHABOYA",
        "Last Name": "BIKINGI",
        "Employee ID": 3300,
        "Department": "CIVIL",
        "Phone": 697303425,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NDAYIZEYE KIBWANA",
        "Last Name": "JUMANNE",
        "Employee ID": 3333,
        "Department": "CIVIL",
        "Phone": 740935878,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NEHEMIA KASELA",
        "Last Name": "MBUMBUGULU",
        "Employee ID": 2734,
        "Department": "CIVIL",
        "Phone": 755742025,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LIBERATUS KABENZE",
        "Last Name": "NATHANAEL",
        "Employee ID": 2681,
        "Department": "CIVIL",
        "Phone": 622431753,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "AMOSI NOBERTH",
        "Last Name": "KINYOGOLI",
        "Employee ID": 2683,
        "Department": "CIVIL",
        "Phone": 767946001,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "MATHIAS ESTARCH",
        "Last Name": "BONIFAS",
        "Employee ID": 3155,
        "Department": "CIVIL",
        "Phone": 653184972,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "ROBERT ISAYA",
        "Last Name": "FANYE",
        "Employee ID": 2687,
        "Department": "CIVIL",
        "Phone": 654612451,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "THERESIA DAMIAN",
        "Last Name": "SHIRIMA",
        "Employee ID": 4329,
        "Department": "CIVIL",
        "Phone": 685663445,
        "Position": "PLUMBER",
        "Position WORD": NaN
    },
    {
        "First Name": "EZROM FRED",
        "Last Name": "KACHEKELO",
        "Employee ID": 2926,
        "Department": "CIVIL",
        "Phone": 652732154,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MARITIN SAMSON",
        "Last Name": "MARITIN",
        "Employee ID": 1235,
        "Department": "CIVIL",
        "Phone": 761010083,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "GODBERT PETER",
        "Last Name": "JULIUS",
        "Employee ID": 2690,
        "Department": "CIVIL",
        "Phone": 753009582,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "ALEX SAIDI",
        "Last Name": "PETRO",
        "Employee ID": 2931,
        "Department": "CIVIL",
        "Phone": 794277848,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TARATIBU BAHATI",
        "Last Name": "OBADIA",
        "Employee ID": 4779,
        "Department": "CIVIL",
        "Phone": 617912061,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "STAPHORD MICHAEL",
        "Last Name": "NGOMAGI",
        "Employee ID": 2899,
        "Department": "CIVIL",
        "Phone": 753440333,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "FAIDA NASHON",
        "Last Name": "BALANTUZA",
        "Employee ID": 2933,
        "Department": "CIVIL",
        "Phone": 760209074,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOLES",
        "Last Name": "JASTONE",
        "Employee ID": 1231,
        "Department": "CIVIL",
        "Phone": 627066025,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FUNZO ARON",
        "Last Name": "MKENEKENE",
        "Employee ID": 2951,
        "Department": "CIVIL",
        "Phone": 766120567,
        "Position": "PAINTER",
        "Position WORD": NaN
    },
    {
        "First Name": "YORAM SAID",
        "Last Name": "MYAZAGIRO",
        "Employee ID": 2935,
        "Department": "CIVIL",
        "Phone": 768762579,
        "Position": "PAINTER",
        "Position WORD": NaN
    },
    {
        "First Name": "PETRON NTASOMA",
        "Last Name": "ELIAS",
        "Employee ID": 4723,
        "Department": "CIVIL",
        "Phone": 745261067,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "ASHRAF HASSAN",
        "Last Name": "JAHMIEL",
        "Employee ID": 4714,
        "Department": "CIVIL",
        "Phone": 616308317,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "ENOS MAYUNGA",
        "Last Name": "KANDI",
        "Employee ID": 4718,
        "Department": "CIVIL",
        "Phone": 788038214,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "JORAM BULIBA",
        "Last Name": "KILAGA",
        "Employee ID": 4713,
        "Department": "CIVIL",
        "Phone": 764519021,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "MATHAYO ALBERTO",
        "Last Name": "PETRO",
        "Employee ID": 4766,
        "Department": "CIVIL",
        "Phone": 746211036,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "ELASTO AMOS",
        "Last Name": "THOBIAS",
        "Employee ID": 4239,
        "Department": "CIVIL",
        "Phone": 759820351,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "MATUNGWA JOHN",
        "Last Name": "PHILIMON",
        "Employee ID": 3318,
        "Department": "CIVIL",
        "Phone": 610909663,
        "Position": "MASON",
        "Position WORD": NaN
    },
    {
        "First Name": "ALIAN KASINDI",
        "Last Name": "KATOTO",
        "Employee ID": 2927,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BARAKA FAIDA",
        "Last Name": "MUBE",
        "Employee ID": 4654,
        "Department": "CIVIL",
        "Phone": 768688830,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "CLEMENCE",
        "Last Name": "BRIXIO LUGENGE",
        "Employee ID": 1046,
        "Department": "CIVIL",
        "Phone": 679153364,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KULWA NURU",
        "Last Name": "MANOTA",
        "Employee ID": 4711,
        "Department": "CIVIL",
        "Phone": 769990116,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "FITINA BUNWANGU",
        "Last Name": "KAJORO",
        "Employee ID": 4778,
        "Department": "CIVIL",
        "Phone": NaN,
        "Position": "HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KAIZILEGE JUMANNE",
        "Last Name": "LEVOCATUS",
        "Employee ID": 4770,
        "Department": "CIVIL",
        "Phone": 759032686,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "ISSA SALMON",
        "Last Name": "KADENDE",
        "Employee ID": 4961,
        "Department": "CIVIL",
        "Phone": 743765429,
        "Position": "CARPENTER",
        "Position WORD": NaN
    },
    {
        "First Name": "GLADISLAUS",
        "Last Name": "LAZARO",
        "Employee ID": 2669,
        "Department": "CIVIL",
        "Phone": 742907135,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BENEEDICTO JAMES",
        "Last Name": "MAGULU",
        "Employee ID": 4720,
        "Department": "CIVIL",
        "Phone": 749502098,
        "Position": "CIVIL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JASPAR COOSMAS",
        "Last Name": "NTASHOLEGWA",
        "Employee ID": 5087,
        "Department": "CIVIL",
        "Phone": 757142774,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "EZAECKIA OBADIA",
        "Last Name": "MAYUNGA",
        "Employee ID": 5088,
        "Department": "CIVIL",
        "Phone": 755487282,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "BELLAMU BONIPHACE",
        "Last Name": "KILAHA",
        "Employee ID": 5096,
        "Department": "CIVIL",
        "Phone": 757500942,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "PASKALI PAGATA",
        "Last Name": "LUKUNGU",
        "Employee ID": 5090,
        "Department": "CIVIL",
        "Phone": 621313103,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "SELA MIBULO",
        "Last Name": "LUSAKA",
        "Employee ID": 5089,
        "Department": "CIVIL",
        "Phone": 757340858,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "NELSON SHEM",
        "Last Name": "GWIHA",
        "Employee ID": 5097,
        "Department": "CIVIL",
        "Phone": 710813576,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "EMMANUEL THOMAS",
        "Last Name": "KILAHA",
        "Employee ID": 5103,
        "Department": "CIVIL",
        "Phone": 623804416,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "AMOS JOHN",
        "Last Name": "NGOFORI",
        "Employee ID": 5102,
        "Department": "CIVIL",
        "Phone": 742061515,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "BRYSON YOTHAM",
        "Last Name": "THOBIAS",
        "Employee ID": 5091,
        "Department": "CIVIL",
        "Phone": 763825742,
        "Position": "STEEL FIXER",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIFAZI     ",
        "Last Name": "MUSSA",
        "Employee ID": 3227,
        "Department": "PROCUREMENT",
        "Phone": 747022025,
        "Position": "PROCUREMENT OFFICER",
        "Position WORD": "Procurement Officer"
    },
    {
        "First Name": "LILIAN ",
        "Last Name": "MASHAURI",
        "Employee ID": 3886,
        "Department": "PROCUREMENT",
        "Phone": 614324869,
        "Position": "PROCUREMENT TRAINEE",
        "Position WORD": "Procurement Trainee"
    },
    {
        "First Name": "AZIZ  ",
        "Last Name": "OMARY",
        "Employee ID": 3045,
        "Department": "PROCUREMENT",
        "Phone": 685765175,
        "Position": "PROCUREMENT OFFICER",
        "Position WORD": "Procuremt Data clerk"
    },
    {
        "First Name": "ABRAHAM WILLIAM",
        "Last Name": "BANDI",
        "Employee ID": 4829,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ADIJA CHIZA",
        "Last Name": "GWAHIYE",
        "Employee ID": 3899,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AGATO ALFRED",
        "Last Name": "NYAKITI",
        "Employee ID": 3567,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AGNESS JOSEPH",
        "Last Name": "PETRO",
        "Employee ID": 4832,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AGRIPINA BRAISON",
        "Last Name": "CHUMA",
        "Employee ID": 4841,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AHADI",
        "Last Name": "MILTON",
        "Employee ID": 1533,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AKIBA SHERIA",
        "Last Name": "PASKARI",
        "Employee ID": 3510,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ALENA HABIRI",
        "Last Name": "NDIMUGWANKHO",
        "Employee ID": 3548,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ALI ZABRON",
        "Last Name": "YONA",
        "Employee ID": 4376,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ALLY RAJABU",
        "Last Name": "AHMED",
        "Employee ID": 4671,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "AGRICULTURE SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "ALUFAN HAMISI",
        "Last Name": "CHABOYA",
        "Employee ID": 3540,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AMON HOSEA",
        "Last Name": "NCHULA",
        "Employee ID": 3578,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "AMOS ALFRED",
        "Last Name": "NYAKITI",
        "Employee ID": 3409,
        "Department": "AGRICULTURE",
        "Phone": 760602518,
        "Position": "AGRICULTURAL DATA CLERK",
        "Position WORD": NaN
    },
    {
        "First Name": "AMOS JOHNSTONE",
        "Last Name": "KAZENGA",
        "Employee ID": 3798,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ANDASON KASONGE",
        "Last Name": "KANYAMANZA",
        "Employee ID": 4306,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ANDREW NTIYAMAGWA",
        "Last Name": "TABIKA",
        "Employee ID": 4220,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "AGRICULTURE SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "ANGELA YOLONIMU",
        "Last Name": "MATHAYO",
        "Employee ID": 3791,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ANGELISTER KITANDALA",
        "Last Name": "MNYOGWA",
        "Employee ID": 4988,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ANJELA DAUSONI",
        "Last Name": "HARUNA",
        "Employee ID": 3778,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ANODI JONASI",
        "Last Name": "BILAHENDA",
        "Employee ID": 4763,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ARON AMOS",
        "Last Name": "BAHATI",
        "Employee ID": 3520,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ASHERY WILLISON",
        "Last Name": "KACHIRA",
        "Employee ID": 4985,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ASIFIWE VITARI",
        "Last Name": "BHZOYA",
        "Employee ID": 3559,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ATHANAS GODERED",
        "Last Name": "KAMONDO",
        "Employee ID": 3889,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "AGRICULTURE SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "AYUBU YOHANA",
        "Last Name": "BHURAHENDA",
        "Employee ID": 4084,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BADILIKO RAMADHANI",
        "Last Name": "ATHUMAN",
        "Employee ID": 4986,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BALEKELE MWAKALAJA",
        "Last Name": "BUYUNGU",
        "Employee ID": 3067,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BARAKA",
        "Last Name": "ABEL",
        "Employee ID": 330,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BARAKA DANIEL",
        "Last Name": "KAGOMA",
        "Employee ID": 4810,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BETRAM HAMENYA",
        "Last Name": "CHOBASAMIE",
        "Employee ID": 3976,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BOAZ NIKOLAUS",
        "Last Name": "MUGOTI",
        "Employee ID": 4262,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BONIFACE",
        "Last Name": "PETRO",
        "Employee ID": 188,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "BRAITON SADOKI",
        "Last Name": "KABONA",
        "Employee ID": 4039,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "CHARLES KAGOMA",
        "Last Name": "MGANYALI",
        "Employee ID": 4816,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DAFROZA PASCHAL",
        "Last Name": "MASABILE",
        "Employee ID": 3912,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DAFROZA YONAH",
        "Last Name": "NTANDIKIYE",
        "Employee ID": 3308,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DAINES LAURENT",
        "Last Name": "BIYARUSHENGO",
        "Employee ID": 4902,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DANIEL ELIAS",
        "Last Name": "DANIEL",
        "Employee ID": 4183,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DAUD BUHOMANO",
        "Last Name": "FABIAN",
        "Employee ID": 4795,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DAUDI CHUYA",
        "Last Name": "NENGESELI",
        "Employee ID": 3657,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DAUSON TITUS",
        "Last Name": "SALVATORY",
        "Employee ID": 3373,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DENNIS SIMON",
        "Last Name": "NDESAMBURO",
        "Employee ID": 4626,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "AGRICULTURE SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "DEUS KAJORO",
        "Last Name": "DAUDI",
        "Employee ID": 4981,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DIANA",
        "Last Name": "JUMA",
        "Employee ID": 1166,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DORATHA MOHAMED",
        "Last Name": "KAZIGE",
        "Employee ID": 4934,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DOTTO CHARLES",
        "Last Name": "KAYUNGIRO",
        "Employee ID": 3580,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EBRON",
        "Last Name": "EVARISTO",
        "Employee ID": 927,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EDINA KULUBONE",
        "Last Name": "KAZIMOTO",
        "Employee ID": 3272,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EDSON PETER",
        "Last Name": "KIVYININDGWA",
        "Employee ID": 4091,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EDWARD ANTHONY",
        "Last Name": "SAYUKI",
        "Employee ID": 4157,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EDWARD EMANUEL",
        "Last Name": "OBADIA",
        "Employee ID": 4760,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIA",
        "Last Name": "GERVAS",
        "Employee ID": 191,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIABU ELIAS",
        "Last Name": "KINYAMUGELA",
        "Employee ID": 4317,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ELISHA NYAMWERU",
        "Last Name": "ISIDORY",
        "Employee ID": 4894,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIUD NTEZILIBA",
        "Last Name": "KAGINA ",
        "Employee ID": 4906,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIZABETH ONESMO",
        "Last Name": "PILI",
        "Employee ID": 4987,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EMANUEL RUGIGA",
        "Last Name": "MISUNGWI",
        "Employee ID": 3562,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EMMANUEL JONAS",
        "Last Name": "MAKUMIBIL",
        "Employee ID": 3539,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ENOS NTABANDI",
        "Last Name": "RUMANIKA",
        "Employee ID": 3065,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ERENEST RICHARD",
        "Last Name": "ELIAS",
        "Employee ID": 3491,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ERICK KALIYO",
        "Last Name": "ALFRED",
        "Employee ID": 4745,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ERICK MICHAEL",
        "Last Name": "MAKUPI",
        "Employee ID": 4270,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ESAU HERMAN",
        "Last Name": "MARKO",
        "Employee ID": 3658,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ESPELANSE KALOLI",
        "Last Name": "OBED",
        "Employee ID": 3275,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ESSAU",
        "Last Name": "WILLIAM",
        "Employee ID": 453,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ESTA THOMAS",
        "Last Name": "ELIAS",
        "Employee ID": 3792,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EVERADA BONIFANCE",
        "Last Name": "SANDO",
        "Employee ID": 4792,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EZIRA MANENO",
        "Last Name": "MASARA",
        "Employee ID": 3508,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EZIROM NZIHABANDI",
        "Last Name": "BULENDA",
        "Employee ID": 3509,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FAIDA ABERI",
        "Last Name": "JEMSI",
        "Employee ID": 3793,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FAINES ATHUMAN",
        "Last Name": "BASIGIYE",
        "Employee ID": 3758,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FAUSTA WAKUTUMWA",
        "Last Name": "RADSILAUS",
        "Employee ID": 3772,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FERIKAS MIKAELI",
        "Last Name": "LEYA",
        "Employee ID": 4890,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FESTO MASHINGA",
        "Last Name": "NYABASHITSI",
        "Employee ID": 3799,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FILIPO CHIZA",
        "Last Name": "BAZOMBAZA",
        "Employee ID": 3498,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FRANCES KAIREMBO",
        "Last Name": "GODFREY",
        "Employee ID": 3560,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FRANK TATIZO",
        "Last Name": "MIDARAZO",
        "Employee ID": 3511,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "GIDION CHUBWA",
        "Last Name": "BITIMBA",
        "Employee ID": 4025,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "GIZBERT ALPHONCE",
        "Last Name": "MATHEW",
        "Employee ID": 2941,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "PAINTER",
        "Position WORD": NaN
    },
    {
        "First Name": "GIZBERT GARUS",
        "Last Name": "SEBASTIANO",
        "Employee ID": 4029,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "GODLOVE WISTON",
        "Last Name": "STEVEN",
        "Employee ID": 4221,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "AGRICULTURE SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "GRACE ROBERT",
        "Last Name": "SENSEMA",
        "Employee ID": 3532,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HAJI ZAWADI",
        "Last Name": "SIZI",
        "Employee ID": 3079,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HALIMESHI JACKSON",
        "Last Name": "LUVUMUHILA",
        "Employee ID": 4755,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HAYAISHI ABDALA",
        "Last Name": "MALILA",
        "Employee ID": 3080,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HESHITON RAPHAEL",
        "Last Name": "NESTORY",
        "Employee ID": 4882,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HUSSEIN ATHONY",
        "Last Name": "JANUARY",
        "Employee ID": 3756,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ILAKIZA STEPHEN",
        "Last Name": "DAMAS",
        "Employee ID": 3556,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "IMANI JUMA",
        "Last Name": "KAVAMAHANGA",
        "Employee ID": 3787,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ISAAC JOSEPH",
        "Last Name": "BINDE",
        "Employee ID": 2977,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ISAKA IBRAHIMU",
        "Last Name": "KAZUBA",
        "Employee ID": 3374,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ISAYA TATIZO",
        "Last Name": "MAKULILO",
        "Employee ID": 3909,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JACKLINA MIKEL",
        "Last Name": "MABONDO",
        "Employee ID": 3568,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JEFTA",
        "Last Name": "MASUMBUKA",
        "Employee ID": 551,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JENIFA JECONIUS",
        "Last Name": "NELSON",
        "Employee ID": 4289,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JERAD NIKOLAUS",
        "Last Name": "MUHEALAHISE",
        "Employee ID": 3145,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JEREMIA ISAYA",
        "Last Name": "NCHURA",
        "Employee ID": 4132,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOHN ANTHONY",
        "Last Name": "KAHUGANO",
        "Employee ID": 4335,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOHN JUMA",
        "Last Name": "MASANJA",
        "Employee ID": 4002,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOINA",
        "Last Name": "JOHN",
        "Employee ID": 1553,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOINES FEDRICK",
        "Last Name": "MABULUKI",
        "Employee ID": 3551,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOISI TRYPHONE",
        "Last Name": "FABIANO",
        "Employee ID": 3505,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JONASI PAULO",
        "Last Name": "KITEYE",
        "Employee ID": 4828,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSEPH PASCHAL",
        "Last Name": "SANDE",
        "Employee ID": 4178,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSEPHINA TABU",
        "Last Name": "BUSAGE",
        "Employee ID": 3538,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSHUA",
        "Last Name": "MSALABA",
        "Employee ID": 1435,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSHUA MALE",
        "Last Name": "MUSSA",
        "Employee ID": 3368,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSLINE BARABARA",
        "Last Name": "BURENDA",
        "Employee ID": 3652,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOTAMU",
        "Last Name": "ABUMAELY",
        "Employee ID": 168,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOVINA HARUNA",
        "Last Name": "ILAGERA",
        "Employee ID": 3776,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KAGINA BIDUDA",
        "Last Name": "RUBUNO",
        "Employee ID": 4900,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KAMARO",
        "Last Name": "KAGINA",
        "Employee ID": 723,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KASIMILI CHARLES",
        "Last Name": "KACHANA",
        "Employee ID": 4878,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "KENNEDI YONA",
        "Last Name": "NTANDIKIYE",
        "Employee ID": 3588,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LAWI MALAKI",
        "Last Name": "NGALAMA",
        "Employee ID": 3375,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LEOCADIA JAMES",
        "Last Name": "MEZA",
        "Employee ID": 3579,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LEONIA JUMA",
        "Last Name": "LUGINA",
        "Employee ID": 4942,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LIGHTNES EMMANUEL",
        "Last Name": "BHILAZOBANYE",
        "Employee ID": 4989,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LIMI SHIJA",
        "Last Name": "MAHNYAMAWA",
        "Employee ID": 4033,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LUCIA YUSUFU",
        "Last Name": "KASE",
        "Employee ID": 4850,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LUKA NESTORY",
        "Last Name": "NESTORY",
        "Employee ID": 3271,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LUKAS DOTTO",
        "Last Name": "GITI",
        "Employee ID": 3640,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "LUSIA CHRISTOPHER",
        "Last Name": "GEREGOLI",
        "Employee ID": 3531,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MADELAKA NZIKWILINDA",
        "Last Name": "MAGAZI",
        "Employee ID": 4362,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MADUKA",
        "Last Name": "SIM0N",
        "Employee ID": 2728,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MAGIRETH KORONEL",
        "Last Name": "DAUDI",
        "Employee ID": 3554,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MAGRETH",
        "Last Name": "NESTORY",
        "Employee ID": 611,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MAGRETH",
        "Last Name": "RASHIDI",
        "Employee ID": 661,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MAGRETH MESHI",
        "Last Name": "RICHARD",
        "Employee ID": 3516,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MAJALIWA",
        "Last Name": "JASON",
        "Employee ID": 2730,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MAJALIWA LAMECK",
        "Last Name": "RAPHAEL",
        "Employee ID": 3993,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MAJUTO",
        "Last Name": "KUFULU",
        "Employee ID": 1167,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MALAKI KALABASIGA",
        "Last Name": "BITAMA",
        "Employee ID": 4762,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MAREMBO SIMON",
        "Last Name": "NDABIRECHE",
        "Employee ID": 3494,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MARIAM ELIAS",
        "Last Name": "MASAMBILO",
        "Employee ID": 3764,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MARIAM PAULO",
        "Last Name": "MCHUNGYE",
        "Employee ID": 3261,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MASHAKA",
        "Last Name": "HAMAD",
        "Employee ID": 189,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MELINA KAHATA",
        "Last Name": "MGANI",
        "Employee ID": 4356,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MELIS BWANDU",
        "Last Name": "BALENGA",
        "Employee ID": 3552,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MELISIANA EVARIST",
        "Last Name": "RUHUTA",
        "Employee ID": 4935,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MESHACK ANGELOUS",
        "Last Name": "RULIHO",
        "Employee ID": 3495,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "METHOD SADOCK",
        "Last Name": "BALAHAYE",
        "Employee ID": 3365,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MICHAEL JACKSON",
        "Last Name": "BUFIMBILI",
        "Employee ID": 4293,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MILEMBI",
        "Last Name": "SABHOYA",
        "Employee ID": 774,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MILIKA",
        "Last Name": "REKALASTO",
        "Employee ID": 392,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MISIGARO EMILIENE",
        "Last Name": "ANTHONY",
        "Employee ID": 4164,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MPAJI",
        "Last Name": "STEPHANO",
        "Employee ID": 1691,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NDAYA NYANANA",
        "Last Name": "VYOHOHA",
        "Employee ID": 4128,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NESIA JARED",
        "Last Name": "SAID",
        "Employee ID": 3983,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NICHOLOUS NESTORY",
        "Last Name": "CHIRISTOPHA",
        "Employee ID": 3965,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NIMRODI MIKA",
        "Last Name": "JOHN",
        "Employee ID": 3518,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NTAHOPAGASE LEO",
        "Last Name": "NIDAS",
        "Employee ID": 4246,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "NURU BUZILI",
        "Last Name": "MBOGOYE",
        "Employee ID": 3781,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ODAS BENARD",
        "Last Name": "BADOMYE",
        "Employee ID": 4014,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "OLISA MALAKI",
        "Last Name": "KALIMANZILA",
        "Employee ID": 4368,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "OMBENI MWOLO",
        "Last Name": "CHULILA",
        "Employee ID": 3173,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ONESIMO OSACAR",
        "Last Name": "NTAMOBWA",
        "Employee ID": 4008,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ORIVER RAPHAEL",
        "Last Name": "MUGUDE",
        "Employee ID": 4000,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PASCHAL BENARD",
        "Last Name": "KILAMWAGIYE",
        "Employee ID": 3643,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PASKALE EDWARD",
        "Last Name": "BUCHUMI",
        "Employee ID": 4264,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PAULO PATRICK",
        "Last Name": "ELISHA",
        "Employee ID": 4750,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PEGILINA KABURUBE",
        "Last Name": "KIRIMBA",
        "Employee ID": 3898,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PENDO MATAIFA",
        "Last Name": "GOGOJO",
        "Employee ID": 3761,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PENINA SAIMON",
        "Last Name": "NGENDA",
        "Employee ID": 4105,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PETRO WILSON",
        "Last Name": "JUBA",
        "Employee ID": 3641,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "PHILIMON JUMA",
        "Last Name": "RAJABU",
        "Employee ID": 4748,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RAJABU",
        "Last Name": "JOHN",
        "Employee ID": 588,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RAJABU BAVUGAMESHI",
        "Last Name": "RICHARD",
        "Employee ID": 3488,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RAMBATI DAMIANO",
        "Last Name": "TABIKA",
        "Employee ID": 4125,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RAPHAEL SIMON",
        "Last Name": "CHALLES",
        "Employee ID": 3600,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RATIFA AYOUB",
        "Last Name": "SHABANI",
        "Employee ID": 3174,
        "Department": "AGRICULTURE",
        "Phone": 792555384,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RAZAKI TEGEMEO",
        "Last Name": "JOHN",
        "Employee ID": 3998,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "REBEKA EMANUEL",
        "Last Name": "KAYEBEKA",
        "Employee ID": 3550,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "REGINA JUMA",
        "Last Name": "CHIZA",
        "Employee ID": 3646,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "REHEMA AMONI",
        "Last Name": "JOHN",
        "Employee ID": 3763,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "REHEMA BRAISON",
        "Last Name": "JUMA",
        "Employee ID": 4840,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "REHEMA MANAGANE",
        "Last Name": "BATAKANWA",
        "Employee ID": 3582,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RENATUS SAIMON",
        "Last Name": "SIZIMWE",
        "Employee ID": 4012,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RETISIA MESHI",
        "Last Name": "RICHARD",
        "Employee ID": 3525,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RICHARD ELIAS",
        "Last Name": "MASAHANI",
        "Employee ID": 4181,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ROBERT MSAFIRI",
        "Last Name": "WILLIAM ",
        "Employee ID": 4733,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ROSANA ANDREA",
        "Last Name": "KABUNELO",
        "Employee ID": 3919,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "RUSIANA DAUDI",
        "Last Name": "CHULI",
        "Employee ID": 4984,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAFARI LUCAS",
        "Last Name": "ENGEREBETI",
        "Employee ID": 3372,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SALUMU ANDREA",
        "Last Name": "NSIGAYE",
        "Employee ID": 3597,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAMSON PASCHAL",
        "Last Name": "MUGUNDA",
        "Employee ID": 3175,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAMWEL ELIASI",
        "Last Name": "KINYAMUGERA",
        "Employee ID": 4741,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAVAI NDABHARINZE",
        "Last Name": "BAFATA",
        "Employee ID": 4005,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SELESTINE BONIMA",
        "Last Name": "KAVULA",
        "Employee ID": 4254,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SETH WILIJESI",
        "Last Name": "DABAGILIYE",
        "Employee ID": 3984,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SHABIRI",
        "Last Name": "SALEHE",
        "Employee ID": 2729,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SHUKURU JUVENTUS",
        "Last Name": "OSWARD",
        "Employee ID": 3507,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SHUKURU NASHONI",
        "Last Name": "CHIZA",
        "Employee ID": 3513,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SIJAONA EVARIST",
        "Last Name": "KAGOMA",
        "Employee ID": 4318,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SIKUJUA",
        "Last Name": "ABDALAH",
        "Employee ID": 449,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SILASI SAMAHAN",
        "Last Name": "FIKIRI",
        "Employee ID": 4031,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SIMON HAMISI",
        "Last Name": "MISANA",
        "Employee ID": 4110,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SOFIA ANDREW",
        "Last Name": "KABONERANO",
        "Employee ID": 3753,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SOPHIA",
        "Last Name": "DAMAS",
        "Employee ID": 196,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SOSITENES TANU",
        "Last Name": "WAMBUYE",
        "Employee ID": 4065,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "STELLA",
        "Last Name": "DANIFORD",
        "Employee ID": 623,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "STELLA CHUBWA",
        "Last Name": "MUGOZI",
        "Employee ID": 4357,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "STEVEN BAHATI",
        "Last Name": "STEVEN",
        "Employee ID": 4126,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "STEWARD MOSES",
        "Last Name": "NKULIKIYE",
        "Employee ID": 3358,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TACHO SANZEGWIMO",
        "Last Name": "KAGOMA",
        "Employee ID": 4307,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TATU AMALDI",
        "Last Name": "COSMAS",
        "Employee ID": 3573,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TEODORA",
        "Last Name": "CHARLES",
        "Employee ID": 2726,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "THOMAS",
        "Last Name": "MASANJA",
        "Employee ID": 1539,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "THOMAS JOHN",
        "Last Name": "JOHN",
        "Employee ID": 3069,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TIMOTHEO DAMIANO",
        "Last Name": "TABIKA ",
        "Employee ID": 4130,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "TRISA LEOPOLD",
        "Last Name": "NYAMWERU",
        "Employee ID": 4011,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "VAILETH RADISLAUS",
        "Last Name": "KAGOLOBA",
        "Employee ID": 3802,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "VARES RUVUNAGU",
        "Last Name": "AGRICULTURE",
        "Employee ID": 3806,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "AGRICULTURE SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "VICENT TITO",
        "Last Name": "SAMBILINGA",
        "Employee ID": 4114,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "AGRICULTURE SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "VUMILIA JUMA",
        "Last Name": "ROBERT",
        "Employee ID": 3780,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "WILSON SELEMAN",
        "Last Name": "NDOLEZI",
        "Employee ID": 4045,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "YESSE SYLIVESTER",
        "Last Name": "SILVESTA",
        "Employee ID": 3095,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "YOEL ESSAU",
        "Last Name": "DYANKA",
        "Employee ID": 3561,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "YOHANA KAGONGO",
        "Last Name": "CHUBWA",
        "Employee ID": 3370,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "YORAM TANU",
        "Last Name": "BARAGOMWA",
        "Employee ID": 3890,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "YUSTO",
        "Last Name": "WILLIAM",
        "Employee ID": 1366,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ZAKARIA JOHN",
        "Last Name": "KAZWIGA",
        "Employee ID": 4173,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ZERA AMON",
        "Last Name": "KASINO",
        "Employee ID": 3795,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ZUHURA RASHIDI",
        "Last Name": "MAFUNI",
        "Employee ID": 3923,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "JOSEPH AMRI",
        "Last Name": "KILUNDURU",
        "Employee ID": 21,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "HEADMAN",
        "Position WORD": NaN
    },
    {
        "First Name": "FADHILA JAILOS",
        "Last Name": "BASIGYE",
        "Employee ID": 2820,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "AGRICULTURAL DATA CLERK",
        "Position WORD": NaN
    },
    {
        "First Name": "TEGEMEO",
        "Last Name": "BENDA",
        "Employee ID": 39,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "FIELD SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "DAVID ANGOLELEGE",
        "Last Name": "MWASAMBO",
        "Employee ID": 7,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "SOIL AND WATER ANALYSTI",
        "Position WORD": NaN
    },
    {
        "First Name": "TAZAN MARIUS",
        "Last Name": "SHAMBA",
        "Employee ID": 813,
        "Department": "AGRICULTURE",
        "Phone": NaN,
        "Position": "FARM OFFICER",
        "Position WORD": NaN
    },
    {
        "First Name": "PENINA KAJORO",
        "Last Name": "DAUDI",
        "Employee ID": 34,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "ERNEST BILANGAMILA",
        "Last Name": "MPFANYE",
        "Employee ID": 9,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "HEADMAN",
        "Position WORD": NaN
    },
    {
        "First Name": "ERISTON  SIYAJARI",
        "Last Name": "PETRO",
        "Employee ID": 1302,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "BACK HOE OP",
        "Position WORD": "BACK HOE OP"
    },
    {
        "First Name": "VIVIAN SALUM",
        "Last Name": "MHITILA",
        "Employee ID": 2997,
        "Department": "LAND DEVELOPMENT",
        "Phone": 783895163,
        "Position": "DATA CLERK",
        "Position WORD": "DATA CLERK"
    },
    {
        "First Name": "REMIJIO NKULIKIE",
        "Last Name": "CASPORI",
        "Employee ID": 5049,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "GENERAL HELPER",
        "Position WORD": "GENERAL HELPER"
    },
    {
        "First Name": "DEUS EXPERIUS",
        "Last Name": "NDIMUGWANKO",
        "Employee ID": 3089,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": "ROOT COLLECTION"
    },
    {
        "First Name": "BARIKI MASHITUKIO",
        "Last Name": "CHABOYA",
        "Employee ID": 3273,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "ROOT COLLECTION",
        "Position WORD": "ROOT COLLECTION"
    },
    {
        "First Name": "HAMADI   KAMUNTU",
        "Last Name": "MUFANYE",
        "Employee ID": 5014,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "ROOT PICKER",
        "Position WORD": "ROOT PICKER"
    },
    {
        "First Name": "JAMES CALYST",
        "Last Name": "LUKAS",
        "Employee ID": 4498,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": "ROOT PICKERS"
    },
    {
        "First Name": "NDAILANGIJE RAMADHAN ",
        "Last Name": "JOHN ",
        "Employee ID": 4502,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": "ROOT PICKERS"
    },
    {
        "First Name": "JEREMIA CHUBWA",
        "Last Name": "NDAKASI",
        "Employee ID": 4529,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": "ROOT PICKERS"
    },
    {
        "First Name": "REGAN RICHARD",
        "Last Name": "CHUBWA",
        "Employee ID": 4576,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "ROOT PICKERS",
        "Position WORD": "ROOT PICKERS"
    },
    {
        "First Name": "BEATRICE CHUBWA",
        "Last Name": "KANYAMIGINA",
        "Employee ID": 4469,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": "STONE COLLECTION"
    },
    {
        "First Name": "BORA NTACHO",
        "Last Name": "NTOBANDEKEYE",
        "Employee ID": 4472,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": "STONE COLLECTION"
    },
    {
        "First Name": "YESE NAFTARI",
        "Last Name": "HAJAYANDI",
        "Employee ID": 4477,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": "STONE COLLECTION"
    },
    {
        "First Name": "ZAKARIA RAPHAEL",
        "Last Name": "MATABALO",
        "Employee ID": 4494,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "STONE COLLECTION",
        "Position WORD": "STONE COLLECTION"
    },
    {
        "First Name": "MAUMBILE SIX",
        "Last Name": "NTUKAMAZINA",
        "Employee ID": 28,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "LUCIA SAID ",
        "Last Name": "SHOBORA",
        "Employee ID": 2665,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "MARTIN CRISTOPHER",
        "Last Name": "KABUGA",
        "Employee ID": 2847,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "RIZIKI JOHN",
        "Last Name": "MGINA",
        "Employee ID": 3584,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "PASCHAL JOSEPH",
        "Last Name": "STEPHANO",
        "Employee ID": 2836,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "WHEEL LOADER OP",
        "Position WORD": "WHEEL LOADER OP"
    },
    {
        "First Name": "LUCAS   MOSES",
        "Last Name": "LAIZER",
        "Employee ID": 4662,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "WHEEL LOADER OP",
        "Position WORD": "WHEEL LOADER OP"
    },
    {
        "First Name": "ONESMO JUSTIN",
        "Last Name": "MAKOBELA",
        "Employee ID": 983,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "WHEEL LOADER OPERATOR",
        "Position WORD": "WHEEL LOADER OPERATOR"
    },
    {
        "First Name": "ERICK NGALIHYA",
        "Last Name": "KUMALIJA",
        "Employee ID": 3878,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "FURAISIKA SAMSONI",
        "Last Name": "MURAMRA",
        "Employee ID": 13,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "TRACTOR DRIVER",
        "Position WORD": "TRACTOR DRIVER"
    },
    {
        "First Name": "VEREJINIA VENANCE",
        "Last Name": "DIONIZ",
        "Employee ID": 2693,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "TRACTOR OPERATOR",
        "Position WORD": "TRACTOR OPERATOR"
    },
    {
        "First Name": "ELINAMI NKIRWA",
        "Last Name": "KAAYA",
        "Employee ID": 3406,
        "Department": "CASUAL LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": NaN,
        "Position WORD": "CRANE OPERATOR"
    },
    {
        "First Name": "BENSON",
        "Last Name": "BETRAM",
        "Employee ID": 1230,
        "Department": "LAND DEVELOPMENT",
        "Phone": NaN,
        "Position": "BACKHOE OPERATOR",
        "Position WORD": "BACKHOE OPERATOR"
    },
    {
        "First Name": "KATINGA SULEIMAN",
        "Last Name": "KANTINGA",
        "Employee ID": 1147,
        "Department": "ELECTRICAL",
        "Phone": 697049393,
        "Position": "ELECTRICAL ENGINEER",
        "Position WORD": "ELECTRICAL ENGINEER"
    },
    {
        "First Name": "GEOFFREY ANDREW",
        "Last Name": "MKOMBACHEPA",
        "Employee ID": 3389,
        "Department": "ELECTRICAL",
        "Phone": 755755008,
        "Position": "ELECTRICIAN",
        "Position WORD": "ELECTRICIAN"
    },
    {
        "First Name": "ISMAIL JUMA",
        "Last Name": "MASOUD",
        "Employee ID": 219,
        "Department": "ELECTRICAL",
        "Phone": 624321617,
        "Position": "ELECTRICIAN",
        "Position WORD": "ELECTRICIAN"
    },
    {
        "First Name": "FORTUNATUS STEPHAN",
        "Last Name": "KIMARO",
        "Employee ID": 1317,
        "Department": "ELECTRICAL",
        "Phone": 712836998,
        "Position": "ELECTRICIAN",
        "Position WORD": "ELECTRICIAN"
    },
    {
        "First Name": "LEOPORD ERNEST",
        "Last Name": "DEOGRATIUS",
        "Employee ID": 3166,
        "Department": "ELECTRICAL",
        "Phone": 742728750,
        "Position": "ELECTRICIAN",
        "Position WORD": "ELECTRICIAN"
    },
    {
        "First Name": "JOHN HIPOLITY",
        "Last Name": "MAKOI",
        "Employee ID": 2857,
        "Department": "ELECTRICAL",
        "Phone": 756645700,
        "Position": "AIRCON TECHNICIAN",
        "Position WORD": "AIRCON TECHNICIAN"
    },
    {
        "First Name": "JAMES ADAM",
        "Last Name": "MWAIPOPO",
        "Employee ID": 2858,
        "Department": "ELECTRICAL",
        "Phone": 782138040,
        "Position": "AIRCON TECHNICIAN",
        "Position WORD": "AIRCON TECHNICIAN"
    },
    {
        "First Name": "ISSA",
        "Last Name": "AMANI",
        "Employee ID": 3805,
        "Department": "ELECTRICAL",
        "Phone": 615300378,
        "Position": "ASSISTANT ELECTRICIAN",
        "Position WORD": "ASSISTANT ELECTRICIAN"
    },
    {
        "First Name": "SHAIBU DOTTO",
        "Last Name": "MPENZWA",
        "Employee ID": 2629,
        "Department": "ELECTRICAL",
        "Phone": 699482426,
        "Position": "ASSISTANT ELECTRICIAN",
        "Position WORD": "ASSISTANT ELECTRICIAN"
    },
    {
        "First Name": "DENIS MICHAEL",
        "Last Name": "KULWA",
        "Employee ID": 2619,
        "Department": "ELECTRICAL",
        "Phone": 628843835,
        "Position": "ASSISTANT ELECTRICIAN",
        "Position WORD": "ASSISTANT ELECTRICIAN"
    },
    {
        "First Name": "JENIPHER MAYALA",
        "Last Name": "ANDREW",
        "Employee ID": 2985,
        "Department": "ADMINISTRATION",
        "Phone": 782513284,
        "Position": "ASST ACCOUNTANT ",
        "Position WORD": NaN
    },
    {
        "First Name": "AMAN ",
        "Last Name": "MUKSIN",
        "Employee ID": 2717,
        "Department": "ADMINISTRATION",
        "Phone": 785355051,
        "Position": "COST ANALYST",
        "Position WORD": NaN
    },
    {
        "First Name": "EVIDENCE BANTULAKI",
        "Last Name": "YOHANA",
        "Employee ID": 2939,
        "Department": "ADMINISTRATION",
        "Phone": 68717850,
        "Position": "DATA ANALYST",
        "Position WORD": NaN
    },
    {
        "First Name": "FRANK EVARIST",
        "Last Name": "KIDOHELA",
        "Employee ID": 310,
        "Department": "IT",
        "Phone": 629488156,
        "Position": "MT IT",
        "Position WORD": NaN
    },
    {
        "First Name": "HOPE STEPHEN",
        "Last Name": "CHULEHA",
        "Employee ID": 2795,
        "Department": "ADMINISTRATION",
        "Phone": 756541854,
        "Position": "SECRETARY",
        "Position WORD": NaN
    },
    {
        "First Name": "RAHABU GILBERT",
        "Last Name": "SILWANI",
        "Employee ID": 2865,
        "Department": "HUMAN RESOURCES",
        "Phone": NaN,
        "Position": "HR",
        "Position WORD": NaN
    },
    {
        "First Name": "ASHURA HEMEDI",
        "Last Name": "NGURUKURU",
        "Employee ID": 2819,
        "Department": "HUMAN RESOURCES",
        "Phone": NaN,
        "Position": "HR",
        "Position WORD": NaN
    },
    {
        "First Name": "UWEZO ADAM",
        "Last Name": "NKAYAMBA",
        "Employee ID": 4991,
        "Department": "HUMAN RESOURCES",
        "Phone": NaN,
        "Position": "ASST HR",
        "Position WORD": NaN
    },
    {
        "First Name": "PHILIPO SAIMON",
        "Last Name": "NTABO",
        "Employee ID": 2739,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "WEIGHT BRIDGE OPERATOR",
        "Position WORD": NaN
    },
    {
        "First Name": "NEEMA",
        "Last Name": "RICHARD",
        "Employee ID": 2866,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HAMZA MUSSA",
        "Last Name": "JAUMA",
        "Employee ID": 3019,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER WORKSHOP",
        "Position WORD": NaN
    },
    {
        "First Name": "GIRU NZUMBI",
        "Last Name": "MALELEMBA",
        "Employee ID": 3220,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "FREDRIC WILLISON",
        "Last Name": "CHUBWA",
        "Employee ID": 3232,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "DIANA GODWINE",
        "Last Name": "MULAKI",
        "Employee ID": 3335,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "VERONICA FRANCIS",
        "Last Name": "KWANGU",
        "Employee ID": 3348,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "EZEKIEL STANLEY",
        "Last Name": "JEREMIAH",
        "Employee ID": 4231,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "FUEL ATTENDANT",
        "Position WORD": NaN
    },
    {
        "First Name": "ARIVEEN GEORGE",
        "Last Name": "BASHANGE",
        "Employee ID": 4232,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE HELPER",
        "Position WORD": NaN
    },
    {
        "First Name": "YOLAM STEPHEN",
        "Last Name": "YONA",
        "Employee ID": 4672,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE OFFICER",
        "Position WORD": NaN
    },
    {
        "First Name": "WINIFRIDA ROCK",
        "Last Name": "MALAGO",
        "Employee ID": 1132,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE DATA CLERK",
        "Position WORD": NaN
    },
    {
        "First Name": "MBISSO EPHRAIM",
        "Last Name": "MBISSO",
        "Employee ID": 1177,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER WORKSHOP",
        "Position WORD": NaN
    },
    {
        "First Name": "WILSON",
        "Last Name": "NDANYONGA",
        "Employee ID": 1244,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ERICK",
        "Last Name": "ANTONY",
        "Employee ID": 201,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "HAMIS ABDALLAH",
        "Last Name": "KHALIFA",
        "Employee ID": 2218,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "MATOZI",
        "Last Name": "MAWAZO",
        "Employee ID": 237,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "GABRIEL",
        "Last Name": "ANDREW LWINGA",
        "Employee ID": 342,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE SUPERVISOR",
        "Position WORD": NaN
    },
    {
        "First Name": "ELIKA THOBIAS",
        "Last Name": "BILISHANGA",
        "Employee ID": 348,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "ADIL RAJAB",
        "Last Name": "MSUSA",
        "Employee ID": 44,
        "Department": "STORE's",
        "Phone": NaN,
        "Position": "IRRIGATION STORE KEEPER",
        "Position WORD": NaN
    },
    {
        "First Name": "SAMI JOSEPH",
        "Last Name": "MATHIAS",
        "Employee ID": 4993,
        "Department": "ADMINISTRATION",
        "Phone": NaN,
        "Position": "ASSTACCOUNTANT ",
        "Position WORD": NaN
    },
    {
        "First Name": "VICENT THOMAS",
        "Last Name": "MAZENGO",
        "Employee ID": 2716,
        "Department": "HUMAN RESOURCES",
        "Phone": NaN,
        "Position": "SR HR",
        "Position WORD": NaN
    }
];

export default employees;