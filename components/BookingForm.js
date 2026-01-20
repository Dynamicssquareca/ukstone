import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BookingForm = ({ onSubmit, productData = null }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(3);
  const [timerId, setTimerId] = useState(null);
  const [errors, setErrors] = useState({});
  const [defaultCountryCode, setDefaultCountryCode] = useState("us");
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
    fetchCountryCodeByIP();
  }, []);

  const fetchCountryCodeByIP = () => {
    fetch(
      "https://api.ipdata.co?api-key=c87ef34a2d0cd830649eec9a8b2395698490a7baaf414bf95516a3b8"
    )
      .then((res) => res.json())
      .then((data) => {
        setDefaultCountryCode(data.country_code.toLowerCase());
      })
      .catch(() => setDefaultCountryCode("us"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check
    const formData = new FormData(e.target);
    if (formData.get("website")) return;

    if (!validateForm()) return;

    setSubmitted(true);

    // ✅ EMAILJS
    emailjs.send(
      "service_w9qxeft",
      "template_6ni1e9f",
      {
        from_name: name,
        from_email: email,
        phone_number: phone,
        company_name: company,
        message: message,
        page_url: pageUrl,

        // PRODUCT DATA
        product_title: productData?.title || "",
        product_option: productData?.option || "",
        product_price: productData?.price || "",
        product_discount: productData?.discount || "",
        product_yard: productData?.yard || ""
      },
      "3b5rTXsmRl05L_8tD"
    );

    // ✅ API SEND
    await fetch("https://www.minimallyyours.com/api/zohocrmforceplus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formName: "Booking Form",
        formtag: "Booking Form",
        name,
        email,
        phone,
        companyname: company,
        message,
        currentPageUrl: pageUrl,
        defaultCountryName: defaultCountryCode,
        productData
      })
    });

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");

    onSubmit();

    setTimerId(
      setInterval(() => {
        setRedirectTimer((t) => {
          if (t === 0) clearInterval(timerId);
          return t - 1;
        });
      }, 1000)
    );
  };

  const validateForm = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    if (!phone.trim()) errs.phone = "Phone is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  return (
    <form className="form-one" onSubmit={handleSubmit}>

      {/* ✅ PRODUCT SUMMARY */}
      {productData && (
        <div className="alert alert-light border rounded-3 mb-4">
          <p className="mb-1"><b>Product:</b> {productData.title}</p>
          <p className="mb-1"><b>Option:</b> {productData.option}</p>
          <p className="mb-1"><b>Price:</b> £{productData.price}</p>
          {productData.discount && (
            <p className="mb-0 text-success">
              <b>Discount:</b> {productData.discount}
            </p>
          )}
        </div>
      )}

      {/* NAME */}
      <div className="form-group">
        <input className="form-control" value={name} onChange={e=>setName(e.target.value)} />
        <label>Full Name</label>
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      {/* EMAIL */}
      <div className="form-group">
        <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Company Email</label>
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>

      {/* PHONE */}
      <div className="form-group">
        <PhoneInput
          country={defaultCountryCode}
          value={phone}
          onChange={setPhone}
          inputClass="form-control"
        />
        {errors.phone && <div className="text-danger">{errors.phone}</div>}
      </div>

      {/* COMPANY */}
      <div className="form-group">
        <input className="form-control" value={company} onChange={e=>setCompany(e.target.value)} />
        <label>Company Name</label>
      </div>

      {/* MESSAGE */}
      <div className="form-group mb-4">
        <textarea className="form-control" rows="3" value={message} onChange={e=>setMessage(e.target.value)} />
        <label>Message</label>
      </div>

      <button className="btn btn-three w-100" type="submit" disabled={submitted}>
        {submitted ? `Submitting (${redirectTimer})` : "Submit"}
      </button>
    </form>
  );
};

export default BookingForm;
