// import React, { useState } from "react";
// import { json, Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(credentials);

//     try {
//       const response = await fetch(
//         "https://gofood-nkxf.onrender.com/api/loginuser",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         }
//       );

//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error("Error during signup:", error);
//     }

//     console.log("Form Submitted");
//     localStorage.setItem("authToken", json.authToken);
//     console.log("authToken", json.authToken);

//     navigate("/");
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={credentials.email}
//               onChange={onChange}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={credentials.password}
//               onChange={onChange}
//             />
//           </div>

//           <button type="submit" className="btn btn-success">
//             Submit
//           </button>

//           <Link to="/createuser" className="m-3 btn btn-danger">
//             New user?
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }

//--------------------------------------------

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(credentials);

//     try {
//       const response = await fetch(
//         "https://gofood-nkxf.onrender.com/api/loginuser",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(credentials),
//         }
//       );

//       const json = await response.json();
//       console.log(json);

//       if (response.ok) {
//         // Save the auth token and navigate
//         localStorage.setItem("authToken", json.token);
//         console.log("authToken", json.token);
//         navigate("/");
//       } else {
//         console.error("Login failed:", json.errors[0].msg);
//         // Handle the error appropriately (e.g., show an error message)
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//     }

//     console.log("Form Submitted");
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={credentials.email}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={credentials.password}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-success">
//             Submit
//           </button>

//           <Link to="/createuser" className="m-3 btn btn-danger">
//             New user?
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }

//--------------------------------------------

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting credentials:", credentials);

    try {
      const response = await fetch(
        "https://gofood-nkxf.onrender.com/api/loginuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const json = await response.json();
      console.log("Response JSON:", json);

      if (response.ok) {
        // Ensure you're using the correct key for the token
        const authToken = json.token;
        localStorage.setItem("authToken", authToken);
        console.log("authToken:", authToken);

        navigate("/");
      } else {
        console.error("Login failed:", json.errors[0]?.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>

          <Link to="/createuser" className="m-3 btn btn-danger">
            New user?
          </Link>
        </form>
      </div>
    </>
  );
}
