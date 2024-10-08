// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <>
//       <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//         <div className="col-md-4 d-flex align-items-center">
//           <Link
//             to="/"
//             className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
//           ></Link>
//           <span className="text-muted">© 2023 GoFood, Inc</span>
//         </div>
//       </footer>
//     </>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top bg-light">
      <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
        <Link to="/" className="text-muted text-decoration-none lh-1">
          {/* You can place a logo or other elements here */}
          <span className="fs-5 fw-bold text-primary">GoFood</span>
        </Link>
        <span className="text-muted ms-3">© 2023 GoFood, Inc</span>
      </div>

      <div className="col-md-4 d-flex flex-column align-items-center mb-3 mb-md-0">
        <h2 className="h5 mb-3">Connect with Us</h2>
        <div className="d-flex gap-3">
          <a
            href="https://www.facebook.com"
            className="text-dark hover:text-primary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-dark hover:text-primary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-dark hover:text-primary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            className="text-dark hover:text-primary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

