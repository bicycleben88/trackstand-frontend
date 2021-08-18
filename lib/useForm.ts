import React from 'react';

type InputProps = {
  name?: string;
  email?: string;
  password?: string;
};

export default function useForm(initial: InputProps = {}) {
  const [inputs, setInputs] = React.useState(initial);
  const initialValues = Object.values(initial).join('');

  React.useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (inputType: string | number, e: any) => {
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
