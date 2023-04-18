const colonne = [
  {
    header: "Nom du cheval",
    name: "nom",
  },
  {
    header: "Age",
    name: "age",
  },
  {
    header: "Ecuyer",
    name: "ecuyer",
  },
  {
    header: "Courses remportées",
    name: "courses",
  },
];

// const gridData = [
//   {
//     nomHaras: "Emma",
//     chevaux: [
//       {
//         nom: "Pitou",
//         age: 4,
//         ecuyer: "Hatem Reborn",
//         courses: "Grand prix de Paris",
//       },
//       {
//         nom: "Diana",
//         age: 7,
//         ecuyer: "Maxime Terrible",
//         courses: "Mille Fleurs",
//       },
//       {
//         nom: "Général du Pommeau",
//         age: 5,
//         ecuyer: "Atif Abdel",
//         courses: "Auteuil",
//       },
//     ],
//   },
// ];
const Haras = {
  nomHaras: "Emma",
  ville: "Montpellier",
  dateCreation: 2016,
  surface: "85h",
  active: true,
  chevaux: [
    {
      nom: "Pitou",
      age: 4,
      ecuyer: "Hatem Reborn",
      courses: ["Grand prix de Paris", "Turfing Motion", "Rambouillet"],
    },
    {
      nom: "Diana",
      age: 7,
      ecuyer: "Maxime Terrible",
      courses: [
        "Mille Fleurs",
        "Sprint in Desert",
        "Arc de Triomphe",
        "Abudhabi",
      ],
    },
    {
      nom: "Général du Pommeau",
      age: 5,
      ecuyer: "Atif Abdel",
      courses: [
        "Vincennes",
        "Longchamp",
        "Deauville",
        "Maisons-Lafitte",
        "Saint Cloud",
        "Auteuil",
      ],
    },
  ],
};

var newdata = new Array();
for (chx in Haras.chevaux) {
  newdata[chx] = new Object();
  newdata[chx].nom = Haras.chevaux[chx].nom;
  newdata[chx].age = Haras.chevaux[chx].age;
  newdata[chx].ecuyer = Haras.chevaux[chx].ecuyer;
  newdata[chx].courses = Haras.chevaux[chx].courses.join(",");
}
// console.log(newdata);

const grid = new tui.Grid({
  el: document.getElementById("grid"),
  data: newdata,
  header: {
    height: 120,
    complexColumns: [
      {
        header: "Haras",
        name: "identite",
        childNames: ["nom", "age", "ecuyer", "courses"],
      },
    ],
  },
  scrollX: false,
  scrollY: false,
  columns: colonne,
});
// tui.Grid.applyTheme("striped", {
//   cell: {
//     header: {
//       background: "#eef",
//     },
//     evenRow: {
//       background: "#fee",
//     },
//   },
// });
