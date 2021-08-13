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

  return {
    inputs,
    handleChange,
  };
}
