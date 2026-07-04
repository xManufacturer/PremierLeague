const equipos = [
    {
        "id": "arsenal",
        "nombre": "Arsenal FC",
        "escudo": "img/arsenal.png",
        "entrenador": "Mikel Arteta",
        "formacion": "4-3-3",
        "plantilla": [
            {
                "nombre": "Raya",
                "posiciones": ["POR"],
                "foto": "img/jugadores/arsenal/raya.png"
            },
            {
                "nombre": "Kepa",
                "posiciones": ["POR"],
                "foto": "img/jugadores/arsenal/kepa.png"
            },
            {
                "nombre": "Saliba",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/arsenal/saliba.png"
            },
            {
                "nombre": "Gabriel",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/arsenal/gabriel.png"
            },
            {
                "nombre": "Hincapié",
                "posiciones": ["DFC", "LI"],
                "foto": "img/jugadores/arsenal/hincapie.png"
            },
            {
                "nombre": "Mosquera",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/arsenal/mosquera.png"
            },
            {
                "nombre": "Calafiori",
                "posiciones": ["LI", "DFC"],
                "foto": "img/jugadores/arsenal/calafiori.png"
            },
            {
                "nombre": "Timber",
                "posiciones": ["LD"],
                "foto": "img/jugadores/arsenal/timber.png"
            },
            {
                "nombre": "White",
                "posiciones": ["LD", "DFC"],
                "foto": "img/jugadores/arsenal/white.png"
            },
            {
                "nombre": "Lewis-Skelly",
                "posiciones": ["LI", "MCD"],
                "foto": "img/jugadores/arsenal/lewis-skelly.png"
            },
            {
                "nombre": "Zubimendi",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/arsenal/zubimendi.png"
            },
            {
                "nombre": "Norgaard",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/arsenal/norgaard.png"
            },
            {
                "nombre": "Rice",
                "posiciones": ["MC", "MCD"],
                "foto": "img/jugadores/arsenal/rice.png"
            },
            {
                "nombre": "Merino",
                "posiciones": ["MC", "DC"],
                "foto": "img/jugadores/arsenal/merino.png"
            },
            {
                "nombre": "Odegaard",
                "posiciones": ["MCO", "MC"],
                "foto": "img/jugadores/arsenal/odegaard.png"
            },
            {
                "nombre": "Eze",
                "posiciones": ["MCO", "EI"],
                "foto": "img/jugadores/arsenal/eze.png"
            },
            {
                "nombre": "Fábio Vieira",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/arsenal/fabio-vieira.png"
            },
            {
                "nombre": "Nwaneri",
                "posiciones": ["MCO", "ED"],
                "foto": "img/jugadores/arsenal/nwaneri.png"
            },
            {
                "nombre": "Martinelli",
                "posiciones": ["EI"],
                "foto": "img/jugadores/arsenal/martinelli.png"
            },
            {
                "nombre": "Trossard",
                "posiciones": ["EI"],
                "foto": "img/jugadores/arsenal/trossard.png"
            },
            {
                "nombre": "Reiss Nelson",
                "posiciones": ["EI"],
                "foto": "img/jugadores/arsenal/reiss-nelson.png"
            },
            {
                "nombre": "Saka",
                "posiciones": ["ED"],
                "foto": "img/jugadores/arsenal/saka.png"
            },
            {
                "nombre": "Madueke",
                "posiciones": ["ED"],
                "foto": "img/jugadores/arsenal/madueke.png"
            },
            {
                "nombre": "Dowman",
                "posiciones": ["ED", "MCO"],
                "foto": "img/jugadores/arsenal/dowman.png"
            },
            {
                "nombre": "Gyokeres",
                "posiciones": ["DC"],
                "foto": "img/jugadores/arsenal/gyokeres.png"
            },
            {
                "nombre": "Havertz",
                "posiciones": ["DC", "MCO"],
                "foto": "img/jugadores/arsenal/havertz.png"
            },
            {
                "nombre": "Gabriel Jesus",
                "posiciones": ["DC"],
                "foto": "img/jugadores/arsenal/gabriel-jesus.png"
            }
        ]
    },
    {
        "id": "aston-villa",
        "nombre": "Aston Villa FC",
        "escudo": "img/aston-villa.png",
        "entrenador": "Unai Emery",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Martínez",
                "posiciones": ["POR"],
                "foto": "img/jugadores/aston-villa/martinez.png"
            },
            {
                "nombre": "Bizot",
                "posiciones": ["POR"],
                "foto": "img/jugadores/aston-villa/bizot.png"
            },
            {
                "nombre": "Zych",
                "posiciones": ["POR"],
                "foto": "img/jugadores/aston-villa/zych.png"
            },
            {
                "nombre": "Gauci",
                "posiciones": ["POR"],
                "foto": "img/jugadores/aston-villa/gauci.png"
            },
            {
                "nombre": "Konsa",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/aston-villa/konsa.png"
            },
            {
                "nombre": "Pau Torres",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/aston-villa/pau-torres.png"
            },
            {
                "nombre": "Lindelof",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/aston-villa/lindelof.png"
            },
            {
                "nombre": "Mings",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/aston-villa/mings.png"
            },
            {
                "nombre": "Kéba Cissé",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/aston-villa/keba-cisse.png"
            },
            {
                "nombre": "Digne",
                "posiciones": ["LI"],
                "foto": "img/jugadores/aston-villa/digne.png"
            },
            {
                "nombre": "Maatsen",
                "posiciones": ["LI"],
                "foto": "img/jugadores/aston-villa/maatsen.png"
            },
            {
                "nombre": "Cash",
                "posiciones": ["LD"],
                "foto": "img/jugadores/aston-villa/cash.png"
            },
            {
                "nombre": "Andrés García",
                "posiciones": ["LD"],
                "foto": "img/jugadores/aston-villa/andres-garcia.png"
            },
            {
                "nombre": "Nedeljkovic",
                "posiciones": ["LD"],
                "foto": "img/jugadores/aston-villa/nedeljkovic.png"
            },
            {
                "nombre": "Onana",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/aston-villa/onana.png"
            },
            {
                "nombre": "Kamara",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/aston-villa/kamara.png"
            },
            {
                "nombre": "Bogarde",
                "posiciones": ["MCD", "LD"],
                "foto": "img/jugadores/aston-villa/bogarde.png"
            },
            {
                "nombre": "Tielemans",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/aston-villa/tielemans.png"
            },
            {
                "nombre": "McGinn",
                "posiciones": ["ED", "MCO", "MC"],
                "foto": "img/jugadores/aston-villa/mcginn.png"
            },
            {
                "nombre": "Barkley",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/aston-villa/barkley.png"
            },
            {
                "nombre": "Rogers",
                "posiciones": ["MCO", "EI"],
                "foto": "img/jugadores/aston-villa/rogers.png"
            },
            {
                "nombre": "Buendía",
                "posiciones": ["EI", "MCO"],
                "foto": "img/jugadores/aston-villa/buendia.png"
            },
            {
                "nombre": "Iling-Junior",
                "posiciones": ["EI"],
                "foto": "img/jugadores/aston-villa/iling-junior.png"
            },
            {
                "nombre": "Dobbin",
                "posiciones": ["EI", "DC"],
                "foto": "img/jugadores/aston-villa/dobbin.png"
            },
            {
                "nombre": "Bailey",
                "posiciones": ["ED"],
                "foto": "img/jugadores/aston-villa/bailey.png"
            },
            {
                "nombre": "Alysson",
                "posiciones": ["ED"],
                "foto": "img/jugadores/aston-villa/alysson.png"
            },
            {
                "nombre": "Guessand",
                "posiciones": ["DC", "ED"],
                "foto": "img/jugadores/aston-villa/guessand.png"
            },
            {
                "nombre": "Abraham",
                "posiciones": ["DC"],
                "foto": "img/jugadores/aston-villa/abraham.png"
            },
            {
                "nombre": "Watkins",
                "posiciones": ["DC"],
                "foto": "img/jugadores/aston-villa/watkins.png"
            }
        ]
    },
    {
        "id": "bournemouth",
        "nombre": "AFC Bournemouth",
        "escudo": "img/bournemouth.png",
        "entrenador": "Marco Rose",
        "formacion": "3-4-2-1",
        "plantilla": [
            {
                "nombre": "Petrovic",
                "posiciones": ["POR"],
                "foto": "img/jugadores/bournemouth/petrovic.png"
            },
            {
                "nombre": "Paulsen",
                "posiciones": ["POR"],
                "foto": "img/jugadores/bournemouth/paulsen.png"
            },
            {
                "nombre": "Forster",
                "posiciones": ["POR"],
                "foto": "img/jugadores/bournemouth/forster.png"
            },
            {
                "nombre": "Dennis",
                "posiciones": ["POR"],
                "foto": "img/jugadores/bournemouth/dennis.png"
            },
            {
                "nombre": "Diakité",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/bournemouth/diakite.png"
            },
            {
                "nombre": "Hill",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/bournemouth/hill.png"
            },
            {
                "nombre": "Milosavljevic",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/bournemouth/milosavljevic.png"
            },
            {
                "nombre": "Akinmboni",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/bournemouth/akinmboni.png"
            },
            {
                "nombre": "Truffert",
                "posiciones": ["LI"],
                "foto": "img/jugadores/bournemouth/truffert.png"
            },
            {
                "nombre": "Soler",
                "posiciones": ["LI"],
                "foto": "img/jugadores/bournemouth/soler.png"
            },
            {
                "nombre": "Jiménez",
                "posiciones": ["LD"],
                "foto": "img/jugadores/bournemouth/jimenez.png"
            },
            {
                "nombre": "Smith",
                "posiciones": ["LD"],
                "foto": "img/jugadores/bournemouth/smith.png"
            },
            {
                "nombre": "Soler",
                "posiciones": ["LD"],
                "foto": "img/jugadores/bournemouth/soler.png"
            },
            {
                "nombre": "Aarons",
                "posiciones": ["LD"],
                "foto": "img/jugadores/bournemouth/aarons.png"
            },
            {
                "nombre": "Adams",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/bournemouth/adams.png"
            },
            {
                "nombre": "Winterburn",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/bournemouth/winterburn.png"
            },
            {
                "nombre": "Scott",
                "posiciones": ["MC"],
                "foto": "img/jugadores/bournemouth/scott.png"
            },
            {
                "nombre": "Tóth",
                "posiciones": ["MC"],
                "foto": "img/jugadores/bournemouth/toth.png"
            },
            {
                "nombre": "Cook",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/bournemouth/cook.png"
            },
            {
                "nombre": "Christie",
                "posiciones": ["MC"],
                "foto": "img/jugadores/bournemouth/christie.png"
            },
            {
                "nombre": "Tavernier",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/bournemouth/tavernier.png"
            },
            {
                "nombre": "Kluivert",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/bournemouth/kluivert.png"
            },
            {
                "nombre": "Adli",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/bournemouth/adli.png"
            },
            {
                "nombre": "Rayan",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/bournemouth/rayan.png"
            },
            {
                "nombre": "Gannon-Doak",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/bournemouth/gannon-doak.png"
            },
            {
                "nombre": "Brooks",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/bournemouth/brooks.png"
            },
            {
                "nombre": "Faivre",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/bournemouth/faivre.png"
            },
            {
                "nombre": "Kroupi",
                "posiciones": ["MCO", "DC"],
                "foto": "img/jugadores/bournemouth/kroupi.png"
            },
            {
                "nombre": "Evanilson",
                "posiciones": ["DC"],
                "foto": "img/jugadores/bournemouth/evanilson.png"
            },
            {
                "nombre": "Enes Ünal",
                "posiciones": ["DC"],
                "foto": "img/jugadores/bournemouth/enes-unal.png"
            },
            {
                "nombre": "Jebbison",
                "posiciones": ["DC"],
                "foto": "img/jugadores/bournemouth/jebbison.png"
            }
        ]
    }, 
    {
        "id": "brentford",
        "nombre": "Brentford FC",
        "escudo": "img/brentford.png",
        "entrenador": "Keith Andrews",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Kelleher",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brentford/kelleher.png"
            },
            {
                "nombre": "Valdimarsson",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brentford/valdimarsson.png"
            },
            {
                "nombre": "Eyestone",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brentford/eyestone.png"
            },
            {
                "nombre": "Balcombe",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brentford/balcombe.png"
            },
            {
                "nombre": "Cox",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brentford/cox.png"
            },
            {
                "nombre": "Van den Berg",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brentford/van-den-berg.png"
            },
            {
                "nombre": "Collins",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brentford/collins.png"
            },
            {
                "nombre": "Ajer",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brentford/ajer.png"
            },
            {
                "nombre": "Pinnock",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brentford/pinnock.png"
            },
            {
                "nombre": "Schuster",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brentford/schuster.png"
            },
            {
                "nombre": "Kim",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brentford/kim.png"
            },
            {
                "nombre": "Arthur",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brentford/arthur.png"
            },
            {
                "nombre": "Rico Henry",
                "posiciones": ["LI"],
                "foto": "img/jugadores/brentford/rico-henry.png"
            },
            {
                "nombre": "Lewis-Potter",
                "posiciones": ["LI", "EI"],
                "foto": "img/jugadores/brentford/lewis-potter.png"
            },
            {
                "nombre": "Meghoma",
                "posiciones": ["LI"],
                "foto": "img/jugadores/brentford/meghoma.png"
            },
            {
                "nombre": "Hickey",
                "posiciones": ["LD", "LI"],
                "foto": "img/jugadores/brentford/hickey.png"
            },
            {
                "nombre": "Kayode",
                "posiciones": ["LD"],
                "foto": "img/jugadores/brentford/kayode.png"
            },
            {
                "nombre": "Janelt",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/brentford/janelt.png"
            },
            {
                "nombre": "Henderson",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/brentford/henderson.png"
            },
            {
                "nombre": "Konak",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/brentford/konak.png"
            },
            {
                "nombre": "Yarmolyuk",
                "posiciones": ["MC"],
                "foto": "img/jugadores/brentford/yarmolyuk.png"
            },
            {
                "nombre": "Jensen",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/brentford/jensen.png"
            },
            {
                "nombre": "Dasilva",
                "posiciones": ["MC"],
                "foto": "img/jugadores/brentford/dasilva.png"
            },
            {
                "nombre": "Damsgaard",
                "posiciones": ["MCO", "MC"],
                "foto": "img/jugadores/brentford/damsgaard.png"
            },
            {
                "nombre": "Milambo",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/brentford/milambo.png"
            },
            {
                "nombre": "Fábio Carvalho",
                "posiciones": ["EI", "MCO"],
                "foto": "img/jugadores/brentford/fabio-carvalho.png"
            },
            {
                "nombre": "Schade",
                "posiciones": ["EI"],
                "foto": "img/jugadores/brentford/schade.png"
            },
            {
                "nombre": "Nunes",
                "posiciones": ["EI"],
                "foto": "img/jugadores/brentford/nunes.png"
            },
            {
                "nombre": "Ouattara",
                "posiciones": ["ED"],
                "foto": "img/jugadores/brentford/ouattara.png"
            },
            {
                "nombre": "Donovan",
                "posiciones": ["ED"],
                "foto": "img/jugadores/brentford/donovan.png"
            },
            {
                "nombre": "Igor Thiago",
                "posiciones": ["DC"],
                "foto": "img/jugadores/brentford/igor-thiago.png"
            },
            {
                "nombre": "Furo",
                "posiciones": ["DC"],
                "foto": "img/jugadores/brentford/furo.png"
            }
        ]
    },
    {
        "id": "brighton",
        "nombre": "Brighton & Hove Albion FC",
        "escudo": "img/brighton.png",
        "entrenador": "Fabian Hürzeler",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Verbruggen",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brighton/verbruggen.png"
            },
            {
                "nombre": "Steele",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brighton/steele.png"
            },
            {
                "nombre": "McGill",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brighton/mcgill.png"
            },
            {
                "nombre": "Rushworth",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brighton/rushworth.png"
            },
            {
                "nombre": "Beadle",
                "posiciones": ["POR"],
                "foto": "img/jugadores/brighton/beadle.png"
            },
            {
                "nombre": "Boscagli",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brighton/boscagli.png"
            },
            {
                "nombre": "Dunk",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brighton/dunk.png"
            },
            {
                "nombre": "Coppola",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brighton/coppola.png"
            },
            {
                "nombre": "Struijk",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brighton/struijk.png"
            },
            {
                "nombre": "Igor Julio",
                "posiciones": ["DFC", "LI"],
                "foto": "img/jugadores/brighton/igor-julio.png"
            },
            {
                "nombre": "Cashin",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brighton/cashin.png"
            },
            {
                "nombre": "Svoboda",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/brighton/svoboda.png"
            },
            {
                "nombre": "Kadioglu",
                "posiciones": ["LI", "LD"],
                "foto": "img/jugadores/brighton/kadioglu.png"
            },
            {
                "nombre": "De Cuyper",
                "posiciones": ["LI", "EI"],
                "foto": "img/jugadores/brighton/de-cuyper.png"
            },
            {
                "nombre": "Wieffer",
                "posiciones": ["LD", "MCD"],
                "foto": "img/jugadores/brighton/wieffer.png"
            },
            {
                "nombre": "Costinha",
                "posiciones": ["LD"],
                "foto": "img/jugadores/brighton/costinha.png"
            },
            {
                "nombre": "Baleba",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/brighton/baleba.png"
            },
            {
                "nombre": "Hinshelwood",
                "posiciones": ["MC", "MCO", "LD"],
                "foto": "img/jugadores/brighton/hinshelwood.png"
            },
            {
                "nombre": "Ayari",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/brighton/ayari.png"
            },
            {
                "nombre": "O'Riley",
                "posiciones": ["MCO", "MC"],
                "foto": "img/jugadores/brighton/o-riley.png"
            },
            {
                "nombre": "Diego Gómez",
                "posiciones": ["MCO", "ED"],
                "foto": "img/jugadores/brighton/diego-gomez.png"
            },
            {
                "nombre": "Gruda",
                "posiciones": ["MCO", "ED"],
                "foto": "img/jugadores/brighton/gruda.png"
            },
            {
                "nombre": "Buonanotte",
                "posiciones": ["MCO", "ED"],
                "foto": "img/jugadores/brighton/buonanotte.png"
            },
            {
                "nombre": "Gross",
                "posiciones": ["MC"],
                "foto": "img/jugadores/brighton/gross.png"
            },
            {
                "nombre": "Yalcouyé",
                "posiciones": ["MC"],
                "foto": "img/jugadores/brighton/yalcouye.png"
            },
            {
                "nombre": "Mitoma",
                "posiciones": ["EI"],
                "foto": "img/jugadores/brighton/mitoma.png"
            },
            {
                "nombre": "Osman",
                "posiciones": ["EI"],
                "foto": "img/jugadores/brighton/osman.png"
            },
            {
                "nombre": "Watson",
                "posiciones": ["EI"],
                "foto": "img/jugadores/brighton/watson.png"
            },
            {
                "nombre": "Minteh",
                "posiciones": ["ED"],
                "foto": "img/jugadores/brighton/minteh.png"
            },
            {
                "nombre": "Yohanna",
                "posiciones": ["ED"],
                "foto": "img/jugadores/brighton/yohanna.png"
            },
            {
                "nombre": "Yoon",
                "posiciones": ["ED"],
                "foto": "img/jugadores/brighton/yoon.png"
            },
            {
                "nombre": "Cozier-Duberry",
                "posiciones": ["ED"],
                "foto": "img/jugadores/brighton/cozier-duberry.png"
            },
            {
                "nombre": "Rego",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/brighton/rego.png"
            },
            {
                "nombre": "Rutter",
                "posiciones": ["MCO", "DC"],
                "foto": "img/jugadores/brighton/rutter.png"
            },
            {
                "nombre": "Kostoulas",
                "posiciones": ["DC"],
                "foto": "img/jugadores/brighton/kostoulas.png"
            },
            {
                "nombre": "Tzimas",
                "posiciones": ["DC"],
                "foto": "img/jugadores/brighton/tzimas.png"
            },
            {
                "nombre": "Welbeck",
                "posiciones": ["DC"],
                "foto": "img/jugadores/brighton/welbeck.png"
            },
            {
                "nombre": "Ferguson",
                "posiciones": ["DC"],
                "foto": "img/jugadores/brighton/ferguson.png"
            }
        ]
    },
    {
        "id": "chelsea",
        "nombre": "Chelsea FC",
        "escudo": "img/chelsea.png",
        "entrenador": "Xabi Alonso",
        "formacion": "3-4-2-1",
        "plantilla": [
            {
                "nombre": "Sánchez",
                "posiciones": ["POR"],
                "foto": "img/jugadores/chelsea/sanchez.png"
            },
            {
                "nombre": "Jorgensen",
                "posiciones": ["POR"],
                "foto": "img/jugadores/chelsea/jorgensen.png"
            },
            {
                "nombre": "Slonina",
                "posiciones": ["POR"],
                "foto": "img/jugadores/chelsea/slonina.png"
            },
            {
                "nombre": "Penders",
                "posiciones": ["POR"],
                "foto": "img/jugadores/chelsea/penders.png"
            },
            {
                "nombre": "Sharman-Lowe",
                "posiciones": ["POR"],
                "foto": "img/jugadores/chelsea/sharman-lowe.png"
            },
            {
                "nombre": "Colwill",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/chelsea/colwill.png"
            },
            {
                "nombre": "Chalobah",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/chelsea/chalobah.png"
            },
            {
                "nombre": "Fofana",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/chelsea/fofana.png"
            },
            {
                "nombre": "Sarr",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/chelsea/sarr.png"
            },
            {
                "nombre": "Adarabioyo",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/chelsea/adarabioyo.png"
            },
            {
                "nombre": "Badiashile",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/chelsea/badiashile.png"
            },
            {
                "nombre": "Disasi",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/chelsea/disasi.png"
            },
            {
                "nombre": "Anselmino",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/chelsea/anselmino.png"
            },
            {
                "nombre": "Hato",
                "posiciones": ["LI", "DFC"],
                "foto": "img/jugadores/chelsea/hato.png"
            },
            {
                "nombre": "Denner",
                "posiciones": ["LI"],
                "foto": "img/jugadores/chelsea/denner.png"
            },
            {
                "nombre": "Wiley",
                "posiciones": ["LI"],
                "foto": "img/jugadores/chelsea/wiley.png"
            },
            {
                "nombre": "Acheampong",
                "posiciones": ["DFC", "LD"],
                "foto": "img/jugadores/chelsea/acheampong.png"
            },
            {
                "nombre": "James",
                "posiciones": ["LD", "MC"],
                "foto": "img/jugadores/chelsea/james.png"
            },
            {
                "nombre": "Malo Gusto",
                "posiciones": ["LD"],
                "foto": "img/jugadores/chelsea/malo-gusto.png"
            },
            {
                "nombre": "Palestra",
                "posiciones": ["LD", "LI"],
                "foto": "img/jugadores/chelsea/palestra.png"
            },
            {
                "nombre": "Caicedo",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/chelsea/caicedo.png"
            },
            {
                "nombre": "Lavia",
                "posiciones": ["MC"],
                "foto": "img/jugadores/chelsea/lavia.png"
            },
            {
                "nombre": "Essugo",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/chelsea/essugo.png"
            },
            {
                "nombre": "Enzo",
                "posiciones": ["MC"],
                "foto": "img/jugadores/chelsea/enzo.png"
            },
            {
                "nombre": "Andrey Santos",
                "posiciones": ["MC"],
                "foto": "img/jugadores/chelsea/andrey-santos.png"
            },
            {
                "nombre": "Palmer",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/chelsea/palmer.png"
            },
            {
                "nombre": "Gittens",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/chelsea/gittens.png"
            },
            {
                "nombre": "Garnacho",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/chelsea/garnacho.png"
            },
            {
                "nombre": "Estevao",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/chelsea/estevao.png"
            },
            {
                "nombre": "Pedro Neto",
                "posiciones": ["MCO", "LI", "LD"],
                "foto": "img/jugadores/chelsea/pedro-neto.png"
            },
            {
                "nombre": "George",
                "posiciones": ["MCO", "DC"],
                "foto": "img/jugadores/chelsea/george.png"
            },
            {
                "nombre": "Quenda",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/chelsea/quenda.png"
            },
            {
                "nombre": "Joao Pedro",
                "posiciones": ["DC"],
                "foto": "img/jugadores/chelsea/joao-pedro.png"
            },
            {
                "nombre": "Delap",
                "posiciones": ["DC"],
                "foto": "img/jugadores/chelsea/delap.png"
            },
            {
                "nombre": "Marc Guiu",
                "posiciones": ["DC"],
                "foto": "img/jugadores/chelsea/marc-guiu.png"
            },
            {
                "nombre": "Jackson",
                "posiciones": ["DC"],
                "foto": "img/jugadores/chelsea/jackson.png"
            },
            {
                "nombre": "Emegha",
                "posiciones": ["DC"],
                "foto": "img/jugadores/chelsea/emegha.png"
            },
            {
                "nombre": "Datro Fofana",
                "posiciones": ["DC"],
                "foto": "img/jugadores/chelsea/datro-fofana.png"
            }
        ]
    },
    {
        "id": "coventry",
        "nombre": "Coventry City FC",
        "escudo": "img/coventry.png",
        "entrenador": "Frank Lampard",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Dovin",
                "posiciones": ["POR"],
                "foto": "img/jugadores/coventry/dovin.png"
            },
            {
                "nombre": "Wilson",
                "posiciones": ["POR"],
                "foto": "img/jugadores/coventry/wilson.png"
            },
            {
                "nombre": "Thomas",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/coventry/thomas.png"
            },
            {
                "nombre": "Kitching",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/coventry/kitching.png"
            },
            {
                "nombre": "Latibeaudiere",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/coventry/latibeaudiere.png"
            },
            {
                "nombre": "Woolfenden",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/coventry/woolfenden.png"
            },
            {
                "nombre": "Dasilva",
                "posiciones": ["LI"],
                "foto": "img/jugadores/coventry/dasilva.png"
            },
            {
                "nombre": "Brau",
                "posiciones": ["LI"],
                "foto": "img/jugadores/coventry/brau.png"
            },
            {
                "nombre": "Bidwell",
                "posiciones": ["LI"],
                "foto": "img/jugadores/coventry/bidwell.png"
            },
            {
                "nombre": "Van Ewijk",
                "posiciones": ["LD"],
                "foto": "img/jugadores/coventry/van-ewijk.png"
            },
            {
                "nombre": "Kesler-Hayden",
                "posiciones": ["LD"],
                "foto": "img/jugadores/coventry/kesler-hayden.png"
            },
            {
                "nombre": "Grimes",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/coventry/grimes.png"
            },
            {
                "nombre": "Torp",
                "posiciones": ["MC"],
                "foto": "img/jugadores/coventry/torp.png"
            },
            {
                "nombre": "Eccles",
                "posiciones": ["MC"],
                "foto": "img/jugadores/coventry/eccles.png"
            },
            {
                "nombre": "Onyeka",
                "posiciones": ["MC"],
                "foto": "img/jugadores/coventry/onyeka.png"
            },
            {
                "nombre": "Andrews",
                "posiciones": ["MC"],
                "foto": "img/jugadores/coventry/andrews.png"
            },
            {
                "nombre": "Rudoni",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/coventry/rudoni.png"
            },
            {
                "nombre": "Mason-Clark",
                "posiciones": ["EI"],
                "foto": "img/jugadores/coventry/mason-clark.png"
            },
            {
                "nombre": "Sakamoto",
                "posiciones": ["ED"],
                "foto": "img/jugadores/coventry/sakamoto.png"
            },
            {
                "nombre": "Markelo",
                "posiciones": ["ED"],
                "foto": "img/jugadores/coventry/markelo.png"
            },
            {
                "nombre": "Rodrigues",
                "posiciones": ["ED"],
                "foto": "img/jugadores/coventry/rodrigues.png"
            },
            {
                "nombre": "Wright",
                "posiciones": ["DC"],
                "foto": "img/jugadores/coventry/wright.png"
            },
            {
                "nombre": "Thomas-Asante",
                "posiciones": ["DC"],
                "foto": "img/jugadores/coventry/thomas-asante.png"
            },
            {
                "nombre": "Simms",
                "posiciones": ["DC"],
                "foto": "img/jugadores/coventry/simms.png"
            },
            {
                "nombre": "Bassette",
                "posiciones": ["DC"],
                "foto": "img/jugadores/coventry/bassette.png"
            }
        ]
    },
    {
        "id": "crystal-palace",
        "nombre": "Crystal Palace FC",
        "escudo": "img/crystal-palace.png",
        "entrenador": "Pierre Sage",
        "formacion": "3-4-2-1",
        "plantilla": [
            {
                "nombre": "Henderson",
                "posiciones": ["POR"],
                "foto": "img/jugadores/crystal-palace/henderson.png"
            },
            {
                "nombre": "Benítez",
                "posiciones": ["POR"],
                "foto": "img/jugadores/crystal-palace/benitez.png"
            },
            {
                "nombre": "Matthews",
                "posiciones": ["POR"],
                "foto": "img/jugadores/crystal-palace/matthews.png"
            },
            {
                "nombre": "Goodman",
                "posiciones": ["POR"],
                "foto": "img/jugadores/crystal-palace/goodman.png"
            },
            {
                "nombre": "Lacroix",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/crystal-palace/lacroix.png"
            },
            {
                "nombre": "Canvot",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/crystal-palace/canvot.png"
            },
            {
                "nombre": "Richards",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/crystal-palace/richards.png"
            },
            {
                "nombre": "Riad",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/crystal-palace/riad.png"
            },
            {
                "nombre": "Mitchell",
                "posiciones": ["LI"],
                "foto": "img/jugadores/crystal-palace/mitchell.png"
            },
            {
                "nombre": "Sosa",
                "posiciones": ["LI"],
                "foto": "img/jugadores/crystal-palace/sosa.png"
            },
            {
                "nombre": "Cardines",
                "posiciones": ["LI"],
                "foto": "img/jugadores/crystal-palace/cardines.png"
            },
            {
                "nombre": "Muñoz",
                "posiciones": ["LD"],
                "foto": "img/jugadores/crystal-palace/muñoz.png"
            },
            {
                "nombre": "Clyne",
                "posiciones": ["LD", "DFC"],
                "foto": "img/jugadores/crystal-palace/clyne.png"
            },
            {
                "nombre": "Kporha",
                "posiciones": ["LD"],
                "foto": "img/jugadores/crystal-palace/kporha.png"
            },
            {
                "nombre": "Wharton",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/crystal-palace/wharton.png"
            },
            {
                "nombre": "Doucouré",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/crystal-palace/doucoure.png"
            },
            {
                "nombre": "Ozoh",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/crystal-palace/ozoh.png"
            },
            {
                "nombre": "Lerma",
                "posiciones": ["MCD", "MC", "DFC"],
                "foto": "img/jugadores/crystal-palace/lerma.png"
            },
            {
                "nombre": "Hughes",
                "posiciones": ["MC"],
                "foto": "img/jugadores/crystal-palace/hughes.png"
            },
            {
                "nombre": "Devenny",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/crystal-palace/devenny.png"
            },
            {
                "nombre": "Sarr",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/crystal-palace/sarr.png"
            },
            {
                "nombre": "Pino",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/crystal-palace/pino.png"
            },
            {
                "nombre": "Johnson",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/crystal-palace/johnson.png"
            },
            {
                "nombre": "França",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/crystal-palace/frança.png"
            },
            {
                "nombre": "Rak-Sakyi",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/crystal-palace/rak-sakyi.png"
            },
            {
                "nombre": "Esse",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/crystal-palace/esse.png"
            },
            {
                "nombre": "Strand Larsen",
                "posiciones": ["DC"],
                "foto": "img/jugadores/crystal-palace/strand-larsen.png"
            },
            {
                "nombre": "Mateta",
                "posiciones": ["DC"],
                "foto": "img/jugadores/crystal-palace/mateta.png"
            },
            {
                "nombre": "Nketiah",
                "posiciones": ["DC"],
                "foto": "img/jugadores/crystal-palace/nketiah.png"
            }
        ]
    },
    {
        "id": "everton",
        "nombre": "Everton FC",
        "escudo": "img/everton.png",
        "entrenador": "David Moyes",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Pickford",
                "posiciones": ["POR"],
                "foto": "img/jugadores/everton/pickford.png"
            },
            {
                "nombre": "Travers",
                "posiciones": ["POR"],
                "foto": "img/jugadores/everton/travers.png"
            },
            {
                "nombre": "King",
                "posiciones": ["POR"],
                "foto": "img/jugadores/everton/king.png"
            },
            {
                "nombre": "Branthwaite",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/everton/branthwaite.png"
            },
            {
                "nombre": "Tarkowski",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/everton/tarkowski.png"
            },
            {
                "nombre": "Keane",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/everton/keane.png"
            },
            {
                "nombre": "Mykolenko",
                "posiciones": ["LI"],
                "foto": "img/jugadores/everton/mykolenko.png"
            },
            {
                "nombre": "Aznou",
                "posiciones": ["LI"],
                "foto": "img/jugadores/everton/aznou.png"
            },
            {
                "nombre": "O'Brien",
                "posiciones": ["LD"],
                "foto": "img/jugadores/everton/o-brien.png"
            },
            {
                "nombre": "Patterson",
                "posiciones": ["LD"],
                "foto": "img/jugadores/everton/patterson.png"
            },
            {
                "nombre": "Garner",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/everton/garner.png"
            },
            {
                "nombre": "Hackney",
                "posiciones": ["MCD", "MC"],
                "foto": "img/jugadores/everton/hackney.png"
            },
            {
                "nombre": "Dewsbury-Hall",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/everton/dewsbury-hall.png"
            },
            {
                "nombre": "Röhl",
                "posiciones": ["MCO", "ED"],
                "foto": "img/jugadores/everton/rohl.png"
            },
            {
                "nombre": "Iroegbunam",
                "posiciones": ["MC"],
                "foto": "img/jugadores/everton/iroegbunam.png"
            },
            {
                "nombre": "Alcaraz",
                "posiciones": ["MC"],
                "foto": "img/jugadores/everton/alcaraz.png"
            },
            {
                "nombre": "Armstrong",
                "posiciones": ["MC"],
                "foto": "img/jugadores/everton/armstrong.png"
            },
            {
                "nombre": "McNeil",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/everton/mcneil.png"
            },
            {
                "nombre": "Ndiaye",
                "posiciones": ["EI", "ED", "MCO"],
                "foto": "img/jugadores/everton/ndiaye.png"
            },
            {
                "nombre": "Dibling",
                "posiciones": ["ED"],
                "foto": "img/jugadores/everton/dibling.png"
            },
            {
                "nombre": "Barry",
                "posiciones": ["DC"],
                "foto": "img/jugadores/everton/barry.png"
            },
            {
                "nombre": "Beto",
                "posiciones": ["DC"],
                "foto": "img/jugadores/everton/beto.png"
            }
        ]
    },
    {
        "id": "fulham",
        "nombre": "Fulham FC",
        "escudo": "img/fulham.png",
        "entrenador": "Álvaro Arbeloa",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Leno",
                "posiciones": ["POR"],
                "foto": "img/jugadores/fulham/leno.png"
            },
            {
                "nombre": "Lecomte",
                "posiciones": ["POR"],
                "foto": "img/jugadores/fulham/lecomte.png"
            },
            {
                "nombre": "Bassey",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/fulham/bassey.png"
            },
            {
                "nombre": "Andersen",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/fulham/andersen.png"
            },
            {
                "nombre": "Cuenca",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/fulham/cuenca.png"
            },
            {
                "nombre": "Diop",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/fulham/diop.png"
            },
            {
                "nombre": "Sessegnon",
                "posiciones": ["LI"],
                "foto": "img/jugadores/fulham/sessegnon.png"
            },
            {
                "nombre": "Robinson",
                "posiciones": ["LI"],
                "foto": "img/jugadores/fulham/robinson.png"
            },
            {
                "nombre": "Tete",
                "posiciones": ["LD"],
                "foto": "img/jugadores/fulham/tete.png"
            },
            {
                "nombre": "Castagne",
                "posiciones": ["LD"],
                "foto": "img/jugadores/fulham/castagne.png"
            },
            {
                "nombre": "Berge",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/fulham/berge.png"
            },
            {
                "nombre": "Lukic",
                "posiciones": ["MC"],
                "foto": "img/jugadores/fulham/lukic.png"
            },
            {
                "nombre": "Reed",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/fulham/reed.png"
            },
            {
                "nombre": "Cairney",
                "posiciones": ["MC"],
                "foto": "img/jugadores/fulham/cairney.png"
            },
            {
                "nombre": "King",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/fulham/king.png"
            },
            {
                "nombre": "Smith Rowe",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/fulham/smith-rowe.png"
            },
            {
                "nombre": "Harris",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/fulham/harris.png"
            },
            {
                "nombre": "Kevin",
                "posiciones": ["EI"],
                "foto": "img/jugadores/fulham/kevin.png"
            },
            {
                "nombre": "Iwobi",
                "posiciones": ["EI", "MCO"],
                "foto": "img/jugadores/fulham/iwobi.png"
            },
            {
                "nombre": "Bobb",
                "posiciones": ["ED"],
                "foto": "img/jugadores/fulham/bobb.png"
            },
            {
                "nombre": "Muniz",
                "posiciones": ["DC"],
                "foto": "img/jugadores/fulham/muniz.png"
            },
            {
                "nombre": "Kusi-Asare",
                "posiciones": ["DC"],
                "foto": "img/jugadores/fulham/kusi-asare.png"
            }
        ]
    },
    {
        "id": "hull-city",
        "nombre": "Hull City AFC",
        "escudo": "img/hull-city.png",
        "entrenador": "Sergej Jakirovic",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Phillips",
                "posiciones": ["POR"],
                "foto": "img/jugadores/hull-city/phillips.png"
            },
            {
                "nombre": "Lo-Tutala",
                "posiciones": ["POR"],
                "foto": "img/jugadores/hull-city/lo-tutala.png"
            },
            {
                "nombre": "Cartwright",
                "posiciones": ["POR"],
                "foto": "img/jugadores/hull-city/cartwright.png"
            },
            {
                "nombre": "Butland",
                "posiciones": ["POR"],
                "foto": "img/jugadores/hull-city/butland.png"
            },
            {
                "nombre": "Hughes",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/hull-city/hughes.png"
            },
            {
                "nombre": "McNair",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/hull-city/mcnair.png"
            },
            {
                "nombre": "Egan",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/hull-city/egan.png"
            },
            {
                "nombre": "Ajayi",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/hull-city/ajayi.png"
            },
            {
                "nombre": "Giles",
                "posiciones": ["LI"],
                "foto": "img/jugadores/hull-city/giles.png"
            },
            {
                "nombre": "Jacob",
                "posiciones": ["LI"],
                "foto": "img/jugadores/hull-city/jacob.png"
            },
            {
                "nombre": "Drameh",
                "posiciones": ["LD"],
                "foto": "img/jugadores/hull-city/drameh.png"
            },
            {
                "nombre": "Coyle",
                "posiciones": ["LD"],
                "foto": "img/jugadores/hull-city/coyle.png"
            },
            {
                "nombre": "Slater",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/hull-city/slater.png"
            },
            {
                "nombre": "Gyabi",
                "posiciones": ["MCO", "MC"],
                "foto": "img/jugadores/hull-city/gyabi.png"
            },
            {
                "nombre": "Matazo",
                "posiciones": ["MC"],
                "foto": "img/jugadores/hull-city/matazo.png"
            },
            {
                "nombre": "Crooks",
                "posiciones": ["MC"],
                "foto": "img/jugadores/hull-city/crooks.png"
            },
            {
                "nombre": "Dowell",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/hull-city/dowell.png"
            },
            {
                "nombre": "Millar",
                "posiciones": ["EI"],
                "foto": "img/jugadores/hull-city/millar.png"
            },
            {
                "nombre": "Belloumi",
                "posiciones": ["ED"],
                "foto": "img/jugadores/hull-city/belloumi.png"
            },
            {
                "nombre": "Akintola",
                "posiciones": ["ED"],
                "foto": "img/jugadores/hull-city/akintola.png"
            },
            {
                "nombre": "Ömür",
                "posiciones": ["ED"],
                "foto": "img/jugadores/hull-city/omur.png"
            },
            {
                "nombre": "Kamara",
                "posiciones": ["ED"],
                "foto": "img/jugadores/hull-city/kamara.png"
            },
            {
                "nombre": "Joseph",
                "posiciones": ["DC"],
                "foto": "img/jugadores/hull-city/joseph.png"
            },
            {
                "nombre": "McBurnie",
                "posiciones": ["DC"],
                "foto": "img/jugadores/hull-city/mcburnie.png"
            },
            {
                "nombre": "Burstow",
                "posiciones": ["DC"],
                "foto": "img/jugadores/hull-city/burstow.png"
            },
            {
                "nombre": "Destan",
                "posiciones": ["DC"],
                "foto": "img/jugadores/hull-city/destan.png"
            }
        ]
    },
    {
        "id": "ipswich",
        "nombre": "Ipswich Town FC",
        "escudo": "img/ipswich.png",
        "entrenador": "Gary O'Neil",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Walton",
                "posiciones": ["POR"],
                "foto": "img/jugadores/ipswich/walton.png"
            },
            {
                "nombre": "Palmer",
                "posiciones": ["POR"],
                "foto": "img/jugadores/ipswich/palmer.png"
            },
            {
                "nombre": "Button",
                "posiciones": ["POR"],
                "foto": "img/jugadores/ipswich/button.png"
            },
            {
                "nombre": "Slicker",
                "posiciones": ["POR"],
                "foto": "img/jugadores/ipswich/slicker.png"
            },
            {
                "nombre": "O'Shea",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/ipswich/o-shea.png"
            },
            {
                "nombre": "Greaves",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/ipswich/greaves.png"
            },
            {
                "nombre": "Kipré",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/ipswich/kipre.png"
            },
            {
                "nombre": "Baggott",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/ipswich/baggott.png"
            },
            {
                "nombre": "Davis",
                "posiciones": ["LI"],
                "foto": "img/jugadores/ipswich/davis.png"
            },
            {
                "nombre": "Furlong",
                "posiciones": ["LD"],
                "foto": "img/jugadores/ipswich/furlong.png"
            },
            {
                "nombre": "Johnson",
                "posiciones": ["LD"],
                "foto": "img/jugadores/ipswich/johnson.png"
            },
            {
                "nombre": "Harry Clarke",
                "posiciones": ["LD"],
                "foto": "img/jugadores/ipswich/harry-clarke.png"
            },
            {
                "nombre": "Matusiwa",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/ipswich/matusiwa.png"
            },
            {
                "nombre": "Núñez",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/ipswich/nuñez.png"
            },
            {
                "nombre": "Taylor",
                "posiciones": ["MC"],
                "foto": "img/jugadores/ipswich/taylor.png"
            },
            {
                "nombre": "Humphreys",
                "posiciones": ["MC"],
                "foto": "img/jugadores/ipswich/humphreys.png"
            },
            {
                "nombre": "McAteer",
                "posiciones": ["ED"],
                "foto": "img/jugadores/ipswich/mcateer.png"
            },
            {
                "nombre": "Burns",
                "posiciones": ["ED"],
                "foto": "img/jugadores/ipswich/burns.png"
            },
            {
                "nombre": "Ogbene",
                "posiciones": ["ED"],
                "foto": "img/jugadores/ipswich/ogbene.png"
            },
            {
                "nombre": "Mehmeti",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/ipswich/mehmeti.png"
            },
            {
                "nombre": "Szmodics",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/ipswich/szmodics.png"
            },
            {
                "nombre": "Philogene",
                "posiciones": ["EI"],
                "foto": "img/jugadores/ipswich/philogene.png"
            },
            {
                "nombre": "Jack Clarke",
                "posiciones": ["EI"],
                "foto": "img/jugadores/ipswich/jack-clarke.png"
            },
            {
                "nombre": "Walle Egeli",
                "posiciones": ["ED"],
                "foto": "img/jugadores/ipswich/walle-egeli.png"
            },
            {
                "nombre": "Hirst",
                "posiciones": ["DC"],
                "foto": "img/jugadores/ipswich/hirst.png"
            },
            {
                "nombre": "Akpom",
                "posiciones": ["DC"],
                "foto": "img/jugadores/ipswich/akpom.png"
            },
            {
                "nombre": "Al-Hamadi",
                "posiciones": ["DC"],
                "foto": "img/jugadores/ipswich/al-hamadi.png"
            }
        ]
    },
    {
        "id": "leeds",
        "nombre": "Leeds United FC",
        "escudo": "img/leeds.png",
        "entrenador": "Daniel Farke",
        "formacion": "3-4-2-1",
        "plantilla": [
            {
                "nombre": "Perri",
                "posiciones": ["POR"],
                "foto": "img/jugadores/leeds/perri.png"
            },
            {
                "nombre": "Darlow",
                "posiciones": ["POR"],
                "foto": "img/jugadores/leeds/darlow.png"
            },
            {
                "nombre": "Cairns",
                "posiciones": ["POR"],
                "foto": "img/jugadores/leeds/cairns.png"
            },
            {
                "nombre": "Bijol",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/leeds/bijol.png"
            },
            {
                "nombre": "Rodon",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/leeds/rodon.png"
            },
            {
                "nombre": "Bornauw",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/leeds/bornauw.png"
            },
            {
                "nombre": "Wöber",
                "posiciones": ["DFC", "LI"],
                "foto": "img/jugadores/leeds/wober.png"
            },
            {
                "nombre": "Gudmundsson",
                "posiciones": ["LI"],
                "foto": "img/jugadores/leeds/gudmundsson.png"
            },
            {
                "nombre": "Byram",
                "posiciones": ["LI"],
                "foto": "img/jugadores/leeds/byram.png"
            },
            {
                "nombre": "Schmidt",
                "posiciones": ["LI", "LD"],
                "foto": "img/jugadores/leeds/schmidt.png"
            },
            {
                "nombre": "Bogle",
                "posiciones": ["LD"],
                "foto": "img/jugadores/leeds/bogle.png"
            },
            {
                "nombre": "Justin",
                "posiciones": ["LD", "DFC"],
                "foto": "img/jugadores/leeds/justin.png"
            },
            {
                "nombre": "Ampadu",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/leeds/ampadu.png"
            },
            {
                "nombre": "Stach",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/leeds/stach.png"
            },
            {
                "nombre": "Gruev",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/leeds/gruev.png"
            },
            {
                "nombre": "Crew",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/leeds/crew.png"
            },
            {
                "nombre": "Longstaff",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/leeds/longstaff.png"
            },
            {
                "nombre": "Tanaka",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/leeds/tanaka.png"
            },
            {
                "nombre": "Aaronson",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/leeds/aaronson.png"
            },
            {
                "nombre": "Okafor",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/leeds/okafor.png"
            },
            {
                "nombre": "Gnonto",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/leeds/gnonto.png"
            },
            {
                "nombre": "James",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/leeds/james.png"
            },
            {
                "nombre": "Ramazani",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/leeds/ramazani.png"
            },
            {
                "nombre": "Harrison",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/leeds/harrison.png"
            },
            {
                "nombre": "Gelhardt",
                "posiciones": ["MCO", "DC"],
                "foto": "img/jugadores/leeds/gelhardt.png"
            },
            {
                "nombre": "Calvert-Lewin",
                "posiciones": ["DC"],
                "foto": "img/jugadores/leeds/calvert-lewin.png"
            },
            {
                "nombre": "Piroe",
                "posiciones": ["DC"],
                "foto": "img/jugadores/leeds/piroe.png"
            },
            {
                "nombre": "Nmecha",
                "posiciones": ["DC", "MCO"],
                "foto": "img/jugadores/leeds/nmecha.png"
            },
            {
                "nombre": "Mateo Joseph",
                "posiciones": ["DC"],
                "foto": "img/jugadores/leeds/mateo-joseph.png"
            }
        ]
    },
    {
        "id": "liverpool",
        "nombre": "Liverpool FC",
        "escudo": "img/liverpool.png",
        "entrenador": "Andoni Iraola",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Mamardashvili",
                "posiciones": ["POR"],
                "foto": "img/jugadores/liverpool/mamardashvili.png"
            },
            {
                "nombre": "Alisson",
                "posiciones": ["POR"],
                "foto": "img/jugadores/liverpool/alisson.png"
            },
            {
                "nombre": "Woodman",
                "posiciones": ["POR"],
                "foto": "img/jugadores/liverpool/woodman.png"
            },
            {
                "nombre": "Jaros",
                "posiciones": ["POR"],
                "foto": "img/jugadores/liverpool/jaros.png"
            },
            {
                "nombre": "Davies",
                "posiciones": ["POR"],
                "foto": "img/jugadores/liverpool/davies.png"
            },
            {
                "nombre": "Leoni",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/liverpool/leoni.png"
            },
            {
                "nombre": "Van Dijk",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/liverpool/van-dijk.png"
            },
            {
                "nombre": "Jacquet",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/liverpool/jacquet.png"
            },
            {
                "nombre": "Joe Gomez",
                "posiciones": ["DFC", "LD"],
                "foto": "img/jugadores/liverpool/joe-gomez.png"
            },
            {
                "nombre": "Kerkez",
                "posiciones": ["LI"],
                "foto": "img/jugadores/liverpool/kerkez.png"
            },
            {
                "nombre": "Tsimikas",
                "posiciones": ["LI"],
                "foto": "img/jugadores/liverpool/tsimikas.png"
            },
            {
                "nombre": "Frimpong",
                "posiciones": ["LD", "ED"],
                "foto": "img/jugadores/liverpool/frimpong.png"
            },
            {
                "nombre": "Bradley",
                "posiciones": ["LD"],
                "foto": "img/jugadores/liverpool/bradley.png"
            },
            {
                "nombre": "Ramsay",
                "posiciones": ["LD"],
                "foto": "img/jugadores/liverpool/ramsay.png"
            },
            {
                "nombre": "Gravenberch",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/liverpool/gravenberch.png"
            },
            {
                "nombre": "Endo",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/liverpool/endo.png"
            },
            {
                "nombre": "Bajcetic",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/liverpool/bajcetic.png"
            },
            {
                "nombre": "Mac Allister",
                "posiciones": ["MC"],
                "foto": "img/jugadores/liverpool/mac-allister.png"
            },
            {
                "nombre": "Jones",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/liverpool/jones.png"
            },
            {
                "nombre": "Nyoni",
                "posiciones": ["MC"],
                "foto": "img/jugadores/liverpool/nyoni.png"
            },
            {
                "nombre": "Wirtz",
                "posiciones": ["EI", "MCO"],
                "foto": "img/jugadores/liverpool/wirtz.png"
            },
            {
                "nombre": "Szoboszlai",
                "posiciones": ["MCO", "MC"],
                "foto": "img/jugadores/liverpool/szoboszlai.png"
            },
            {
                "nombre": "Elliott",
                "posiciones": ["MCO", "ED"],
                "foto": "img/jugadores/liverpool/elliott.png"
            },
            {
                "nombre": "Gakpo",
                "posiciones": ["EI", "DC"],
                "foto": "img/jugadores/liverpool/gakpo.png"
            },
            {
                "nombre": "Ngumoha",
                "posiciones": ["EI", "ED"],
                "foto": "img/jugadores/liverpool/ngumoha.png"
            },
            {
                "nombre": "Víctor Muñoz",
                "posiciones": ["EI", "ED"],
                "foto": "img/jugadores/liverpool/victor-muñoz.png"
            },
            {
                "nombre": "Chiesa",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/liverpool/chiesa.png"
            },
            {
                "nombre": "Isak",
                "posiciones": ["DC"],
                "foto": "img/jugadores/liverpool/isak.png"
            },
            {
                "nombre": "Ekitiké",
                "posiciones": ["DC"],
                "foto": "img/jugadores/liverpool/ekitike.png"
            }
        ]
    },
    {
        "id": "manchester-city",
        "nombre": "Manchester City FC",
        "escudo": "img/manchester-city.png",
        "entrenador": "Enzo Maresca",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Donnarumma",
                "posiciones": ["POR"],
                "foto": "img/jugadores/manchester-city/donnarumma.png"
            },
            {
                "nombre": "Trafford",
                "posiciones": ["POR"],
                "foto": "img/jugadores/manchester-city/trafford.png"
            },
            {
                "nombre": "Bettinelli",
                "posiciones": ["POR"],
                "foto": "img/jugadores/manchester-city/bettinelli.png"
            },
            {
                "nombre": "Guéhi",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-city/guehi.png"
            },
            {
                "nombre": "Gvardiol",
                "posiciones": ["DFC", "LI"],
                "foto": "img/jugadores/manchester-city/gvardiol.png"
            },
            {
                "nombre": "Rúben Dias",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-city/ruben-dias.png"
            },
            {
                "nombre": "Khusanov",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-city/khusanov.png"
            },
            {
                "nombre": "Alleyne",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-city/alleyne.png"
            },
            {
                "nombre": "Reis",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-city/reis.png"
            },
            {
                "nombre": "Bah",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-city/bah.png"
            },
            {
                "nombre": "O'Reilly",
                "posiciones": ["LI", "MC"],
                "foto": "img/jugadores/manchester-city/o-reilly.png"
            },
            {
                "nombre": "Aït-Nouri",
                "posiciones": ["LI"],
                "foto": "img/jugadores/manchester-city/ait-nouri.png"
            },
            {
                "nombre": "Wilson-Esbrand",
                "posiciones": ["LI"],
                "foto": "img/jugadores/manchester-city/wilson-esbrand.png"
            },
            {
                "nombre": "Nunes",
                "posiciones": ["LD", "MC"],
                "foto": "img/jugadores/manchester-city/nunes.png"
            },
            {
                "nombre": "Rico Lewis",
                "posiciones": ["LD", "MCD"],
                "foto": "img/jugadores/manchester-city/rico-lewis.png"
            },
            {
                "nombre": "Kaboré",
                "posiciones": ["LD"],
                "foto": "img/jugadores/manchester-city/kabore.png"
            },
            {
                "nombre": "Rodri",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/manchester-city/rodri.png"
            },
            {
                "nombre": "Nico González",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/manchester-city/nico-gonzalez.png"
            },
            {
                "nombre": "Phillips",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/manchester-city/phillips.png"
            },
            {
                "nombre": "Reijnders",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/manchester-city/reijnders.png"
            },
            {
                "nombre": "Kovacic",
                "posiciones": ["MC"],
                "foto": "img/jugadores/manchester-city/kovacic.png"
            },
            {
                "nombre": "Nypan",
                "posiciones": ["MC"],
                "foto": "img/jugadores/manchester-city/nypan.png"
            },
            {
                "nombre": "Anderson",
                "posiciones": ["MC"],
                "foto": "img/jugadores/manchester-city/anderson.png"
            },
            {
                "nombre": "Cherki",
                "posiciones": ["MCO", "ED", "EI"],
                "foto": "img/jugadores/manchester-city/cherki.png"
            },
            {
                "nombre": "Echeverri",
                "posiciones": ["MCO", "EI"],
                "foto": "img/jugadores/manchester-city/echeverri.png"
            },
            {
                "nombre": "Foden",
                "posiciones": ["ED", "MCO"],
                "foto": "img/jugadores/manchester-city/foden.png"
            },
            {
                "nombre": "Doku",
                "posiciones": ["EI"],
                "foto": "img/jugadores/manchester-city/doku.png"
            },
            {
                "nombre": "Grealish",
                "posiciones": ["EI"],
                "foto": "img/jugadores/manchester-city/grealish.png"
            },
            /*{
                "nombre": "Detourbet",
                "posiciones": ["EI"],
                "foto": "img/jugadores/manchester-city/detourbet.png"
            },*/
            {
                "nombre": "Savinho",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/manchester-city/savinho.png"
            },
            {
                "nombre": "Semenyo",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/manchester-city/semenyo.png"
            },
            {
                "nombre": "Haaland",
                "posiciones": ["DC"],
                "foto": "img/jugadores/manchester-city/haaland.png"
            },
            {
                "nombre": "Marmoush",
                "posiciones": ["DC", "MCO", "EI"],
                "foto": "img/jugadores/manchester-city/marmoush.png"
            }
        ]
    },
    {
        "id": "manchester-united",
        "nombre": "Manchester United FC",
        "escudo": "img/manchester-united.png",
        "entrenador": "Michael Carrick",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Lammens",
                "posiciones": ["POR"],
                "foto": "img/jugadores/manchester-united/lammens.png"
            },
            {
                "nombre": "Bayindir",
                "posiciones": ["POR"],
                "foto": "img/jugadores/manchester-united/bayindir.png"
            },
            {
                "nombre": "Heaton",
                "posiciones": ["POR"],
                "foto": "img/jugadores/manchester-united/heaton.png"
            },
            {
                "nombre": "Onana",
                "posiciones": ["POR"],
                "foto": "img/jugadores/manchester-united/onana.png"
            },
            {
                "nombre": "Yoro",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-united/yoro.png"
            },
            {
                "nombre": "Martínez",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-united/martinez.png"
            },
            {
                "nombre": "De Ligt",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-united/de-ligt.png"
            },
            {
                "nombre": "Heaven",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-united/heaven.png"
            },
            {
                "nombre": "Maguire",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-united/maguire.png"
            },
            {
                "nombre": "Fredicson",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/manchester-united/fredicson.png"
            },
            {
                "nombre": "Shaw",
                "posiciones": ["LI"],
                "foto": "img/jugadores/manchester-united/shaw.png"
            },
            {
                "nombre": "Dorgu",
                "posiciones": ["LI", "EI"],
                "foto": "img/jugadores/manchester-united/dorgu.png"
            },
            {
                "nombre": "Amass",
                "posiciones": ["LI"],
                "foto": "img/jugadores/manchester-united/amass.png"
            },
            {
                "nombre": "Dalot",
                "posiciones": ["LD"],
                "foto": "img/jugadores/manchester-united/dalot.png"
            },
            {
                "nombre": "Mazraoui",
                "posiciones": ["LD"],
                "foto": "img/jugadores/manchester-united/mazraoui.png"
            },
            {
                "nombre": "Ugarte",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/manchester-united/ugarte.png"
            },
            {
                "nombre": "Collyer",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/manchester-united/collyer.png"
            },
            {
                "nombre": "Mainoo",
                "posiciones": ["MC"],
                "foto": "img/jugadores/manchester-united/mainoo.png"
            },
            {
                "nombre": "Bruno",
                "posiciones": ["MCO", "MC"],
                "foto": "img/jugadores/manchester-united/bruno.png"
            },
            {
                "nombre": "Mount",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/manchester-united/mount.png"
            },
            {
                "nombre": "Mbeumo",
                "posiciones": ["ED", "DC"],
                "foto": "img/jugadores/manchester-united/mbeumo.png"
            },
            {
                "nombre": "Amad Diallo",
                "posiciones": ["ED"],
                "foto": "img/jugadores/manchester-united/amad-diallo.png"
            },
            {
                "nombre": "Cunha",
                "posiciones": ["EI", "DC"],
                "foto": "img/jugadores/manchester-united/cunha.png"
            },
            {
                "nombre": "Rashford",
                "posiciones": ["EI", "ED"],
                "foto": "img/jugadores/manchester-united/rashford.png"
            },
            {
                "nombre": "Sesko",
                "posiciones": ["DC"],
                "foto": "img/jugadores/manchester-united/sesko.png"
            },
            {
                "nombre": "Zirkzee",
                "posiciones": ["DC", "MCO"],
                "foto": "img/jugadores/manchester-united/zirkzee.png"
            },
            {
                "nombre": "Wheatley",
                "posiciones": ["DC"],
                "foto": "img/jugadores/manchester-united/wheatley.png"
            },
            {
                "nombre": "Obi",
                "posiciones": ["DC"],
                "foto": "img/jugadores/manchester-united/obi.png"
            }
        ]
    },
    {
        "id": "newcastle",
        "nombre": "Newcastle United FC",
        "escudo": "img/newcastle.png",
        "entrenador": "Eddie Howe",
        "formacion": "4-3-3",
        "plantilla": [
            {
                "nombre": "Pope",
                "posiciones": ["POR"],
                "foto": "img/jugadores/newcastle/pope.png"
            },
            {
                "nombre": "Gillespie",
                "posiciones": ["POR"],
                "foto": "img/jugadores/newcastle/gillespie.png"
            },
            {
                "nombre": "Jaouen",
                "posiciones": ["POR"],
                "foto": "img/jugadores/newcastle/jaouen.png"
            },
            {
                "nombre": "Thiaw",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/newcastle/thiaw.png"
            },
            {
                "nombre": "Botman",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/newcastle/botman.png"
            },
            {
                "nombre": "Schär",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/newcastle/schar.png"
            },
            {
                "nombre": "Burn",
                "posiciones": ["DFC", "LI"],
                "foto": "img/jugadores/newcastle/burn.png"
            },
            {
                "nombre": "Hall",
                "posiciones": ["LI"],
                "foto": "img/jugadores/newcastle/hall.png"
            },
            {
                "nombre": "Alex Murphy",
                "posiciones": ["LI"],
                "foto": "img/jugadores/newcastle/alex-murphy.png"
            },
            {
                "nombre": "Livramento",
                "posiciones": ["LD", "LI"],
                "foto": "img/jugadores/newcastle/livramento.png"
            },
            {
                "nombre": "Ashby",
                "posiciones": ["LD"],
                "foto": "img/jugadores/newcastle/ashby.png"
            },
            {
                "nombre": "Tonali",
                "posiciones": ["MCD", "MC"],
                "foto": "img/jugadores/newcastle/tonali.png"
            },
            {
                "nombre": "Guimarães",
                "posiciones": ["MC", "MCD"],
                "foto": "img/jugadores/newcastle/guimaraes.png"
            },
            {
                "nombre": "Joelinton",
                "posiciones": ["MCO", "MC"],
                "foto": "img/jugadores/newcastle/joelinton.png"
            },
            {
                "nombre": "Miley",
                "posiciones": ["MC", "LD"],
                "foto": "img/jugadores/newcastle/miley.png"
            },
            {
                "nombre": "Ramsey",
                "posiciones": ["MCO", "EI"],
                "foto": "img/jugadores/newcastle/ramsey.png"
            },
            {
                "nombre": "Willock",
                "posiciones": ["MCO", "ED"],
                "foto": "img/jugadores/newcastle/willock.png"
            },
            {
                "nombre": "White",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/newcastle/white.png"
            },
            {
                "nombre": "Barnes",
                "posiciones": ["EI"],
                "foto": "img/jugadores/newcastle/barnes.png"
            },
            {
                "nombre": "Cordero",
                "posiciones": ["EI", "ED"],
                "foto": "img/jugadores/newcastle/cordero.png"
            },
            {
                "nombre": "Elanga",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/newcastle/elanga.png"
            },
            {
                "nombre": "Murphy",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/newcastle/murphy.png"
            },
            {
                "nombre": "Woltemade",
                "posiciones": ["DC"],
                "foto": "img/jugadores/newcastle/woltemade.png"
            },
            {
                "nombre": "Osula",
                "posiciones": ["DC"],
                "foto": "img/jugadores/newcastle/osula.png"
            },
            {
                "nombre": "Wissa",
                "posiciones": ["DC"],
                "foto": "img/jugadores/newcastle/wissa.png"
            }
        ]
    },
    {
        "id": "nottingham-forest",
        "nombre": "Nottingham Forest FC",
        "escudo": "img/nottingham-forest.png",
        "entrenador": "Oliver Glasner",
        "formacion": "3-4-2-1",
        "plantilla": [
            {
                "nombre": "John Victor",
                "posiciones": ["POR"],
                "foto": "img/jugadores/nottingham-forest/john-victor.png"
            },
            {
                "nombre": "Sels",
                "posiciones": ["POR"],
                "foto": "img/jugadores/nottingham-forest/sels.png"
            },
            {
                "nombre": "Murillo",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/nottingham-forest/murillo.png"
            },
            {
                "nombre": "Milenkovic",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/nottingham-forest/milenkovic.png"
            },
            {
                "nombre": "Jair Cunha",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/nottingham-forest/jair-cunha.png"
            },
            {
                "nombre": "Bindon",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/nottingham-forest/bindon.png"
            },
            {
                "nombre": "Morato",
                "posiciones": ["DFC", "LI"],
                "foto": "img/jugadores/nottingham-forest/morato.png"
            },
            {
                "nombre": "Abbott",
                "posiciones": ["DFC", "LD"],
                "foto": "img/jugadores/nottingham-forest/abbott.png"
            },
            {
                "nombre": "Williams",
                "posiciones": ["LI", "LD"],
                "foto": "img/jugadores/nottingham-forest/williams.png"
            },
            {
                "nombre": "Netz",
                "posiciones": ["LI"],
                "foto": "img/jugadores/nottingham-forest/netz.png"
            },
            {
                "nombre": "Richards",
                "posiciones": ["LI"],
                "foto": "img/jugadores/nottingham-forest/richards.png"
            },
            {
                "nombre": "Ola Aina",
                "posiciones": ["LD"],
                "foto": "img/jugadores/nottingham-forest/ola-aina.png"
            },
            {
                "nombre": "Savona",
                "posiciones": ["LD"],
                "foto": "img/jugadores/nottingham-forest/savona.png"
            },
            {
                "nombre": "Moreira",
                "posiciones": ["LD"],
                "foto": "img/jugadores/nottingham-forest/moreira.png"
            },
            {
                "nombre": "Sangaré",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/nottingham-forest/sangare.png"
            },
            {
                "nombre": "Domínguez",
                "posiciones": ["MC", "MCD"],
                "foto": "img/jugadores/nottingham-forest/dominguez.png"
            },
            {
                "nombre": "Yates",
                "posiciones": ["MC"],
                "foto": "img/jugadores/nottingham-forest/yates.png"
            },
            {
                "nombre": "Gibbs-White",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/nottingham-forest/gibbs-white.png"
            },
            {
                "nombre": "Hutchinson",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/nottingham-forest/hutchinson.png"
            },
            {
                "nombre": "McAtee",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/nottingham-forest/mcatee.png"
            },
            {
                "nombre": "Hudson-Odoi",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/nottingham-forest/hudson-odoi.png"
            },
            {
                "nombre": "Ndoye",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/nottingham-forest/ndoye.png"
            },
            {
                "nombre": "Bakwa",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/nottingham-forest/bakwa.png"
            },
            {
                "nombre": "Jota Silva",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/nottingham-forest/jota-silva.png"
            },
            {
                "nombre": "Igor Jesus",
                "posiciones": ["DC", "MCO"],
                "foto": "img/jugadores/nottingham-forest/igor-jesus.png"
            },
            {
                "nombre": "Awoniyi",
                "posiciones": ["DC"],
                "foto": "img/jugadores/nottingham-forest/awoniyi.png"
            },
            {
                "nombre": "Wood",
                "posiciones": ["DC"],
                "foto": "img/jugadores/nottingham-forest/wood.png"
            },
            {
                "nombre": "Kalimuendo",
                "posiciones": ["DC"],
                "foto": "img/jugadores/nottingham-forest/kalimuendo.png"
            }
        ]
    },
    {
        "id": "sunderland",
        "nombre": "Sunderland AFC",
        "escudo": "img/sunderland.png",
        "entrenador": "Régis Le Bris",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Roefs",
                "posiciones": ["POR"],
                "foto": "img/jugadores/sunderland/roefs.png"
            },
            {
                "nombre": "Ellborg",
                "posiciones": ["POR"],
                "foto": "img/jugadores/sunderland/ellborg.png"
            },
            {
                "nombre": "Moore",
                "posiciones": ["POR"],
                "foto": "img/jugadores/sunderland/moore.png"
            },
            {
                "nombre": "Patterson",
                "posiciones": ["POR"],
                "foto": "img/jugadores/sunderland/patterson.png"
            },
            {
                "nombre": "Ballard",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/sunderland/ballard.png"
            },
            {
                "nombre": "Alderete",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/sunderland/alderete.png"
            },
            {
                "nombre": "O'Nien",
                "posiciones": ["DFC", "LD"],
                "foto": "img/jugadores/sunderland/o-nien.png"
            },
            {
                "nombre": "Seelt",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/sunderland/seelt.png"
            },
            {
                "nombre": "Hjelde",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/sunderland/hjelde.png"
            },
            {
                "nombre": "Alese",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/sunderland/alese.png"
            },
            {
                "nombre": "Reinildo",
                "posiciones": ["LI"],
                "foto": "img/jugadores/sunderland/reinildo.png"
            },
            {
                "nombre": "Masuaku",
                "posiciones": ["LI", "DFC"],
                "foto": "img/jugadores/sunderland/masuaku.png"
            },
            {
                "nombre": "Hume",
                "posiciones": ["LD", "LI", "ED"],
                "foto": "img/jugadores/sunderland/hume.png"
            },
            {
                "nombre": "Mukiele",
                "posiciones": ["LD", "DFC"],
                "foto": "img/jugadores/sunderland/mukiele.png"
            },
            {
                "nombre": "Pembélé",
                "posiciones": ["LD"],
                "foto": "img/jugadores/sunderland/pembele.png"
            },
            {
                "nombre": "Xhaka",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/sunderland/xhaka.png"
            },
            {
                "nombre": "Diarra",
                "posiciones": ["MC", "MCO"],
                "foto": "img/jugadores/sunderland/diarra.png"
            },
            {
                "nombre": "Sadiki",
                "posiciones": ["MC", "MCD"],
                "foto": "img/jugadores/sunderland/sadiki.png"
            },
            {
                "nombre": "Browne",
                "posiciones": ["MC", "MCD"],
                "foto": "img/jugadores/sunderland/browne.png"
            },
            {
                "nombre": "Le Fée",
                "posiciones": ["MCO", "EI"],
                "foto": "img/jugadores/sunderland/le-fee.png"
            },
            {
                "nombre": "Rigg",
                "posiciones": ["ED"],
                "foto": "img/jugadores/sunderland/rigg.png"
            },
            {
                "nombre": "Ba",
                "posiciones": ["ED"],
                "foto": "img/jugadores/sunderland/ba.png"
            },
            {
                "nombre": "Angulo",
                "posiciones": ["EI"],
                "foto": "img/jugadores/sunderland/angulo.png"
            },
            {
                "nombre": "Mundle",
                "posiciones": ["EI"],
                "foto": "img/jugadores/sunderland/mundle.png"
            },
            {
                "nombre": "Adingra",
                "posiciones": ["EI"],
                "foto": "img/jugadores/sunderland/adingra.png"
            },
            {
                "nombre": "Talbi",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/sunderland/talbi.png"
            },
            {
                "nombre": "Ta Bi",
                "posiciones": ["ED"],
                "foto": "img/jugadores/sunderland/ta-bi.png"
            },
            {
                "nombre": "Brobbey",
                "posiciones": ["DC"],
                "foto": "img/jugadores/sunderland/brobbey.png"
            },
            {
                "nombre": "Isidor",
                "posiciones": ["DC"],
                "foto": "img/jugadores/sunderland/isidor.png"
            },
            {
                "nombre": "Mayenda",
                "posiciones": ["DC", "ED"],
                "foto": "img/jugadores/sunderland/mayenda.png"
            },
            {
                "nombre": "Abdullahi",
                "posiciones": ["DC"],
                "foto": "img/jugadores/sunderland/abdullahi.png"
            },
            {
                "nombre": "Semedo",
                "posiciones": ["DC"],
                "foto": "img/jugadores/sunderland/semedo.png"
            }
        ]
    },
    {
        "id": "tottenham",
        "nombre": "Tottenham Hotspur FC",
        "escudo": "img/tottenham.png",
        "entrenador": "Roberto De Zerbi",
        "formacion": "4-2-3-1",
        "plantilla": [
            {
                "nombre": "Vicario",
                "posiciones": ["POR"],
                "foto": "img/jugadores/tottenham/vicario.png"
            },
            {
                "nombre": "Kinský",
                "posiciones": ["POR"],
                "foto": "img/jugadores/tottenham/kinsky.png"
            },
            {
                "nombre": "Austin",
                "posiciones": ["POR"],
                "foto": "img/jugadores/tottenham/austin.png"
            },
            {
                "nombre": "Dúbravka",
                "posiciones": ["POR"],
                "foto": "img/jugadores/tottenham/dubravka.png"
            },
            {
                "nombre": "Van de Ven",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/van-de-ven.png"
            },
            {
                "nombre": "Romero",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/romero.png"
            },
            {
                "nombre": "Danso",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/danso.png"
            },
            {
                "nombre": "Dragusin",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/dragusin.png"
            },
            {
                "nombre": "Davies",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/davies.png"
            },
            {
                "nombre": "Vuskovic",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/vuskovic.png"
            },
            {
                "nombre": "Van Hecke",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/van-hecke.png"
            },
            {
                "nombre": "Senesi",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/senesi.png"
            },
            {
                "nombre": "Takai",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/takai.png"
            },
            {
                "nombre": "Phillips",
                "posiciones": ["DFC"],
                "foto": "img/jugadores/tottenham/phillips.png"
            },
            {
                "nombre": "Udogie",
                "posiciones": ["LI"],
                "foto": "img/jugadores/tottenham/udogie.png"
            },
            {
                "nombre": "Spence",
                "posiciones": ["LI", "LD"],
                "foto": "img/jugadores/tottenham/spence.png"
            },
            {
                "nombre": "Souza",
                "posiciones": ["LI"],
                "foto": "img/jugadores/tottenham/souza.png"
            },
            {
                "nombre": "Robertson",
                "posiciones": ["LI"],
                "foto": "img/jugadores/tottenham/robertson.png"
            },
            {
                "nombre": "Porro",
                "posiciones": ["LD"],
                "foto": "img/jugadores/tottenham/porro.png"
            },
            {
                "nombre": "Bentancur",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/tottenham/bentancur.png"
            },
            {
                "nombre": "Gray",
                "posiciones": ["MCD"],
                "foto": "img/jugadores/tottenham/gray.png"
            },
            {
                "nombre": "Bergvall",
                "posiciones": ["MC"],
                "foto": "img/jugadores/tottenham/bergvall.png"
            },
            {
                "nombre": "Gallagher",
                "posiciones": ["MC"],
                "foto": "img/jugadores/tottenham/gallagher.png"
            },
            {
                "nombre": "Matar Sarr",
                "posiciones": ["MC"],
                "foto": "img/jugadores/tottenham/matar-sarr.png"
            },
            {
                "nombre": "Devine",
                "posiciones": ["MC"],
                "foto": "img/jugadores/tottenham/devine.png"
            },
            {
                "nombre": "Mateus",
                "posiciones": ["MC"],
                "foto": "img/jugadores/tottenham/mateus.png"
            },
            {
                "nombre": "Xavi Simons",
                "posiciones": ["MCO", "EI"],
                "foto": "img/jugadores/tottenham/xavi-simons.png"
            },
            {
                "nombre": "Maddison",
                "posiciones": ["MCO"],
                "foto": "img/jugadores/tottenham/maddison.png"
            },
            {
                "nombre": "Kulusevski",
                "posiciones": ["ED", "MCO"],
                "foto": "img/jugadores/tottenham/kulusevski.png"
            },
            {
                "nombre": "Odobert",
                "posiciones": ["EI"],
                "foto": "img/jugadores/tottenham/odobert.png"
            },
            {
                "nombre": "Moore",
                "posiciones": ["EI"],
                "foto": "img/jugadores/tottenham/moore.png"
            },
            {
                "nombre": "Solomon",
                "posiciones": ["EI"],
                "foto": "img/jugadores/tottenham/solomon.png"
            },
            {
                "nombre": "Kudus",
                "posiciones": ["ED"],
                "foto": "img/jugadores/tottenham/kudus.png"
            },
            {
                "nombre": "Yang",
                "posiciones": ["ED", "EI"],
                "foto": "img/jugadores/tottenham/yang.png"
            },
            {
                "nombre": "Solanke",
                "posiciones": ["DC"],
                "foto": "img/jugadores/tottenham/solanke.png"
            },
            {
                "nombre": "Richarlison",
                "posiciones": ["DC"],
                "foto": "img/jugadores/tottenham/richarlison.png"
            },
            {
                "nombre": "Tel",
                "posiciones": ["EI", "DC"],
                "foto": "img/jugadores/tottenham/tel.png"
            },
            {
                "nombre": "Scarlett",
                "posiciones": ["DC"],
                "foto": "img/jugadores/tottenham/scarlett.png"
            },
        ]
    }
]