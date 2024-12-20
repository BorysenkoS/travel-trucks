import React, { useState } from 'react';
import styles from './BookingForm.module.css';

import DatePicker from 'react-datepicker';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = ({ camperName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateRange: [null, null],
    comment: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    dateRange: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleDateChange = (dates) => {
    setFormData((prevData) => ({
      ...prevData,
      dateRange: dates,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, dateRange: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.dateRange) {
      newErrors.dateRange = 'Booking date is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast.success(`The camper "${camperName}" has been successfully booked!`, {
      position: 'bottom-center',
      style: {
        fontSize: '16px',
        borderRadius: '10px',
        padding: '15px 25px',
      },
    });

    setFormData({
      name: '',
      email: '',
      dateRange: '',
      comment: '',
    });
    setErrors({});
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.bookTitle}>Book your campervan now</h2>
      <p className={styles.bookText}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit} className={styles.bookingForm}>
        <div className={styles.inputsWrapper}>
          <label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </label>
          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </label>
          <label>
            <DatePicker
              selectsRange
              startDate={formData.dateRange[0]}
              endDate={formData.dateRange[1]}
              onChange={handleDateChange}
              placeholderText="Select booking dates*"
              className={styles.datePicker}
            />
            {errors.dateRange && (
              <p className={styles.error}>{errors.dateRange}</p>
            )}
          </label>
          <label>
            <textarea
              className={styles.textarea}
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Comment"
              style={{ resize: 'none' }}
            />
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookingForm;
