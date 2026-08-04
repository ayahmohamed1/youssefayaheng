// اعمل استدعاء لملف الصوت هنا الأول
// import audioFile from "../assets/omk.mp3";

const eventConfig = {
  couple: {
    groomFirst: "YOUSSEF",
    groomLast: "",
    brideFirst: "AYAH",
    brideLast: "",
    monogram: ""
  },
  hero: {
    eyebrow: "THE ENGAGEMENT",
    invite: "are getting engaged",
    countdownTarget: "2026-08-31T20:00:00",
    listenLabel: "Tap to Listen",
    // التعديل هنا:
    audioSrc: "/assets/omk.mp3",
    // ... باقي الكود
    curtainTopImage: "/assets/curtain-top.png",
    curtainLeftImage: "/assets/curtain-left.png",
    curtainRightImage: "/assets/curtain-right.png",
    staircaseImage: "/assets/staircase.png",
    characterImage: "/assets/singer.png"
  },
  message: {
    arabicLine1: "يارب تفضل",
    arabicLine2: "حلاوة سلام أول لقا بإيدينا",
    englishQuote: "AS MUSIC FILLS THE AIR AND OUR HEARTS BECOME ONE, WE INVITE YOU TO CELEBRATE THE BEGINNING OF OUR GREATEST ADVENTURE",
    rsvpLabel: "KINDLY RSVP HERE",
    rsvpLink: "#",
    birdIcon: "/assets/bird.png",
    musicianLeftImage: "/assets/musician-left.png",
    musicianRightImage: "/assets/musician-right.png",
    coupleImage: "/assets/our-photo.jpg",
    chandelierSmallImage: "/assets/chandelier-small.png"
  },
  details: {
    venueName: "SEA GARDEN HALL",
    venueCity: "6TH OF OCTOBER HOTEL, ANFOUSHI",
    locationLabel: "CLICK HERE FOR LOCATION",
    locationLink: "https://maps.app.goo.gl/U7fmxgjfw4o7x8bb6?g_st=ic",
    dateDay: "31",
    dateOrdinal: "ST",
    dateMonthYear: " AUGUST 2026",
    dateWeekday: "MONDAY",
    timeLabel: "STARTS AT",
    time: "8:00PM",
    oudLeftImage: "/assets/oud-left.png",
    oudRightImage: "/assets/oud-right.png",
    chandelierImage: "/assets/chandelier-large.png",
    palaceArtworkImage: "/assets/palace-reflection.jpg"
  }
};

export default eventConfig;