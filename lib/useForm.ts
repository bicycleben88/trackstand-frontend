import React from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = React.useState(initial);
  const initialValues = Object.values(initial).join('');

  React.useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (inputType, e) => {
    setInputs({...inputs, [inputType]: e.nativeEvent.text});
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
