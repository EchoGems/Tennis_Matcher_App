# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.destroy_all

Location.create([
  {
    name: "Balboa_Tennis_Club",
    address: "2221 Morley Field, San Diego, CA",
    zip: "92104",
    lat: 32.740122,
    lng: -117.141197
  },
  {
    name: "Miramar_College_Tennis_Courts",
    address: "10440 Black Mountain Rd, San Diego, CA",
    zip: "92126",
    lat: 32.907676,
    lng: -117.120020
  },
  {
    name: "Linda_Vista_Recreation_Center",
    address: "7064 Levant ST, San Diego, CA",
    zip: "92111",
    lat: 32.792214,
    lng: -117.169947
  },
  {
    name: "Cabrillo_Recreation_Center",
    address: "3051 Canon St., San Diego, CA",
    zip: "92106",
    lat: 32.72184,
    lng: -117.232681,
  },
  {
    name: "Cadman_Recreation_Center",
    address: "4680 Avati Dr., San Diego, CA",
    zip: "92117",
    lat: 32.820272,
    lng: -117.214804,
  },
  {
    name: "Mission_Hills_Pioneer_Park",
    address: "1500 Washington Pl., San Diego, CA",
    zip: "92103",
    lat: 32.749058,
    lng: -117.177542,
  },
  {
    name: "Mountain_View_Park",
    address: "551 So. 40th St., San Diego, CA ",
    zip: "92109",
    lat: 32.700552,
    lng: -117.108043,
  },
  {
    name: "Canyonside_Community_Park",
    address: "12350 Black Mtn Rd., San Diego, CA",
    zip: "92130",
    lat: 32.942182,
    lng: -117.130299,
  },
  {
    name: "Carmel_Valley_Community_Park",
    address: "3777 Townsgate Dr., San Diego, CA",
    zip: "92130",
    lat: 32.94819,
    lng: -117.234065,
  },
  {
    name: "Murray_Ridge_Park",
    address: "8651 Celestine Ave., San Diego, CA",
    zip: "92109",
    lat: 32.790468,
    lng: -117.146512,
  },
  {
    name: "City_Heights_Recreation_Center",
    address: "4380 Landis St., San Diego, CA",
    zip: "92105",
    lat: 32.746156,
    lng: -117.100074,
  },
  {
    name: "North_Clairemont_Recreation_Center",
    address: "4421 Bannock Ave., San Diego, CA",
    zip: "92109",
    lat: 32.832398,
    lng: -117.197418,
  },
  {
    name: "Colina_del_Sol_Park",
    address: "5319 Orange Ave., San Diego, CA ",
    zip: "92115",
    lat: 32.752768,
    lng: -117.080142,
  },
  {
    name: "North_Park_Recreation_Center",
    address: "4044 Idaho St., San Diego, CA",
    zip: "92109",
    lat: 32.750915,
    lng: -117.134167,
  },
  {
    name: "Emerald_Hills",
    address: "Bethune Ct. & Kelton Rd., San Diego, CA",
    zip: "92114",
    lat: 32.721009,
    lng: -117.073892,
  },
  {
    name: "Pacific_Beach_Recreation_Center",
    address: "1405 Diamond St, San Diego, CA",
    zip: "92109",
    lat: 32.801594,
    lng: -117.244964,
  },
  {
    name: "Encanto_Park",
    address: "6508 Wunderlin Ave., San Diego, CA",
    zip: "92114",
    lat: 32.71441,
    lng: -117.05784,
  },
  {
    name: "Point_Loma_Park",
    address: "1049 Catalina Blvd., San Diego, CA",
    zip: "92109",
    lat: 32.725429,
    lng: -117.244732,
  },
  {
    name: "Rancho_Bernardo_Community_Park",
    address: "18402 W. Bernardo Dr., San Diego, CA",
    zip: "92127",
    lat: 33.047316,
    lng: -117.077323,
  },
  {
    name: "Gershwin_Park",
    address: "3508 Conrad Ave., San Diego, CA",
    zip: "92117",
    lat: 32.835079,
    lng: -117.211469,
  },
  {
    name: "Hourglass_Park",
    address: "14440 Black Mtn Rd., San Diego, CA",
    zip: "92127",
    lat: 32.907298,
    lng: -117.122852,
  },
  {
    name: "Robb_Athletic_Field",
    address: "2525 Bacon St., San Diego, CA",
    zip: "92107",
    lat: 32.754352,
    lng: -117.241458,
  },
  {
    name: "Jerabek_Park",
    address: "10060 Avenida Magnifica, San Diego, CA",
    zip: "92131",
    lat: 32.908523,
    lng: -117.083157,
  },
  {
    name: "Santa_Clara_Recreation_Center",
    address: "1008 Santa Clara Pl., San Diego, CA",
    zip: "92109",
    lat: 32.783566,
    lng: -117.24924,
  },
  {
    name: "La_Jolla_Tennis_Courts",
    address: "7632 Draper Ave., La Jolla, CA",
    zip: "92037",
    lat: 32.843146,
    lng: -117.277341,
  },
  {
    name: "San_Ysidro_Recreation_Center",
    address: "125 East Park Ave., San Diego, CA",
    zip: "92109",
    lat: 32.552959,
    lng: -117.044292,
  },
  {
    name: "Lake_Murray_Park",
    address: "7003 Murray Park Dr., San Diego, CA",
    zip: "92119",
    lat: 32.790559,
    lng: -117.049481,
  },
  {
    name: "Serra_High_School",
    address: "5156 Santo Rd., San Diego, CA",
    zip: "92109",
    lat: 32.82572,
    lng: -117.105024,
  },
  {
    name: "South_Clairemont_Recreation_Center",
    address: "3605 Clairemont Dr., San Diego, CA",
    zip: "92109",
    lat: 32.806372,
    lng: -117.200535,
  },
  {
    name: "Martin_Luther_King_Jr_Recreation_Center",
    address: "6401 Skyline Dr., San Diego, CA",
    zip: "92114",
    lat: 32.701056,
    lng: -117.060581,
  },
  {
    name: "Standley_Park_and_Recreation_Center",
    address: "3585 Governor Dr., San Diego, CA",
    zip: "92122",
    lat: 32.851092,
    lng: -117.210292,
  },
  {
    name: "Pacific_Beach_Tennis_Club",
    address: "2639 Grand Ave., San Diego, CA",
    zip: "92109",
    lat: 32.80189,
    lng: -117.221047,
  },
  {
    name: "Tierrasanta_Recreation_Center",
    address: "11220 Clairemont Mesa Blvd., San Diego, CA",
    zip: "92124",
    lat: 32.829536,
    lng: -117.088328,
  }

  ])


  # {
  #   name: "",
  #   address: "",
  #   zip: "",
  #   lat: ,
  #   lng: ,
  # },
  #
