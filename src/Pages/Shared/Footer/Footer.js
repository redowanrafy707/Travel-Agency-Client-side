// import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

// const Footer = () => {
//   return (
//     <div>
//       <div>
//         <div className="footer pt-5 pb-3">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 my-auto">
//                 <Link
//                   className="navbar-brand text-light fw-bold fs-1"
//                   to="/home"
//                 >
//                   <span className="color-pink">Travel Guru</span>
//                   <span className="color-pink">...</span>
//                 </Link>
//                 <h3 className="mt-3">Do You Need Help With Anything?</h3>
//                 <p className="w-75 foot fs-6 text fs-4">
//                   Receive updates, hot deals, tutorials, discounts sent straignt
//                   in your inbox every month
//                 </p>
//                 <div className="input-group mb-3 w-75 fs-1">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Email Address"
//                     aria-label="Recipient's username"
//                     aria-describedby="basic-addon2"
//                   />
//                   <NavLink to="/commingSoon">
//                     <span
//                       className="input-group-text btn btn-travel rounded-start border-start-0"
//                       id="basic-addon2"
//                     >
//                       Subscribe
//                     </span>
//                   </NavLink>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="row">
//                   <div className="col-lg-4 footerLink">
//                     <h4>LAYOUTS</h4>
//                     <li>
//                       <i className="fas fa-arrow-right"></i> Home Page
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> About Page
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Service Page
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Contact Page
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Single Blog
//                     </li>
//                   </div>
//                   <div className="col-lg-4 footerLink">
//                     <h4>ALL SECTIONS</h4>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Headers
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Attractive
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Testimonials
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Videos
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Footers
//                     </li>
//                   </div>
//                   <div className="col-lg-4 footerLink">
//                     <h4>COMPANY</h4>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> About
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Blog
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Pricing
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Affiliate
//                     </li>
//                     <li>
//                       {" "}
//                       <i className="fas fa-arrow-right"></i> Login
//                     </li>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="footerText">
//             <p className="text-center mt-5">
//               © 2021 <span className="color-pink">T</span>ravel
//               <span className="color-pink">...</span> Designd By{" "}
//               <span className="color-pink">Md Bayazid</span>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;






import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">

        <div className="footer-left">

          <h3>Travel <span>Guru</span></h3>

          <p className="footer-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About US</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard">My Order</Link>
          </p>
          <p className="footer-company-name">Travel Guru © 2015</p>
        </div>
        <div className="footer-center">
          <div >
            {/* <FontAwesomeIcon className="icon" icon={faMapMarked} size='2x' /> */}
            <p className="d-inline-block"><span>1200 4 Banani</span> Dhaka, Bangladesh</p>
          </div>
          <div >
            {/* <FontAwesomeIcon className="icon" icon={faPhone} size='2x' /> */}
            <p>+012345678</p>
          </div>
          <div >
            {/* <FontAwesomeIcon className="icon" icon={faEnvelope} size='2x' /> */}
            <p><a href="mailto:support@company.com">redowanrafy707@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About Us</span>
            We are one of the best travel organizer of Bangladesh
          </p>
          <div className="footer-icons">
            {/* <FontAwesomeIcon className="icon" icon={faFacebook} size='3x' />
            <FontAwesomeIcon className="icon" icon={faInstagram} size='3x' />
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} size='3x' /> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;