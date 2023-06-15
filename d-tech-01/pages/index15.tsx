import React from 'react';
import * as yup from 'yup';
import { Button } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Controller,
  UseFormSetValue,
  UseFormSetError,
  Control,
  useForm,
} from 'react-hook-form';

type FormData = {
  name: string;
  age: number;
  birthDateYear: string;
  birthDateMonth: string;
  birthDateDay: string;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
  birthDateYear: yup.string().required(),
  birthDateMonth: yup.string().required(),
  birthDateDay: yup.string().required(),
});

type Schema = yup.InferType<typeof schema>;

const schema2 = yup.object({
  name: yup.string().required(),
  age: yup.number().required(),
  birthDateYear: yup.string().required(),
  birthDateMonth: yup.string().required(),
  birthDateDay: yup.string().required(),
});

type Schema2 = yup.InferType<typeof schema2>;

const schema3 = yup
  .object({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .shape({
    birthDateYear: yup.string().required(),
    birthDateMonth: yup.string().required(),
    birthDateDay: yup.string().required(),
  });

type Schema3 = yup.InferType<typeof schema3>;

const schema4 = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
  birthDateIsValid: yup
    .mixed()
    .test(
      'birthDateIsValid',
      '生年月日が正しくありません',
      (_value, context) => {
        console.log(context.parent.name);
        console.log(context.parent.age);
        return context.parent.birthDateYear && context.parent.birthDateMonth;
      }
    ),
});

const schema5 = yup
  .object({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .shape({
    birthDateIsValid: yup
      .mixed()
      .test(
        'birthDateIsValid',
        '生年月日が正しくありません',
        (_value, context) => {
          console.log(context.parent.name);
          console.log(context.parent.age);
          return context.parent.birthDateYear && context.parent.birthDateMonth;
        }
      ),
  });

type Schema5 = yup.InferType<typeof schema5>;

type form5 = {
  name: string;
  age: number;
  birthDateIsValid: boolean;
};

const schemaTest = yup
  .object({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .shape({
    fullInfo: yup
      .mixed()
      .test('fullInfo', '名前が正しくありません', (_value, context) => {
        console.log(context.parent.name);
        console.log(context.parent.age);

        console.log(context.parent.name && context.parent.age);
        if (context.parent.name && context.parent.age) {
          return true;
        }
        return false;
      }),
  });

type schmaTest = {
  name: string;
  age: number;
  fullInfo: boolean;
};

const Index15 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    register,
  } = useForm<schmaTest>({
    resolver: yupResolver(schemaTest),
    defaultValues: {
      name: '',
      age: 0,
      fullInfo: false,
    },
  });

  const clickHandler1 = () => {
    console.log(schema);
  };
  const clickHandler2 = () => {
    console.log(schema2);
  };
  const clickHandler3 = () => {
    console.log(schema3);
  };

  const compare = () => {
    console.log(schema.fields.name);
    console.log(schema2.fields.name);
    console.log(schema2.fields.name);
    console.log(schema.fields.age == schema2.fields.age);
    console.log(schema === schema3);
    console.log(schema2 === schema3);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <button
        onClick={() => {
          console.log(getValues('fullInfo'));
        }}
      >
        getInfo
      </button>
      <form action="" onSubmit={handleSubmit((d) => console.log(d))}>
        <input type="text" id="name" {...register('name')} />
        <input type="number" id="age" {...register('age')} />
        {/* <input type="date" id="birthDateYear" {...register('birthDateYear')} />
        <input
          type="date"
          id="birthDateMonth"
          {...register('birthDateMonth')}
        />
        <input type="date" id="birthDateDay" {...register('birthDateDay')} /> */}
        <button type="submit" name="example" value="ボタン">
          submit
        </button>
      </form>

      <Button onClick={() => clickHandler1()} m={2}>
        schema1
      </Button>
      <Button onClick={() => clickHandler2()} m={2}>
        schema2
      </Button>
      <Button onClick={() => clickHandler3()} m={2}>
        schema3
      </Button>
      <Button onClick={() => compare()} m={2}>
        compare
      </Button>
    </div>
  );
};

export default Index15;
function register(
  name: void
): JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> {
  throw new Error('Function not implemented.');
}
