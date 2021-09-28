import React from 'react';
import {formatNumber} from './formatNumber';

export default function useForm<t>(initial: t) {
  const [inputs, setInputs] = React.useState(initial);
  const initialValues = Object.values(initial).join('');

  React.useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (inputType: string, e: any) => {
    // input is a number (e.g. miles)
    if (typeof initial[inputType] === 'number') {
      setInputs({...inputs, [inputType]: parseInt(e.nativeEvent.text, 10)});
      // input is a date
    } else if (inputType === 'date') {
      setInputs({...inputs, [inputType]: new Date(e.nativeEvent.timestamp)});
      // input is a string (e.g. username)
    } else {
      setInputs({...inputs, [inputType]: e.nativeEvent.text});
    }
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, '']),
    );
    setInputs(blankState);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
