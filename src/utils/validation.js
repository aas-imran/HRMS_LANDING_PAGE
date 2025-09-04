export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = 'Invalid email address';
  }

  if (!formData.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[0-9+\-() ]{10,}$/.test(formData.phone)) {
    errors.phone = 'Invalid phone number';
  }

  if (!formData.companyName?.trim()) {
    errors.companyName = 'Company name is required';
  }

  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};