// import React from "react"; // Make sure this is included

// const handleClick = (title) => {
//   console.log(`You clicked me! ${title}`);
// };

// export const columns = [
//   {
//     name: "Title",
//     selector: "title",
//     sortable: true,
//   },
//   {
//     name: "Director",
//     selector: "director",
//     sortable: true,
//     cell: (d) => (
//       <a
//         href="https://google.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="dlink"
//       >
//         {d.director}
//       </a>
//     ),
//   },
//   {
//     name: "Genres",
//     selector: "genres",
//     sortable: true,
//     cell: (d) => <span>{d.genres.join(", ")}</span>,
//   },
//   {
//     name: "Year",
//     selector: "year",
//     sortable: true,
//   },
//   {
//     name: "Action",
//     sortable: false,
//     cell: (d) => (
//       <div>
//         <i
//           key={`${d.title}-edit`} // Added unique key
//           onClick={() => handleClick(d.title)} // Changed to use an arrow function
//           className="first fas fa-pen"
//         ></i>
//         <i
//           key={`${d.title}-delete`} // Added unique key
//           onClick={() => handleClick(d.title)} // Changed to use an arrow function
//           className="fas fa-trash-alt"
//         ></i>
//       </div>
//     ),
//   },
// ];

// export const data = [
//   {
//     id: 1,
//     title: "Beetlejuice",
//     year: "1988",
//     runtime: "92",
//     genres: ["Comedy", "Fantasy"],
//     director: "Tim Burton",
//     actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
//     plot: 'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
//     posterUrl:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
//   },
//   // ... (other movie objects)
// ];
