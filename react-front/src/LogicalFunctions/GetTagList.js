
// This function returns all tags split into categories

export default function GetTagList() {

    let children = ["babies", "children (age groups)", "children (family members)", "Children and families", "Daycare and education", "early childhood education and care", "families with babies", "families with children", "families", "Kids", "Lastentapahtumat", "playgrounds", "preschoolers (age group)", "pupils", "Pupils", "toddlers", "playing (children's games)"]
    let theatre = ["children's theatres (theatre for children)", "circus (performing arts)", "plays", "Teatteri ja sirkus", "Teatteri"]
    let music = ["a cappella", "art music", "church music", "Concerts and clubs", "concerts", "games with music", "jazz", "live music", "music clubs", "music dramas", "music", "musicals", "Musiikki", "operas", "organ music", "rock music", "singing games", "songs"]
    let dance = ["ballet (art forms)", "ballets (works)", "contemporary dance", "dance (performing arts)", "Tanssi"]
    let exhibitions = ["art exhibitions", "art museums", "exhibitions", "Exhibitions", "Kuvataide", "museums", "Näyttelyt"]
    let sports_and_outdoors = ["billiards", "clubs (recreational)", "exercise games", "family sports", "games", "Games", "gymnastics", "ice hockey", "outdoor games", "outdoor recreation", "physical training", "residents’ parks", "sports contests", "sports", "winter sports"]
    let fine_arts = ["art", "contemporary art", "culture", "fine arts", "literary art", "literature", "Literature"]
    let design = ["ceramic art", "ceramics", "craft skills", "design (artistic creation)", "painting (visual arts)"]
    let cultural_events = ["cinema (art forms)", "comedy films", "cultural events", "Elokuva ja media", "Elokuvat", "films", "horror", "journalism", "stand-up comedy", "theatre events", "theatre"]
    let other_tags = ["Annantalo", "Caisa", "courses (societal objects)", "Courses", "Culture and leisure", "Englanti (TV)", "Englanti", "Entresse Library", "Espoo", "Events and tips", "events", "festivals", "Finnish language", "food", "General", "guidance", "HelMet", "Helsinki", "Immigrants", "Infonäytöt (Helsinki)", "Juttuja kirjastosta", "Kannelmäen kirjasto ", "Kanneltalo", "Kauniainen", "Kirjallisuus ja sanataide", "languages", "Lauttasaari library", "Libraries and services", "libraries", "Libraries", "Library Oodi", "Malminkartano Library", "Malmitalo", "migrants", "morning activities", "Muu", "Muut tapahtumat", "Normaali", "Nuorille", "nursery rhyme", "Opastuskalenteri", "Other events", "other languages", "Oulunkylä Library", "Palvelut", "participation", "performing arts", "Pukinmäen kirjasto ", "Rikhardinkatu Library", "Ruotsi (TV)", "Ruotsi", "Russian language", "Russian", "Savoy-teatteri", "senior citizens", "Senior citizens", "Sirkus", "Social services and health care", "Stoa", "students", "Students", "Suomi", "Teens", "Tikkurilan kirjasto ", "Training and courses", "Vantaa", "Vuotalo", "well-being", "young people", "Youth", "Афиша", "Events", "handcrafting", "trips"]
    let talks_and_workshops = ["Book clubs", "conversation", "democracy", "hobby crafting", "Language Cafés and discussion groups", "lectures", "Luennot ja keskustelut", "political decision making", "reading", "story hours", "Story hours", "town and city councils", "Työpajat", "urban policy", "workshops"]
    let online_and_tv = ["Etätapahtumat", "Näkyy TV-sovelluksessa", "remote participation", "Suomi (TV)"]

    // These tags appear rarely and are thrown in with "other tags"
    let rare_tags = ["sustainable development", "Pilates method", "drawing (artistic creation)", "children's music", "opera (arts)", "contemporary circus", "photography exhibitions", "popular music", "Nöykkiö Library", "Bibban just nu", "dance events", "chair exercise", "yoga", "stretching exercise", "folk music (traditional music)", "health enhancing physical activity", "jewellery", "handicrafts", "Suutarilan kirjasto ", "Maunula Library", "responsibility (properties)", "Muut kulttuuritapahtumat (monitaide)", "fairy tales", "nature", "technology", "communications technology", "heavy metal", "music theatres", "film music", "architecture", "figure skating", "ice dancing", "Pitäjänmäen kirjasto ", "walking tours", "homosexuality", "Pasila Library", "environment", "art galleries", "Christmas", "adults", "burlesque", "health services", "photographic art", "modern art", "Lumo Library", "Itäkeskuksen kirjasto ", "social services", "Aikuiset", "chamber music", "Martinlaakson kirjasto ", "food culture", "entertainment", "installations (works of art)", "children's culture", "history", "tradition", "virtuality", "Kallio Library", "video art", "Sandkulla bibliotek ", "Myyrmäen kirjasto ", "Hakunilan kirjasto ", "Library Apple", "literature circles", "tapahtuma", "teaching and instruction", "comedy (style)", "tourism", "water systems", "Ateneum", "Vuosaari Library", "Christmas tradition", "Malmin kirjasto ", "recycling", "bingo", "library services", "Internet", "Stoan", "Herttoniemen kirjasto ", "punk rock", "shows", "urban culture", "perinnetapahtuma", "electronic popular music", "piano music", "Egyptology", "Etelä-Haaga Library", "social work", "Stoa (Helsinki)", "water quality", "Design ja käsityö", "Lapset", "sculpture (visual arts)", "Harrastuspassi (Helsinki)", "sailing", "Töölön kirjasto ", "Job seekers", "fairs and markets", "Tapiola Library", "Etäosallistuminen", "choral music", "health", "blues (Afro-American music)", "world music", "Vapaa-ajan kurssit", "body awareness", "Kalajärven kirjasto ", "classics", "water protection", "Kiasma", "running", "furniture", "sports events", "beauty care sector", "harp instruments", "camps", "self-management (personal development)", "wines", "Ohjelmasivun alanosto", "voyages and travels", "flute music", "spelman music", "astronomy", "walking (motion)", "Midsummer", "music technology", "early music", "motorcycling", "carnivals (celebrations)", "Saint Lucy's Day", "gardening", "Easter", "physical well-being", "media art", "May Day", "boating", "hamburgers", "landscape architecture", "documentary films", "collections", "prehistory", "multiculturalism", "Sibelius Violin Competition", "events related to mutual activity", "working life", "horse sports", "show jumping", "ryijy rugs", "art handicraft", "magicians", "beer", "startup companies", "growth companies", "beverages", "beverage industry", "Venäjänkielinen kirjasto", "Suomenlinnan kirjasto ", "floorball", "vegetation", "comic art", "comics", "football", "ball sports", "concert activity", "auction", "charity events", "independence days", "child protection", "archaeology", "traffic", "symphony orchestras", "dog shows", "forests", "climate changes", "climate", "science", "maritime navigation", "primigravida", "maternity leave", "pop up phenomena", "tableware", "vintage", "parenthood", "stay-at-home mothers", "maternity", "mothers", "skateboarding", "light music", "hard rock", "fashion", "rockabilly music", "basketball", "Muotoilu", "cricket", "light music orchestras", "podcasting", "Helsinki residents", "urban nature", "nature sites", "nature conservation", "nature tourism", "video artists", "sound art", "musiikki", "experimental music", "festivaali", "Puistolan kirjasto ", "celebrations", "Tapanilan kirjasto ", "skiing", "Arabianrannan kirjasto ", "schlager music", "folk rock", "rhythm and blues music", "improvisations (compositions)", "music for meditation", "safety and security", "stars", "motoring"]
    
    // each object has a title(string) and list of tags(array)
    let tagArray = [
        {categoryTitle: "Children", tags: children, isChecked: true},
        {categoryTitle: "Theatre", tags: theatre, isChecked: true},
        {categoryTitle: "Music", tags: music, isChecked: true},
        {categoryTitle: "Dance", tags: dance, isChecked: true},
        {categoryTitle: "Exhibitions", tags: exhibitions, isChecked: true},
        {categoryTitle: "Sports and Outdoors", tags: sports_and_outdoors, isChecked: true},
        {categoryTitle: "Fine Arts", tags: fine_arts, isChecked: true},
        {categoryTitle: "Design", tags: design, isChecked: true},
        {categoryTitle: "Cultural Events", tags: cultural_events, isChecked: true},
        {categoryTitle: "Talks and Workshops", tags: talks_and_workshops, isChecked: true},
        {categoryTitle: "Online and TV", tags: online_and_tv, isChecked: true},
        {categoryTitle: "Other Tags", tags: other_tags.concat(rare_tags), isChecked: true},
    ]
    
    return tagArray
}