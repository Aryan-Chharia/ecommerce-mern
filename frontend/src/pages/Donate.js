import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'qrcode';
import './CSS/Donate.css';
import React, { useState, useEffect } from 'react';

const DonationPage = () => {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    setShowQRCode(false);
  }, [formData.amount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.amount || formData.amount <= 0) newErrors.amount = "Please enter a valid amount";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateQRCode = async (data) => {
    try {
      const url = await QRCode.toDataURL(data);
      setQrCodeUrl(url);
      setShowQRCode(true);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const upiId = process.env.REACT_APP_UPI_ID;
      console.log(upiId)
      const qrData = `upi://pay?pa=${upiId}&am=${formData.amount}&cu=INR&tn=Donation`;
      generateQRCode(qrData);
    }
  };

  return (
    <div className="donation-container">
      <h1>Make a Donation</h1>
      <p>Your support helps us continue our mission. Thank you for your generosity!</p>
      
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label htmlFor="amount">Donation Amount</label>
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faDollarSign} className="input-icon" />
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              min="1"
              step="0.01"
              required
            />
          </div>
          {errors.amount && <span className="error">{errors.amount}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <button type="submit" className="donate-button">Generate QR Code</button>

        {showQRCode && (
          <div className="qr-code-container">
            <img src={qrCodeUrl} alt="QR Code for donation" />
            <p>Scan this QR code to make your donation</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default DonationPage;