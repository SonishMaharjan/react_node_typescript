import { useState, useEffect } from "react";

const useForm = (
  callback: any,
  validate: any
): {
  values: any;
  errors: any;
  handleChange: (event: any) => void;
  handleSubmit: (event: any) => void;
  resetForm: () => void;
} => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    setErrors(validate(values));

    setIsSubmitting(true);
  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setValues({});
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    handleChange,
    resetForm,
    handleSubmit,
  };
};

export default useForm;
