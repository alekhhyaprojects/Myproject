import React, { useState } from 'react';
import './Register.css'; // Import custom CSS

const Register = () => {
  // State to hold selected options and total price
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    referral: '',
    paymentMethod: 'PayPal',
    selectedOptions: []
  });

  // Sample Pricing Data for all categories
  const pricingData = {
    academic: {
      earlyBird: [
        { label: 'Speaker - $745.00', price: 745 },
        { label: 'Delegate - $795.00', price: 795 },
        { label: 'Poster - $645.00', price: 645 }
      ],
      midTerm: [
        { label: 'Speaker - $845.00', price: 845 },
        { label: 'Delegate - $895.00', price: 895 },
        { label: 'Poster - $745.00', price: 745 }
      ],
      final: [
        { label: 'Speaker - $945.00', price: 945 },
        { label: 'Delegate - $995.00', price: 995 },
        { label: 'Poster - $845.00', price: 845 }
      ]
    },
    industry: {
      earlyBird: [
        { label: 'Speaker - $795.00', price: 795 },
        { label: 'Delegate - $845.00', price: 845 },
        { label: 'Poster - $695.00', price: 695 },
        { label: 'Exhibitor - $1,699.00', price: 1699 }
      ],
      midTerm: [
        { label: 'Speaker - $895.00', price: 895 },
        { label: 'Delegate - $945.00', price: 945 },
        { label: 'Poster - $795.00', price: 795 },
        { label: 'Exhibitor - $1,799.00', price: 1799 }
      ],
      final: [
        { label: 'Speaker - $995.00', price: 995 },
        { label: 'Delegate - $1,045.00', price: 1045 },
        { label: 'Poster - $895.00', price: 895 },
        { label: 'Exhibitor - $1,899.00', price: 1899 }
      ]
    },
    student: {
      earlyBird: [
        { label: 'Speaker - $395.00', price: 395 },
        { label: 'Delegate - $445.00', price: 445 },
        { label: 'Poster - $345.00', price: 345 }
      ],
      midTerm: [
        { label: 'Speaker - $445.00', price: 445 },
        { label: 'Delegate - $495.00', price: 495 },
        { label: 'Poster - $395.00', price: 395 }
      ],
      final: [
        { label: 'Speaker - $495.00', price: 495 },
        { label: 'Delegate - $545.00', price: 545 },
        { label: 'Poster - $445.00', price: 445 }
      ]
    },
    others: {
      earlyBird: [
        { label: 'Speaker - $595.00', price: 595 },
        { label: 'Delegate - $645.00', price: 645 },
        { label: 'Poster - $545.00', price: 545 }
      ],
      midTerm: [
        { label: 'Speaker - $645.00', price: 645 },
        { label: 'Delegate - $695.00', price: 695 },
        { label: 'Poster - $595.00', price: 595 }
      ],
      final: [
        { label: 'Speaker - $695.00', price: 695 },
        { label: 'Delegate - $745.00', price: 745 },
        { label: 'Poster - $645.00', price: 645 }
      ]
    },
    accommodation: {
      perNight: [
        { label: 'Single Room - $150.00 per night', price: 150 },
        { label: 'Double Room - $200.00 per night', price: 200 }
      ],
      Nights2: [
        { label: 'Single Room - $150.00 per night', price: 150 },
        { label: 'Double Room - $200.00 per night', price: 200 }
      ],
      Nights3: [
        { label: 'Single Room - $150.00 per night', price: 150 },
        { label: 'Double Room - $200.00 per night', price: 200 }
      ]

    }
  };

  // Handle option selection and total calculation
  const handleOptionChange = (e, price) => {
    const isChecked = e.target.checked;
    let updatedTotal = total;
    
    if (isChecked) {
      updatedTotal += price;
    } else {
      updatedTotal -= price;
    }
    
    setTotal(updatedTotal);
  };

  return (
    <div className="register-container">
      <div className='register-text'>
      <h2>Conference Registration</h2>
      <p>Welcome to the conference registration payment page! We’re excited to have you join us at our upcoming event. Below, you’ll find all the necessary details to complete your registration and secure your spot.</p>
      </div>
      {/* Academic Section */}
      <div className="category">
        <h3 className="Register-head">Academic</h3>
        <div className="pricing-row">
          <div className="pricing-category">
            <h4>Early Bird</h4>
            {pricingData.academic.earlyBird.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className="pricing-category">
            <h4>Mid Term</h4>
            {pricingData.academic.midTerm.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className="pricing-category">
            <h4>Final</h4>
            {pricingData.academic.final.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry/Business Section */}
      <div className="category">
        <h3 className="Register-head">Industry/Business</h3>
        <div className="pricing-row">
          <div className="pricing-category">
            <h4>Early Bird</h4>
            {pricingData.industry.earlyBird.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className="pricing-category">
            <h4>Mid Term</h4>
            {pricingData.industry.midTerm.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className="pricing-category">
            <h4>Final</h4>
            {pricingData.industry.final.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Section */}
      <div className="category">
        <h3 className="Register-head">Student</h3>
        <div className="pricing-row">
          <div className="pricing-category">
            <h4>Early Bird</h4>
            {pricingData.student.earlyBird.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className="pricing-category">
            <h4>Mid Term</h4>
            {pricingData.student.midTerm.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className="pricing-category">
            <h4>Final</h4>
            {pricingData.student.final.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Others Section */}
      <div className="category">
        <h3 className="Register-head">Others</h3>
        <div className="pricing-row">
          <div className="pricing-category">
            <h4>Early Bird</h4>
            {pricingData.others.earlyBird.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className="pricing-category">
            <h4>Mid Term</h4>
            {pricingData.others.midTerm.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
          <div className="pricing-category">
            <h4>Final</h4>
            {pricingData.others.final.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accommodation Section */}
      <div className="category">
        <h3 className="Register-head">Accommodation (Per Night)</h3>
        <div className="pricing-row">
          <div className="pricing-category">
            <h4>2 Days</h4>
            {pricingData.accommodation.perNight.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>     
            ))}
          </div>

          <div className="pricing-category">
          <h4>3 Days</h4>
            {pricingData.accommodation.Nights2.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>     
            ))}
          </div>
          <div className="pricing-category">
          <h4>4 Days</h4>
            {pricingData.accommodation.Nights3.map((option, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(e) => handleOptionChange(e, option.price)} />
                <label>{option.label}</label>
              </div>     
            ))}
          </div>
          
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="register-form-section">
        <h3 className="Register-head">Personal Information</h3>
        <div className="register-form-section-row">
        <div className='register-box'>
        <h3>Full Name *</h3>
        <input type="text" placeholder="Full Name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />    
        </div>
        <div  className='register-box'>
        <h3>Phone *</h3>
        <input type="text" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        </div>
        <div  className='register-box'>
         <h3>Email *</h3>
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </div>
       </div>
      </div>
     <div className='referral'>
        <h3>Referral</h3>
        <input type="text" placeholder="Referral" value={formData.referral} onChange={(e) => setFormData({ ...formData, referral: e.target.value })} />
     </div>

      {/* Total Section */}
      <div className="total-section">
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>

      {/* Payment Method Section */}
      <div className="payment-method">
        <h3 className="Register-head">Payment Method</h3>
        <label>
          <input type="radio" name="paymentMethod" value="PayPal" checked={formData.paymentMethod === 'PayPal'} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} />
          PayPal
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="Stripe" checked={formData.paymentMethod === 'Stripe'} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} />
          Stripe Payment Gateway
        </label>
      </div>

      <button className="pay-now-btn">Pay Now</button>
    </div>
  );
};

export default Register;
