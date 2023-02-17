// 動いていない
// https://react-hook-form.com/api/usecontroller/controller

import { FC, useState } from "react";
import { Control, useForm, UseFormRegister } from "react-hook-form";

type TControllerProps = {
  control: Control<
    {
      firstName: string;
      lastName: string;
    },
    any
  >;
  register: UseFormRegister<{
    firstName: string;
    lastName: string;
  }>;
  name: "lastName";
  render: any;
};

const Controller: FC<TControllerProps> = ({
  control,
  register,
  name,
  render,
}) => {
  const props = register(name);
  return render({
    onchange: (e: { target: { value: string } }) =>
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      }),
    onBlur: props.onBlur,
    name: props.name,
  });
};

type Props = {
  value: string;
  name: string;
  onChange: (e: { target: { value: string } }) => void;
};

const Input: FC<Props> = (props) => {
  const [value, setValue] = useState<string>(props.value || "");
  return (
    <input
      name={props.name}
      onChange={(e) => {
        setValue(e.target.value);
        console.log(e.target.value);
        props.onChange && props.onChange(e);
      }}
      value={value}
      placeholder={props.name}
    />
  );
};

const Index7 = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data: { firstName: string; lastName: string }) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("firstName")} placeholder="firstName" />
        <Controller
          {...{
            control,
            register,
            name: "lastName",
            render: (props: JSX.IntrinsicAttributes & Props) => (
              <Input {...props} />
            ),
          }}
        />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Index7;
