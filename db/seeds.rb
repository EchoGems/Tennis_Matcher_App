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
  }
  ])


  # {
  #   name: "",
  #   address: "",
  #   zip: "",
  #   lat: ,
  #   lng: ,
  # }
