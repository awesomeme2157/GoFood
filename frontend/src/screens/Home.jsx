// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Card from "../components/Card";

// import img1 from "../images/a.jpg";
// import img2 from "../images/b.jpg";
// import img3 from "../images/c.jpg";

// export default function Home() {
//   const [search, setSearch] = useState("");
//   const [foodCategory, setFoodCategory] = useState([]);
//   const [foodItems, setFoodItems] = useState([]);

//   const loadData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/asd/foodData", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const ds = await response.json();
//       // console.log(ds); // Log the entire response to inspect its structure

//       setFoodCategory(ds.categories);
//       setFoodItems(ds.data);
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <div>
//         <Navbar />
//       </div>

//       {/* Carousel */}
//       <div className="container my-4">
//         <div
//           id="carouselExampleFade"
//           className="carousel slide carousel-fade"
//           data-bs-ride="carousel"
//           style={{ objectFit: "contain !important" }}
//         >
//           <div className="carousel-inner" id="carousel">
//             <div className="carousel-caption" style={{ zIndex: "10" }}>
//               <div className="d-flex justify-content-center">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search for food"
//                   aria-label="Search"
//                   value={search}
//                   onChange={(e) => {
//                     {
//                       setSearch(e.target.value);
//                     }
//                   }}
//                 />
//                 {/* <button
//                   className="btn btn-outline-success text-white bg-success"
//                   type="submit"
//                 >
//                   Search
//                 </button> */}
//               </div>
//             </div>

//             <div className="carousel-item active">
//               <img src={img1} className="d-block w-100" alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src={img2} className="d-block w-100" alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src={img3} className="d-block w-100" alt="..." />
//             </div>
//           </div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleFade"
//             data-bs-slide="prev"
//           >
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleFade"
//             data-bs-slide="next"
//           >
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="container">
//         {foodCategory.length > 0 ? (
//           foodCategory.map((data) => {
//             return (
//               <div key={data._id} className="row mb-5">
//                 {/* Category Name */}
//                 <div className="fs-3 mb-4 text-center">
//                   {data.CategoryName ? (
//                     <h1>{data.CategoryName}</h1>
//                   ) : (
//                     "Unnamed Category"
//                   )}
//                 </div>
//                 <hr />

//                 {/* Filter and display food items */}
//                 {foodItems.length > 0 ? (
//                   foodItems
//                     .filter(
//                       (item) =>
//                         item.CategoryName === data.CategoryName &&
//                         item.name.toLowerCase().includes(search.toLowerCase)
//                     )
//                     .map((filteredItem) => (
//                       <div
//                         key={filteredItem._id}
//                         className="col-sm-12 col-md-6 col-lg-3 mb-4"
//                       >
//                         <Card
//                           foodName={filteredItem.name}
//                           imgSrc={filteredItem.img}
//                           options={filteredItem.options[0]}
//                         />
//                       </div>
//                     ))
//                 ) : (
//                   <p className="text-center">No items found.</p>
//                 )}
//               </div>
//             );
//           })
//         ) : (
//           <div className="text-center py-5">Loading...</div>
//         )}
//       </div>

//       {/* Footer */}
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

import img1 from "../images/a.jpg";
import img2 from "../images/b.jpg";
import img3 from "../images/c.jpg";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/asd/foodData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const ds = await response.json();
      setFoodCategory(ds.categories);
      setFoodItems(ds.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Carousel */}
      <div className="container my-4">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for food"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="container">
        {foodCategory.length > 0 ? (
          foodCategory.map((data) => {
            return (
              <div key={data._id} className="row mb-5">
                {/* Category Name */}
                <div className="fs-3 mb-4 text-center">
                  <h1>{data.CategoryName || "Unnamed Category"}</h1>
                </div>
                <hr />

                {/* Filter and display food items */}
                {foodItems.length > 0 ? (
                  foodItems
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        (search === "" ||
                          item.name
                            .toLowerCase()
                            .includes(search.toLowerCase()))
                    )
                    .map((filteredItem) => (
                      <div
                        key={filteredItem._id}
                        className="col-sm-12 col-md-6 col-lg-3 mb-4"
                      >
                        <Card
                          foodName={filteredItem.name}
                          imgSrc={filteredItem.img}
                          options={filteredItem.options[0]}
                        />
                      </div>
                    ))
                ) : (
                  <p className="text-center">No items found.</p>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-5">Loading...</div>
        )}
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}
