import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai";
import {BiSolidPhoneCall} from "react-icons/bi";
import {BsInfoCircle} from "react-icons/bs";


const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.146096530678!2d77.59315284243596!3d12.905372998460697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fd502e55555%3A0x74364491ad53ee17!2sRPNC%20Systems%20Pvt%20Ltd%2C%20Banglore!5e0!3m2!1sen!2sin!4v1688381934035!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                key="google-maps-iframe"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number"/>
                    </div>
                    <div>
                      <textarea name="" id="" className="w-100 form-control" cols="" rows="10" placeholder="Comments"/>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineHome className='fs-5'/>
                    <address className="mb-0">Hno:277,Near Devegowda Petrol Bunk,gururaja layout 1st cross</address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center"><BiSolidPhoneCall className='fs-5'/>
                    <a href='tel:+91 7349252357'>+91 7349252357</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineMail className='fs-5'/>
                    <a href='mailto:shruthi1632001@gmail.com'>shruthi1632001@gmail.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center"><BsInfoCircle className='fs-5'/>
                    <p className="mb-0">Monday - Friday 10AM - 8PM</p>
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
