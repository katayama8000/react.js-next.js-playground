import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  age: string;
  image: FileList | null;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
    image: yup.mixed().required(),
  })
  .required();

const Index4 = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "test",
      age: "20",
      image: null,
    },
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">name</label>
      <input {...register("name")} />
      <label htmlFor="age">age</label>
      <input type="number" {...register("age")} />
      <label htmlFor="image">image</label>
      <input
        type="file"
        {...register("image")}
        accept="image/*,.png,.jpg,.jpeg,.gif"
        name="image"
      />
      <input type="submit" name="送信" />
    </form>
  );
};

export default Index4;
