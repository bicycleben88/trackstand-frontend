import React from 'react';

export default function useForm<t>(initial: t) {
  const [inputs, setInputs] = React.useState(initial);
  const initialValues = Object.values(initial).join('');

  React.useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (inputType: string, e: any) => {
    if (typeof initial[inputType] === 'number') {
      setInputs({...inputs, [inputType]: parseInt(e.nativeEvent.text, 10)});
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
