const colonne_two = [
  {
    header: "Nom du haras",
    name: "nomHaras",
  },
  {
    header: "Ville",
    name: "ville",
  },
  {
    header: "En activité",
    name: "active",
  },
  {
    header: "Date de création",
    name: "dateCreation",
  },
  {
    header: "Surface",
    name: "surface",
  },
];

const gridData_two = [
  {
    nomHaras: "Emma",
    ville: "Montpellier",
    dateCreation: "2016",
    surface: "85h",
    active: "true",
  },
  {
    nomHaras: "Copeland",
    ville: "Oppido Mamertina",
    dateCreation: "2009",
    surface: 231,
    active: false,
  },
  {
    nomHaras: "Mercer",
    ville: "Caerphilly",
    dateCreation: "1979",
    surface: 65,
    active: false,
  },
  {
    nomHaras: "Atkins",
    ville: "Nocera Umbra",
    dateCreation: "1969",
    surface: 109,
    active: true,
  },
  {
    nomHaras: "Blackwell",
    ville: "Rattray",
    dateCreation: "1979",
    surface: 74,
    active: false,
  },
  {
    nomHaras: "Jarvis",
    ville: "Essex",
    dateCreation: "1986",
    surface: 183,
    active: false,
  },
  {
    nomHaras: "Tate",
    ville: "Kelowna",
    dateCreation: "2011",
    surface: 178,
    active: true,
  },
  {
    nomHaras: "Jarvis",
    ville: "Lutsel K'e",
    dateCreation: "2001",
    surface: 120,
    active: false,
  },
  {
    nomHaras: "Crane",
    ville: "Istres",
    dateCreation: "1996",
    surface: 159,
    active: true,
  },
  {
    nomHaras: "Parsons",
    ville: "Uyo",
    dateCreation: "1968",
    surface: 226,
    active: true,
  },
  {
    nomHaras: "Kidd",
    ville: "Laja",
    dateCreation: "1965",
    surface: 48,
    active: false,
  },
  {
    nomHaras: "Velazquez",
    ville: "Akhisar",
    dateCreation: "1996",
    surface: 173,
    active: true,
  },
  {
    nomHaras: "West",
    ville: "Pinarbaşi",
    dateCreation: "2012",
    surface: 98,
    active: false,
  },
  {
    nomHaras: "Morris",
    ville: "Richmond Hill",
    dateCreation: "1991",
    surface: 142,
    active: true,
  },
  {
    nomHaras: "Wise",
    ville: "King Township",
    dateCreation: "2018",
    surface: 140,
    active: true,
  },
  {
    nomHaras: "Simpson",
    ville: "Swansea",
    dateCreation: "1966",
    surface: 64,
    active: true,
  },
  {
    nomHaras: "Stevenson",
    ville: "Worcester",
    dateCreation: "1965",
    surface: 166,
    active: true,
  },
  {
    nomHaras: "Caldwell",
    ville: "Leganés",
    dateCreation: "1992",
    surface: 114,
    active: false,
  },
  {
    nomHaras: "Fields",
    ville: "Lamorteau",
    dateCreation: "2009",
    surface: 26,
    active: true,
  },
  {
    nomHaras: "Gray",
    ville: "Kapolei",
    dateCreation: "2004",
    surface: 197,
    active: true,
  },
  {
    nomHaras: "Patel",
    ville: "Busan",
    dateCreation: "1991",
    surface: 64,
    active: false,
  },
  {
    nomHaras: "Nguyen",
    ville: "Puno",
    dateCreation: "1977",
    surface: 58,
    active: true,
  },
  {
    nomHaras: "Melendez",
    ville: "Pochep",
    dateCreation: "1996",
    surface: 78,
    active: true,
  },
  {
    nomHaras: "Larson",
    ville: "Guadalupe",
    dateCreation: "1986",
    surface: 127,
    active: true,
  },
  {
    nomHaras: "Randolph",
    ville: "Yorkton",
    dateCreation: "1969",
    surface: 175,
    active: true,
  },
];

const grid_two = new tui.Grid({
  el: document.getElementById("grid_two"),
  data: gridData_two,
  scrollX: false,
  scrollY: false,
  columns: colonne_two,
});
tui.Grid.applyTheme("striped", {
  cell: {
    header: {
      background: "#eef",
    },
    evenRow: {
      background: "#fee",
    },
  },
});
