import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  cost: z.string().transform((val) => Number(val)),
});

type Schema = z.infer<typeof schema>;

const COSTS = [1000, 2000, 3000, 5000, 10000] as const;
const Form = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      cost: 0,
    },
  });

  console.log(watch('cost'));
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <select {...register('cost')}>
        {COSTS.map((cost) => (
          <option key={cost} value={cost}>
            {cost}
          </option>
        ))}
      </select>
      <button type="submit">送信</button>
    </form>
  );
};

export default Form;
