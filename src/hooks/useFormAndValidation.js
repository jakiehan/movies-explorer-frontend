import { useState, useCallback } from 'react';
import { customValidityMessage } from '../utils/constants.js';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const { patternMismatch, tooShort, valueMissing } = customValidityMessage;

  const handleChange = (e) => {
    const { name } = e.target
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    if (name === 'name') {
      if (e.target.validity.tooShort) {
        e.target.setCustomValidity(`${tooShort} ${e.target.value.length}`)
      } else {
        e.target.setCustomValidity('');
      }

      if (e.target.validity.valueMissing) {
        e.target.setCustomValidity(valueMissing);
      } else {
        e.target.setCustomValidity('');
      }

      if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity(patternMismatch);
      } else {
        e.target.setCustomValidity('');
      }
    }

    setValues({...values, [name]: value });
    setErrors({...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}