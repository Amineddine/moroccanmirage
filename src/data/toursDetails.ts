export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  accommodation?: string;
}

export interface TourDetail {
  id: string;
  itinerary: ItineraryDay[];
  overview: string;
}

export const toursDetails: Record<string, TourDetail> = {
  "marrakech-3-days-desert": {
    id: "marrakech-3-days-desert",
    overview:
      "Three days of concentrated Moroccan beauty — from the soaring kasbahs of the Draa Valley to the golden silence of the Erg Chebbi dunes. Arrive in Marrakech. Leave transformed.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech → Aït Ben Haddou → Ouarzazate",
        description:
          "Depart Marrakech via the Tizi n'Tichka pass — the highest paved mountain road in North Africa at 2,260m — before descending into the ancient Draa Valley. Visit the UNESCO World Heritage ksar of Aït Ben Haddou, whose earthen towers have stood for over a millennium. Continue to Ouarzazate for the night.",
        highlights: ["Tizi n'Tichka mountain pass", "Aït Ben Haddou ksar", "Ouarzazate film studios"],
        accommodation: "Riad Ouarzazate",
      },
      {
        day: 2,
        title: "Ouarzazate → Dades Gorge → Merzouga",
        description:
          "Follow the legendary Road of a Thousand Kasbahs east, winding through the palm-fringed Draa Valley past Skoura's oasis. Pause at the Dades Gorge — a dramatic canyon carved by eons of Atlas meltwater — before the final approach to Merzouga. Arrive as the sun sets gold on Erg Chebbi. A camel caravan awaits.",
        highlights: ["Road of a Thousand Kasbahs", "Dades Gorge", "Camel trek into the Sahara", "Desert camp overnight"],
        accommodation: "Luxury Desert Camp, Merzouga",
      },
      {
        day: 3,
        title: "Merzouga → Marrakech",
        description:
          "Rise before dawn to watch the sun ignite the dunes from horseback or on foot. After breakfast at the camp, return through Erfoud and the Ziz Valley — a narrow ribbon of palms threading through ochre stone — before ascending back to Marrakech via Midelt and the Middle Atlas.",
        highlights: ["Sunrise over Erg Chebbi", "Ziz Valley oasis", "Middle Atlas return route"],
      },
    ],
  },
  "marrakech-3-days-fes": {
    id: "marrakech-3-days-fes",
    overview:
      "A scenic three-day traverse of Morocco's spine — from the rose city to the ancient imperial capital, through the Atlas, the Ziz, and the Middle Atlas forests.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech → Aït Ben Haddou → Ouarzazate",
        description:
          "Cross the Tizi n'Tichka pass and descend to the legendary ksar of Aït Ben Haddou. Explore its layered earth towers before settling in Ouarzazate for an evening stroll along the Draa.",
        highlights: ["High Atlas crossing", "Aït Ben Haddou UNESCO site", "Ouarzazate citadel"],
        accommodation: "Riad in Ouarzazate",
      },
      {
        day: 2,
        title: "Ouarzazate → Erfoud → Midelt",
        description:
          "East through the Draa Valley's sea of palms to Erfoud, gateway of the Saharan fossils. Turn north into the Ziz Gorge and climb to Midelt — the 'apple city' — in the Middle Atlas.",
        highlights: ["Draa Valley palmeries", "Ziz Gorge", "Midelt market"],
        accommodation: "Auberge in Midelt",
      },
      {
        day: 3,
        title: "Midelt → Ifrane → Fes",
        description:
          "Descend through the cedar forests of Azrou — where wild Barbary macaques roam — before the Swiss-style mountain town of Ifrane and the final approach to Fes el-Bali, the world's largest car-free medina.",
        highlights: ["Cedar forest of Azrou", "Barbary macaques", "Ifrane alpine town", "Arrival in Fes medina"],
      },
    ],
  },
  "marrakech-4-days": {
    id: "marrakech-4-days",
    overview:
      "Four days that capture Morocco's elemental contrasts — mountain passes, desert dunes, ancient ksours, and the silence of the Sahara — all departing and returning to Marrakech.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech → Aït Ben Haddou → Skoura",
        description:
          "Depart through the High Atlas and descend to Aït Ben Haddou. Continue east through the palmery of Skoura, where kasbahs rise between the palms like monuments to forgotten dynasties.",
        highlights: ["Atlas crossing", "Aït Ben Haddou", "Skoura oasis palmery"],
        accommodation: "Kasbah hotel, Skoura",
      },
      {
        day: 2,
        title: "Skoura → Dades → Todra → Erfoud",
        description:
          "A day of gorges and canyons. First the sinuous curves of the Dades Gorge, then the sheer 300-metre walls of the Todra Gorge — a climbers' paradise. East to Erfoud for the night.",
        highlights: ["Dades Gorge viewpoints", "Todra Gorge canyon floor", "Tafilalt region"],
        accommodation: "Riad in Erfoud",
      },
      {
        day: 3,
        title: "Erfoud → Merzouga Sahara → Desert Camp",
        description:
          "The Sahara reveals itself slowly — first in patches of windblown sand, then in full golden immensity. A camel leads you to your luxury desert camp as the sky turns violet.",
        highlights: ["Erg Chebbi dunes", "Sunset camel trek", "Stargazing from the desert"],
        accommodation: "Luxury Desert Camp",
      },
      {
        day: 4,
        title: "Merzouga → Rose Valley → Marrakech",
        description:
          "Sunrise over the dunes, then west through the Valley of Roses — where every May, damask petals are harvested for the world's finest rose water — and back across the Atlas to Marrakech.",
        highlights: ["Dawn at Erg Chebbi", "Kalaat M'gouna Rose Valley", "Atlas return via Tizi n'Tichka"],
      },
    ],
  },
  "marrakech-5-days": {
    id: "marrakech-5-days",
    overview:
      "Five days through the complete spectrum of Moroccan landscape — mountains, gorges, desert, and valley — with one full night immersed in the Sahara.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech → Atlas → Aït Ben Haddou",
        description:
          "The spectacular Tizi n'Tichka pass opens the journey. Descend to the ancient earthen citadel of Aït Ben Haddou before settling in the kasbah town of Ouarzazate.",
        highlights: ["Tizi n'Tichka (2260m)", "Aït Ben Haddou ksar", "Ouarzazate kasbah district"],
        accommodation: "Riad, Ouarzazate",
      },
      {
        day: 2,
        title: "Ouarzazate → Skoura → Dades Gorge",
        description:
          "East along the kasbah road, through Skoura's palm cathedral and into the sculpted curves of the Dades Gorge — where the red canyon walls glow at golden hour.",
        highlights: ["Skoura palmery", "Dades Gorge monkey fingers", "Gorge viewpoint at sunset"],
        accommodation: "Kasbah hotel, Dades",
      },
      {
        day: 3,
        title: "Dades → Todra → Merzouga",
        description:
          "The Todra Gorge narrows to a cathedral of rock before opening back to the desert plain. The road east loses its greenery and gains sand — Merzouga and the Erg Chebbi dunes await.",
        highlights: ["Todra Gorge walls (300m)", "Tafilalt oasis", "First sight of Erg Chebbi"],
        accommodation: "Desert camp, Merzouga",
      },
      {
        day: 4,
        title: "Merzouga → Zagora → Draa Valley",
        description:
          "A second desert region — the Draa Valley runs south to the edge of the Sahara, its palms and ancient ksours offering a different, quieter face of the desert.",
        highlights: ["Zagora's ancient walls", "Draa Valley palmery", "Tamgroute earthen library"],
        accommodation: "Riad, Zagora",
      },
      {
        day: 5,
        title: "Zagora → Ouarzazate → Marrakech",
        description:
          "The long and beautiful road back — through Ouarzazate and the final climb over the Atlas, arriving in Marrakech by evening.",
        highlights: ["Return via High Atlas", "Panoramic mountain views", "Arrival in Marrakech"],
      },
    ],
  },
  "marrakech-6-days": {
    id: "marrakech-6-days",
    overview:
      "Six days encompassing Morocco's greatest natural and architectural treasures — from the Sahara's silence to the medina's chaos — in seamless luxury.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech → Atlas → Aït Ben Haddou",
        description: "Cross the Atlas via Tizi n'Tichka and visit the UNESCO fortress of Aït Ben Haddou.",
        highlights: ["High Atlas mountain pass", "Aït Ben Haddou"],
        accommodation: "Riad, Ouarzazate",
      },
      {
        day: 2,
        title: "Ouarzazate → Dades Gorge",
        description: "East along the kasbah road through the palmery of Skoura to the Dades canyon.",
        highlights: ["Skoura oasis", "Dades Gorge"],
        accommodation: "Kasbah, Dades",
      },
      {
        day: 3,
        title: "Dades → Todra → Merzouga",
        description: "Through the dramatic Todra Gorge to the Sahara's edge at Merzouga.",
        highlights: ["Todra canyon walls", "Erg Chebbi approach"],
        accommodation: "Desert Camp",
      },
      {
        day: 4,
        title: "Merzouga → Sahara",
        description: "A full day in the desert — sandboarding, camel trek, and a night under infinite stars.",
        highlights: ["Sandboarding", "Berber music at camp", "Stargazing"],
        accommodation: "Luxury Desert Camp",
      },
      {
        day: 5,
        title: "Merzouga → Rose Valley → Ouarzazate",
        description: "Return west through the Rose Valley and the ancient Draa kasbah corridor.",
        highlights: ["Kalaat M'gouna rose fields", "Draa Valley"],
        accommodation: "Riad, Ouarzazate",
      },
      {
        day: 6,
        title: "Ouarzazate → Marrakech",
        description: "The final Atlas crossing back to the Red City.",
        highlights: ["Tizi n'Tichka sunrise views", "Arrival in Marrakech"],
      },
    ],
  },
  "marrakech-8-days": {
    id: "marrakech-8-days",
    overview:
      "Eight days connecting Morocco's imperial cities and natural wonders, concluding at Casablanca's Atlantic coast.",
    itinerary: [
      {
        day: 1,
        title: "Marrakech → Aït Ben Haddou",
        description: "Cross the High Atlas to the legendary UNESCO ksar.",
        highlights: ["Tizi n'Tichka pass", "Aït Ben Haddou"],
        accommodation: "Riad, Ouarzazate",
      },
      {
        day: 2,
        title: "Ouarzazate → Dades → Merzouga",
        description: "The kasbah road to the Sahara's edge.",
        highlights: ["Dades Gorge", "Todra Gorge"],
        accommodation: "Desert Camp",
      },
      {
        day: 3,
        title: "Sahara Experience",
        description: "A full day immersed in Erg Chebbi's golden infinity.",
        highlights: ["Sunrise dunes", "Camel trek", "Desert camp dinner"],
        accommodation: "Luxury Desert Camp",
      },
      {
        day: 4,
        title: "Merzouga → Midelt → Fes",
        description: "North through the Ziz Valley and Middle Atlas to Fes.",
        highlights: ["Ziz Valley", "Cedar forest", "Arrival in Fes"],
        accommodation: "Riad, Fes",
      },
      {
        day: 5,
        title: "Fes Medina",
        description: "Full day exploring the world's oldest living medina.",
        highlights: ["Chouara Tanneries", "Al-Qarawiyyin University", "Bou Inania Madrasa"],
        accommodation: "Riad, Fes",
      },
      {
        day: 6,
        title: "Fes → Meknes → Volubilis → Chefchaouen",
        description: "Roman ruins at Volubilis, then the imperial city of Meknes before the blue city.",
        highlights: ["Volubilis Roman ruins", "Meknes Bab Mansour", "Chefchaouen arrival"],
        accommodation: "Riad, Chefchaouen",
      },
      {
        day: 7,
        title: "Chefchaouen → Rabat",
        description: "From the blue city to the Atlantic — Morocco's elegant capital.",
        highlights: ["Chefchaouen medina", "Rabat Kasbah des Oudaias", "Hassan Tower"],
        accommodation: "Hotel, Rabat",
      },
      {
        day: 8,
        title: "Rabat → Casablanca",
        description: "The coastal road south to Casablanca.",
        highlights: ["Hassan II Mosque", "Casablanca Corniche", "End of journey"],
      },
    ],
  },
  "marrakech-10-days": {
    id: "marrakech-10-days",
    overview:
      "Ten days — the definitive Morocco circuit, covering the Sahara, all four imperial cities, and the Atlantic coast.",
    itinerary: [
      { day: 1, title: "Marrakech → Atlas → Aït Ben Haddou", description: "Cross the Tizi n'Tichka pass to the famous ksar.", highlights: ["High Atlas", "Aït Ben Haddou"], accommodation: "Riad, Ouarzazate" },
      { day: 2, title: "Ouarzazate → Dades Gorge", description: "East along the kasbah road.", highlights: ["Dades canyon"], accommodation: "Kasbah, Dades" },
      { day: 3, title: "Dades → Todra → Merzouga", description: "Gorges and dunes.", highlights: ["Todra walls", "Erg Chebbi"], accommodation: "Desert Camp" },
      { day: 4, title: "Sahara Day", description: "Full immersion in the Erg Chebbi dunes.", highlights: ["Sandboarding", "Camel trek"], accommodation: "Luxury Desert Camp" },
      { day: 5, title: "Merzouga → Midelt → Fes", description: "North to Fes via Ziz Valley.", highlights: ["Ziz Valley", "Cedar forest"], accommodation: "Riad, Fes" },
      { day: 6, title: "Fes Medina", description: "The world's oldest living city.", highlights: ["Tanneries", "Al-Qarawiyyin"], accommodation: "Riad, Fes" },
      { day: 7, title: "Fes → Volubilis → Meknes", description: "Roman ruins and imperial grandeur.", highlights: ["Volubilis", "Bab Mansour"], accommodation: "Riad, Meknes" },
      { day: 8, title: "Meknes → Chefchaouen", description: "The blue city of the Rif.", highlights: ["Blue alleyways", "Rif mountains"], accommodation: "Riad, Chefchaouen" },
      { day: 9, title: "Chefchaouen → Rabat", description: "Atlantic capital of Morocco.", highlights: ["Oudaia Kasbah", "Hassan Tower"], accommodation: "Hotel, Rabat" },
      { day: 10, title: "Rabat → Casablanca → Marrakech", description: "Final leg to Marrakech.", highlights: ["Hassan II Mosque", "Return to Marrakech"] },
    ],
  },
  "casablanca-15-days": {
    id: "casablanca-15-days",
    overview: "The most comprehensive Morocco experience — 15 days covering every major landscape, city, and cultural site the kingdom has to offer.",
    itinerary: [
      { day: 1, title: "Casablanca → Rabat", description: "The Atlantic capital — kasbah and tower.", highlights: ["Hassan II Mosque", "Oudaia Kasbah"], accommodation: "Hotel, Rabat" },
      { day: 2, title: "Rabat → Chefchaouen", description: "North to the blue city of the Rif.", highlights: ["Rif mountain road", "Blue medina arrival"], accommodation: "Riad, Chefchaouen" },
      { day: 3, title: "Chefchaouen", description: "Full day in the labyrinthine blue streets.", highlights: ["Plaza Uta el-Hammam", "Ras el-Maa waterfall"], accommodation: "Riad, Chefchaouen" },
      { day: 4, title: "Chefchaouen → Fes", description: "South through the Rif to the ancient medina.", highlights: ["Middle Atlas forest", "Fes el-Bali arrival"], accommodation: "Riad, Fes" },
      { day: 5, title: "Fes Medina", description: "The world's largest car-free medina.", highlights: ["Chouara Tanneries", "Al-Qarawiyyin", "Bou Inania"], accommodation: "Riad, Fes" },
      { day: 6, title: "Fes → Midelt → Erfoud", description: "Through the Middle Atlas and Ziz Valley.", highlights: ["Midelt apple region", "Ziz Gorge"], accommodation: "Hotel, Erfoud" },
      { day: 7, title: "Erfoud → Merzouga", description: "The Sahara unfolds.", highlights: ["Erg Chebbi approach", "Camel sunset trek"], accommodation: "Luxury Desert Camp" },
      { day: 8, title: "Sahara Day", description: "Full desert immersion.", highlights: ["Sunrise dunes", "Sandboarding", "Berber nomad visit"], accommodation: "Desert Camp" },
      { day: 9, title: "Merzouga → Dades Gorge", description: "West to the canyon country.", highlights: ["Todra Gorge", "Dades curves"], accommodation: "Kasbah, Dades" },
      { day: 10, title: "Dades → Skoura → Ouarzazate", description: "Palmeries and fortress towns.", highlights: ["Skoura oasis", "Ouarzazate studios"], accommodation: "Riad, Ouarzazate" },
      { day: 11, title: "Ouarzazate → Aït Ben Haddou", description: "The UNESCO ksar in full day light.", highlights: ["Aït Ben Haddou at noon", "Traditional ceramics"], accommodation: "Riad, Ouarzazate" },
      { day: 12, title: "Ouarzazate → Draa Valley → Zagora", description: "South into the deep Draa Valley.", highlights: ["Draa palmeries", "Tamgroute"], accommodation: "Riad, Zagora" },
      { day: 13, title: "Zagora → Rose Valley → Marrakech", description: "Through the Rose Valley and over the Atlas.", highlights: ["Rose fields", "Tizi n'Tichka panorama"], accommodation: "Riad, Marrakech" },
      { day: 14, title: "Marrakech", description: "Explore the Medina, souks, and Djemaa el-Fna.", highlights: ["Bahia Palace", "Souks", "Djemaa el-Fna"], accommodation: "Riad, Marrakech" },
      { day: 15, title: "Marrakech → Casablanca", description: "Return to the Atlantic coast.", highlights: ["Coastal highway", "Journey's end"] },
    ],
  },
  "casablanca-6-days": {
    id: "casablanca-6-days",
    overview: "Six days from Casablanca's Atlantic modernity to Marrakech's ancient rose-pink medina via the Sahara's edge.",
    itinerary: [
      { day: 1, title: "Casablanca → Rabat → Meknes", description: "The coastal imperial corridor.", highlights: ["Oudaia Kasbah", "Bab Mansour"], accommodation: "Riad, Meknes" },
      { day: 2, title: "Meknes → Fes", description: "Ancient university city and tanneries.", highlights: ["Al-Qarawiyyin", "Chouara Tanneries"], accommodation: "Riad, Fes" },
      { day: 3, title: "Fes → Midelt → Merzouga", description: "Through the Atlas to the Sahara.", highlights: ["Middle Atlas cedar forest", "Erg Chebbi approach"], accommodation: "Desert Camp" },
      { day: 4, title: "Sahara → Dades Gorge", description: "Sunrise over the dunes then west to canyon country.", highlights: ["Dunes at dawn", "Dades Gorge"], accommodation: "Kasbah, Dades" },
      { day: 5, title: "Dades → Aït Ben Haddou → Ouarzazate", description: "Kasbahs and cinematic landscapes.", highlights: ["Aït Ben Haddou", "Ouarzazate film city"], accommodation: "Riad, Ouarzazate" },
      { day: 6, title: "Ouarzazate → Atlas → Marrakech", description: "The final mountain crossing to the Red City.", highlights: ["Tizi n'Tichka", "Marrakech arrival"] },
    ],
  },
  "casablanca-8-days": {
    id: "casablanca-8-days",
    overview: "Eight days of immersive Morocco — from Casablanca's coast through the imperial heartland to the Sahara and finally Marrakech.",
    itinerary: [
      { day: 1, title: "Casablanca → Rabat", description: "Atlantic capital exploration.", highlights: ["Hassan II Mosque", "Rabat Kasbah"], accommodation: "Hotel, Rabat" },
      { day: 2, title: "Rabat → Volubilis → Fes", description: "Roman ruins and the ancient medina.", highlights: ["Volubilis mosaics", "Fes arrival"], accommodation: "Riad, Fes" },
      { day: 3, title: "Fes Medina", description: "Full day in the UNESCO medina.", highlights: ["Tanneries", "Madrasa Bou Inania"], accommodation: "Riad, Fes" },
      { day: 4, title: "Fes → Midelt → Erfoud", description: "South through the Middle Atlas.", highlights: ["Ziz Valley gorge", "Erfoud fossils"], accommodation: "Hotel, Erfoud" },
      { day: 5, title: "Erfoud → Sahara → Desert Camp", description: "The Sahara in its full magnificence.", highlights: ["Camel trek", "Desert sunset"], accommodation: "Luxury Desert Camp" },
      { day: 6, title: "Merzouga → Dades → Ouarzazate", description: "Gorges and kasbahs on the return.", highlights: ["Todra Gorge", "Dades curves"], accommodation: "Riad, Ouarzazate" },
      { day: 7, title: "Ouarzazate → Aït Ben Haddou", description: "The iconic UNESCO ksar.", highlights: ["Aït Ben Haddou walls", "Sunset photography"], accommodation: "Riad, Ouarzazate" },
      { day: 8, title: "Ouarzazate → Atlas → Marrakech", description: "Return via the Atlas to Marrakech.", highlights: ["Mountain pass", "Arrival in Marrakech"] },
    ],
  },
  "casablanca-10-days": {
    id: "casablanca-10-days",
    overview: "Ten days connecting Casablanca's Atlantic modernity with every shade of Morocco's landscape and culture.",
    itinerary: [
      { day: 1, title: "Casablanca → Rabat", description: "Monuments and coastal light.", highlights: ["Hassan II Mosque", "Kasbah des Oudaias"], accommodation: "Hotel, Rabat" },
      { day: 2, title: "Rabat → Chefchaouen", description: "North to the blue city.", highlights: ["Rif mountains", "Blue medina"], accommodation: "Riad, Chefchaouen" },
      { day: 3, title: "Chefchaouen → Fes", description: "Through the mountains to the ancient city.", highlights: ["Cedar forest", "Fes el-Bali"], accommodation: "Riad, Fes" },
      { day: 4, title: "Fes Medina", description: "Full day in the tanneries and souks.", highlights: ["Chouara", "Bou Inania", "El-Attarine"], accommodation: "Riad, Fes" },
      { day: 5, title: "Fes → Midelt → Merzouga", description: "The Sahara approach through the Atlas.", highlights: ["Ziz Gorge", "First dunes"], accommodation: "Desert Camp" },
      { day: 6, title: "Sahara Day", description: "Full desert immersion.", highlights: ["Sandboarding", "Camel trek", "Stargazing"], accommodation: "Luxury Desert Camp" },
      { day: 7, title: "Merzouga → Dades Gorge", description: "Canyon country of the south.", highlights: ["Todra Gorge", "Dades curves"], accommodation: "Kasbah, Dades" },
      { day: 8, title: "Dades → Aït Ben Haddou", description: "UNESCO fortress of the Draa Valley.", highlights: ["Aït Ben Haddou", "Ouarzazate"], accommodation: "Riad, Ouarzazate" },
      { day: 9, title: "Ouarzazate → Rose Valley → Atlas", description: "Rose fields and the mountain return.", highlights: ["Kalaat M'gouna", "Tizi n'Tichka"], accommodation: "Riad, Marrakech" },
      { day: 10, title: "Marrakech → Casablanca", description: "Final coastal leg.", highlights: ["Casablanca coast", "Journey's end"] },
    ],
  },
  "casablanca-12-days": {
    id: "casablanca-12-days",
    overview: "Twelve days of curated luxury across every corner of Morocco, from the Atlantic to the Sahara.",
    itinerary: [
      { day: 1, title: "Casablanca → Rabat", description: "Imperial Atlantic city.", highlights: ["Hassan II Mosque", "Oudaia Kasbah"], accommodation: "Hotel, Rabat" },
      { day: 2, title: "Rabat → Chefchaouen", description: "North to the Rif mountains.", highlights: ["Blue medina", "Rif viewpoints"], accommodation: "Riad, Chefchaouen" },
      { day: 3, title: "Chefchaouen Day", description: "Full exploration of the blue city.", highlights: ["Alleyways", "Ras el-Maa falls"], accommodation: "Riad, Chefchaouen" },
      { day: 4, title: "Chefchaouen → Fes", description: "Ancient imperial medina.", highlights: ["Cedar forest", "Fes el-Bali arrival"], accommodation: "Riad, Fes" },
      { day: 5, title: "Fes Medina", description: "The world's oldest living city.", highlights: ["Tanneries", "Al-Qarawiyyin"], accommodation: "Riad, Fes" },
      { day: 6, title: "Fes → Midelt → Merzouga", description: "Through the Atlas to the Sahara.", highlights: ["Midelt market", "Erg Chebbi"], accommodation: "Desert Camp" },
      { day: 7, title: "Sahara Day", description: "Deep Sahara immersion.", highlights: ["Sunrise dunes", "Nomad camp visit"], accommodation: "Luxury Desert Camp" },
      { day: 8, title: "Merzouga → Dades → Todra", description: "The gorge country of the south.", highlights: ["Todra walls", "Dades curves"], accommodation: "Kasbah, Dades" },
      { day: 9, title: "Dades → Skoura → Ouarzazate", description: "Palm oases and film city.", highlights: ["Skoura palmery", "Ouarzazate"], accommodation: "Riad, Ouarzazate" },
      { day: 10, title: "Ouarzazate → Aït Ben Haddou → Draa", description: "Kasbahs and the deep south.", highlights: ["Aït Ben Haddou", "Draa Valley"], accommodation: "Riad, Zagora" },
      { day: 11, title: "Zagora → Marrakech", description: "Atlas return through the Rose Valley.", highlights: ["Kalaat M'gouna", "Tizi n'Tichka"], accommodation: "Riad, Marrakech" },
      { day: 12, title: "Marrakech → Casablanca", description: "Return to the Atlantic.", highlights: ["Marrakech medina farewell", "Coastal return"] },
    ],
  },
  "tangier-8-days": {
    id: "tangier-8-days",
    overview: "Eight days from Morocco's Mediterranean gateway to the Sahara's heart and Marrakech's ancient medina.",
    itinerary: [
      { day: 1, title: "Tangier → Tetouan → Chefchaouen", description: "South along the Rif to the blue city.", highlights: ["Tetouan medina", "Chefchaouen arrival"], accommodation: "Riad, Chefchaouen" },
      { day: 2, title: "Chefchaouen → Fes", description: "Through cedar forests to the ancient capital.", highlights: ["Azrou cedar forest", "Fes medina arrival"], accommodation: "Riad, Fes" },
      { day: 3, title: "Fes Medina", description: "UNESCO World Heritage medina.", highlights: ["Chouara Tanneries", "Al-Qarawiyyin University"], accommodation: "Riad, Fes" },
      { day: 4, title: "Fes → Midelt → Merzouga", description: "The Sahara approach.", highlights: ["Ziz Valley", "Erg Chebbi dunes"], accommodation: "Desert Camp" },
      { day: 5, title: "Sahara Immersion", description: "Dunes, camels, and stars.", highlights: ["Camel trek", "Desert camp dinner", "Dawn sunrise"], accommodation: "Luxury Desert Camp" },
      { day: 6, title: "Merzouga → Dades → Ouarzazate", description: "Gorges and kasbahs.", highlights: ["Todra", "Dades", "Aït Ben Haddou"], accommodation: "Riad, Ouarzazate" },
      { day: 7, title: "Ouarzazate → Atlas → Marrakech", description: "The final mountain crossing.", highlights: ["Tizi n'Tichka", "Marrakech arrival"], accommodation: "Riad, Marrakech" },
      { day: 8, title: "Marrakech", description: "Djemaa el-Fna and the souks.", highlights: ["Bahia Palace", "Jemaa el-Fna square"] },
    ],
  },
  "tangier-10-days": {
    id: "tangier-10-days",
    overview: "Ten days from the tip of Africa through the Sahara to the ancient rose city — Morocco's greatest traverse.",
    itinerary: [
      { day: 1, title: "Tangier → Asilah → Rabat", description: "The Atlantic coast south.", highlights: ["Asilah medina murals", "Rabat Hassan Tower"], accommodation: "Hotel, Rabat" },
      { day: 2, title: "Rabat → Meknes → Volubilis", description: "Roman Morocco.", highlights: ["Volubilis mosaics", "Bab Mansour"], accommodation: "Riad, Meknes" },
      { day: 3, title: "Meknes → Fes", description: "Imperial to ancient capital.", highlights: ["Fes medina arrival", "Bou Inania Madrasa"], accommodation: "Riad, Fes" },
      { day: 4, title: "Fes Medina", description: "Full day in the souks and tanneries.", highlights: ["Chouara Tanneries", "Al-Qarawiyyin"], accommodation: "Riad, Fes" },
      { day: 5, title: "Fes → Midelt → Sahara", description: "Atlas crossing to the desert.", highlights: ["Cedar forest", "First dunes"], accommodation: "Desert Camp" },
      { day: 6, title: "Sahara Day", description: "Full desert experience.", highlights: ["Sandboarding", "Camel trek", "Stargazing"], accommodation: "Luxury Desert Camp" },
      { day: 7, title: "Merzouga → Dades", description: "Canyon country of the south.", highlights: ["Todra Gorge", "Dades curves"], accommodation: "Kasbah, Dades" },
      { day: 8, title: "Dades → Aït Ben Haddou", description: "UNESCO fortress.", highlights: ["Aït Ben Haddou ksar", "Ouarzazate"], accommodation: "Riad, Ouarzazate" },
      { day: 9, title: "Ouarzazate → Atlas → Marrakech", description: "The mountain return.", highlights: ["Tizi n'Tichka", "Marrakech medina"], accommodation: "Riad, Marrakech" },
      { day: 10, title: "Marrakech", description: "Final day in the Red City.", highlights: ["Souks", "Djemaa el-Fna", "Farewell dinner"] },
    ],
  },
  "tangier-14-days": {
    id: "tangier-14-days",
    overview: "Fourteen days — the complete north-to-south Morocco journey from the Mediterranean gateway to Casablanca's Atlantic shore.",
    itinerary: [
      { day: 1, title: "Tangier → Tetouan → Chefchaouen", description: "North Morocco's greatest corridor.", highlights: ["Tetouan medina", "Rif mountains"], accommodation: "Riad, Chefchaouen" },
      { day: 2, title: "Chefchaouen", description: "The blue city at leisure.", highlights: ["Blue alleyways", "Spanish mosque viewpoint"], accommodation: "Riad, Chefchaouen" },
      { day: 3, title: "Chefchaouen → Fes", description: "Cedar forest traverse.", highlights: ["Azrou macaques", "Fes arrival"], accommodation: "Riad, Fes" },
      { day: 4, title: "Fes Day 1", description: "The medina's monumental sites.", highlights: ["Bou Inania", "Al-Qarawiyyin"], accommodation: "Riad, Fes" },
      { day: 5, title: "Fes Day 2", description: "Tanneries and hidden souks.", highlights: ["Chouara Tanneries", "Souk el-Henna"], accommodation: "Riad, Fes" },
      { day: 6, title: "Fes → Midelt → Erfoud", description: "Atlas crossing south.", highlights: ["Midelt market", "Ziz Gorge"], accommodation: "Hotel, Erfoud" },
      { day: 7, title: "Erfoud → Sahara", description: "The Sahara in full grandeur.", highlights: ["Erg Chebbi at sunset", "Camel trek"], accommodation: "Luxury Desert Camp" },
      { day: 8, title: "Sahara Day", description: "Dawn, dunes, and desert life.", highlights: ["Sunrise photography", "Berber nomads"], accommodation: "Desert Camp" },
      { day: 9, title: "Merzouga → Dades", description: "Canyon country.", highlights: ["Todra Gorge walls", "Dades curves"], accommodation: "Kasbah, Dades" },
      { day: 10, title: "Dades → Ouarzazate", description: "Palmeries and kasbahs.", highlights: ["Skoura oasis", "Ouarzazate citadel"], accommodation: "Riad, Ouarzazate" },
      { day: 11, title: "Ouarzazate → Marrakech", description: "The Atlas return.", highlights: ["Aït Ben Haddou", "Tizi n'Tichka"], accommodation: "Riad, Marrakech" },
      { day: 12, title: "Marrakech", description: "The Red City explored.", highlights: ["Bahia Palace", "Djemaa el-Fna"], accommodation: "Riad, Marrakech" },
      { day: 13, title: "Marrakech → Rabat", description: "Coastal capital.", highlights: ["Atlantic highway", "Rabat medina"], accommodation: "Hotel, Rabat" },
      { day: 14, title: "Rabat → Casablanca", description: "Journey's end at the Atlantic.", highlights: ["Hassan II Mosque", "Corniche"] },
    ],
  },
  "tangier-12-days": {
    id: "tangier-12-days",
    overview: "Twelve days departing and returning to Tangier — a complete Morocco circuit through every major landscape and city.",
    itinerary: [
      { day: 1, title: "Tangier → Chefchaouen", description: "The Rif mountain blue city.", highlights: ["Blue medina", "Rif panorama"], accommodation: "Riad, Chefchaouen" },
      { day: 2, title: "Chefchaouen → Fes", description: "Ancient capital via cedar forest.", highlights: ["Azrou forest", "Fes medina"], accommodation: "Riad, Fes" },
      { day: 3, title: "Fes Medina", description: "Tanneries and ancient learning.", highlights: ["Chouara", "Al-Qarawiyyin"], accommodation: "Riad, Fes" },
      { day: 4, title: "Fes → Midelt → Merzouga", description: "Desert approach via the Atlas.", highlights: ["Ziz Valley", "Erg Chebbi"], accommodation: "Desert Camp" },
      { day: 5, title: "Sahara Day", description: "Full Sahara experience.", highlights: ["Sandboarding", "Camel trek", "Stars"], accommodation: "Luxury Desert Camp" },
      { day: 6, title: "Merzouga → Dades", description: "Gorges of the south.", highlights: ["Todra", "Dades"], accommodation: "Kasbah, Dades" },
      { day: 7, title: "Dades → Marrakech", description: "Via Aït Ben Haddou and Atlas.", highlights: ["Aït Ben Haddou", "Tizi n'Tichka"], accommodation: "Riad, Marrakech" },
      { day: 8, title: "Marrakech", description: "Medina and souks.", highlights: ["Bahia Palace", "Djemaa el-Fna"], accommodation: "Riad, Marrakech" },
      { day: 9, title: "Marrakech → Casablanca", description: "Atlantic coast city.", highlights: ["Hassan II Mosque", "Corniche"], accommodation: "Hotel, Casablanca" },
      { day: 10, title: "Casablanca → Rabat", description: "The capital by the sea.", highlights: ["Oudaia Kasbah", "Hassan Tower"], accommodation: "Hotel, Rabat" },
      { day: 11, title: "Rabat → Asilah → Tangier", description: "The Atlantic north.", highlights: ["Asilah murals", "Tangier coast"], accommodation: "Hotel, Tangier" },
      { day: 12, title: "Tangier", description: "Cap Spartel and the meeting of seas.", highlights: ["Cap Spartel", "Hercules Caves", "Medina farewell"] },
    ],
  },
  "fes-4-days-desert": {
    id: "fes-4-days-desert",
    overview: "Four days — from Fes's ancient medina to the Sahara's golden silence and back — the perfect desert introduction.",
    itinerary: [
      { day: 1, title: "Fes → Midelt → Erfoud", description: "South through the Atlas to the desert's edge.", highlights: ["Middle Atlas cedars", "Ziz Gorge", "Erfoud fossils"], accommodation: "Hotel, Erfoud" },
      { day: 2, title: "Erfoud → Sahara Camp", description: "The golden dunes of Erg Chebbi.", highlights: ["Erg Chebbi arrival", "Camel trek at sunset", "Desert camp dinner"], accommodation: "Luxury Desert Camp" },
      { day: 3, title: "Merzouga → Aït Ben Haddou → Ouarzazate", description: "Return west via the famous ksar.", highlights: ["Dawn dunes", "Aït Ben Haddou", "Ouarzazate"], accommodation: "Riad, Ouarzazate" },
      { day: 4, title: "Ouarzazate → Atlas → Fes", description: "Return through the High Atlas.", highlights: ["Tizi n'Tichka", "Return to Fes"] },
    ],
  },
  "fes-10-days": {
    id: "fes-10-days",
    overview: "Ten days — Morocco's complete imperial and natural circuit, departing and returning to its most ancient city.",
    itinerary: [
      { day: 1, title: "Fes → Midelt → Merzouga", description: "Through the Atlas to the Sahara.", highlights: ["Atlas cedars", "Erg Chebbi"], accommodation: "Desert Camp" },
      { day: 2, title: "Sahara Day", description: "Full desert experience.", highlights: ["Sunrise", "Sandboarding", "Camel trek"], accommodation: "Luxury Desert Camp" },
      { day: 3, title: "Merzouga → Dades Gorge", description: "Canyon country of the south.", highlights: ["Todra Gorge", "Dades curves"], accommodation: "Kasbah, Dades" },
      { day: 4, title: "Dades → Aït Ben Haddou → Marrakech", description: "Kasbahs and the Red City.", highlights: ["Aït Ben Haddou", "Marrakech arrival"], accommodation: "Riad, Marrakech" },
      { day: 5, title: "Marrakech", description: "Palaces, souks, and the famous square.", highlights: ["Bahia Palace", "Djemaa el-Fna"], accommodation: "Riad, Marrakech" },
      { day: 6, title: "Marrakech → Casablanca", description: "Atlantic Morocco.", highlights: ["Hassan II Mosque", "Corniche"], accommodation: "Hotel, Casablanca" },
      { day: 7, title: "Casablanca → Rabat", description: "The capital's monuments.", highlights: ["Oudaia Kasbah", "Hassan Tower"], accommodation: "Hotel, Rabat" },
      { day: 8, title: "Rabat → Meknes → Volubilis", description: "Roman and imperial sites.", highlights: ["Volubilis mosaics", "Bab Mansour"], accommodation: "Riad, Meknes" },
      { day: 9, title: "Meknes → Chefchaouen", description: "The blue city of the Rif.", highlights: ["Blue alleyways", "Rif scenery"], accommodation: "Riad, Chefchaouen" },
      { day: 10, title: "Chefchaouen → Fes", description: "Return through cedar forest.", highlights: ["Azrou macaques", "Fes return"] },
    ],
  },
  "fes-6-days": {
    id: "fes-6-days",
    overview: "Six days from Fes's ancient medina across the desert landscape to Marrakech — Morocco's two great southern anchors.",
    itinerary: [
      { day: 1, title: "Fes → Midelt → Erfoud", description: "South through the Atlas.", highlights: ["Cedar forest", "Ziz Valley"], accommodation: "Hotel, Erfoud" },
      { day: 2, title: "Erfoud → Merzouga", description: "The Sahara arrives.", highlights: ["Erg Chebbi dunes", "Camel trek"], accommodation: "Desert Camp" },
      { day: 3, title: "Sahara → Dades", description: "Dawn in the dunes, then west.", highlights: ["Sunrise photography", "Todra Gorge"], accommodation: "Kasbah, Dades" },
      { day: 4, title: "Dades → Ouarzazate", description: "Skoura palmery and film city.", highlights: ["Skoura oasis", "Ouarzazate studios"], accommodation: "Riad, Ouarzazate" },
      { day: 5, title: "Ouarzazate → Aït Ben Haddou", description: "UNESCO ksar full day.", highlights: ["Aït Ben Haddou walls", "Sunset photography"], accommodation: "Riad, Ouarzazate" },
      { day: 6, title: "Ouarzazate → Atlas → Marrakech", description: "The final mountain crossing.", highlights: ["Tizi n'Tichka", "Red City arrival"] },
    ],
  },
  "fes-3-days-merzouga": {
    id: "fes-3-days-merzouga",
    overview: "The perfect long weekend — three days from Fes's ancient medina to the Sahara and back.",
    itinerary: [
      { day: 1, title: "Fes → Midelt → Merzouga", description: "Through the Atlas to the golden dunes.", highlights: ["Cedar forest", "Erg Chebbi first sight"], accommodation: "Desert Camp" },
      { day: 2, title: "Merzouga Sahara Day", description: "Full immersion in Erg Chebbi.", highlights: ["Camel trek", "Sandboarding", "Berber camp dinner", "Stars"], accommodation: "Luxury Desert Camp" },
      { day: 3, title: "Merzouga → Fes", description: "Dawn at the dunes, return north.", highlights: ["Sunrise over dunes", "Ziz Valley", "Fes return"] },
    ],
  },
  "fes-3-days-desert": {
    id: "fes-3-days-desert",
    overview: "Three days from Fes to the Sahara, ending in Marrakech — Morocco's great north-to-south diagonal.",
    itinerary: [
      { day: 1, title: "Fes → Midelt → Erfoud", description: "Atlas crossing to the desert plains.", highlights: ["Middle Atlas", "Ziz Gorge", "Erfoud"], accommodation: "Hotel, Erfoud" },
      { day: 2, title: "Erfoud → Merzouga → Dades", description: "Sahara sunrise then canyon country.", highlights: ["Erg Chebbi dawn", "Todra Gorge", "Dades"], accommodation: "Kasbah, Dades" },
      { day: 3, title: "Dades → Aït Ben Haddou → Marrakech", description: "Kasbahs and the Atlas return.", highlights: ["Aït Ben Haddou", "Tizi n'Tichka", "Marrakech"] },
    ],
  },
  "fes-4-days-marrakech": {
    id: "fes-4-days-marrakech",
    overview: "Four days tracing Morocco's most dramatic diagonal — from Fes's ancient medina through the Sahara to the Red City.",
    itinerary: [
      { day: 1, title: "Fes → Midelt → Merzouga", description: "The full Atlas crossing to the Sahara.", highlights: ["Cedar forest", "Ziz Valley", "Erg Chebbi"], accommodation: "Desert Camp" },
      { day: 2, title: "Sahara Day", description: "Complete desert immersion.", highlights: ["Camel trek", "Sandboarding", "Berber camp", "Stargazing"], accommodation: "Luxury Desert Camp" },
      { day: 3, title: "Merzouga → Dades → Ouarzazate", description: "Gorges and kasbahs.", highlights: ["Todra Gorge", "Dades curves", "Aït Ben Haddou"], accommodation: "Riad, Ouarzazate" },
      { day: 4, title: "Ouarzazate → Atlas → Marrakech", description: "The final mountain crossing.", highlights: ["Rose Valley", "Tizi n'Tichka", "Marrakech arrival"] },
    ],
  },
};
