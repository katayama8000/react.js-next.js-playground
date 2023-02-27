import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Select } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const Index18 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    register,
  } = useForm({
    defaultValues: {
      name: '',
      age: 0,
      fullInfo: false,
      options: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit((d) => {
        console.log(d);
      })}
    >
      <FormControl>
        <FormLabel>Options</FormLabel>
        <Select {...register('options')} placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </FormControl>
    </form>
  );
};

export default Index18;
