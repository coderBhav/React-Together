// Covers
const draculaCover = new URL("../assets/cover/dracula.jpeg", import.meta.url);
const splendidSunsCover = new URL(
  "../assets/cover/a_thousand_splendid_suns.jpeg", 
  import.meta.url
);
const aliceCover = new URL(
  "../assets/cover/alice_in_wonder_lands.jpeg",
  import.meta.url
);
const hp1Cover = new URL(
  "../assets/cover/harry_potter_1.jpeg",
  import.meta.url
);
const tagrCover = new URL(
  "../assets/cover/think_and_grow_rich.jpeg",
  import.meta.url
);

// PDFs
const draculaPdf = new URL("../assets/books/Dracula.pdf", import.meta.url);
const splendidSunsPdf = new URL(
  "../assets/books/a_thousand_splendid_sun.pdf",
  import.meta.url
);
const alicePdf = new URL(
  "../assets/books/Alice_In_Wonderland.pdf",
  import.meta.url
);
const hp1Pdf = new URL(
  "../assets/books/harry_potter_1.pdf",
  import.meta.url
);
const tagrPdf = new URL(
  "../assets/books/Think_and_grow_rich.pdf",
  import.meta.url
);


const Books = [
  {
    id: 1,
    title: "Dracula",
    author: "Bram Stoker",
    cover: draculaCover,
    pdf: draculaPdf,
  },
  {
    id: 2,
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    cover: splendidSunsCover,
    pdf: splendidSunsPdf,
  },
  {
    id: 3,
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    cover: aliceCover,
    pdf: alicePdf,
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    cover: hp1Cover,
    pdf: hp1Pdf,
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    cover: tagrCover,
    pdf: tagrPdf,
  },
];


export default Books;