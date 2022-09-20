import { useState, useCallback } from 'react';
import validator from 'validator/es';
import { customValidityMessage } from '../utils/constants.js';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const { patternMismatch, patternMismatchEmail, tooShort, valueMissing } = customValidityMessage;

  const handleChange = (e) => {
    const { name } = e.target
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    if (name === 'name') {
      if (e.target.validity.tooShort) {
        e.target.setCustomValidity(`${tooShort} ${value.length}`)
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

    if (e.target.name === 'email') {

      if (!validator.isEmail(value)) {
        e.target.setCustomValidity(patternMismatchEmail);

        if (value === '') {
          e.target.setCustomValidity(valueMissing);
        } else if (!value.includes('@')) {
          e.target.setCustomValidity(`Адрес электронной почты должен содержать символ "@". Адрес ${value} не содержит символ "@"`);
        } else if (value.endsWith('@')) {
          e.target.setCustomValidity(`Введите часть адреса после символа "@". Адрес ${value} неполный`);
        }
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