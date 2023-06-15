import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
  Radio,
  RadioGroup,
  Flex,
} from "@chakra-ui/react";

type Inputs = {
  name: string;
  age: string;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

const Index2 = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      {/* <input {...register("name")} />
      <input type="number" {...register("age")} /> */}
      <FormControl as="fieldset">
        <Flex>
          <FormLabel as="legend">Favorite Naruto Character</FormLabel>
          <RadioGroup defaultValue="Itachi">
            <Radio value="Sasuke">Sasuke</Radio>
            <Radio value="Nagato">Nagato</Radio>
          </RadioGroup>
          <FormHelperText>Select only if you are a fan.</FormHelperText>
        </Flex>
      </FormControl>
      {/* errorを表示 */}
      <input type="submit" />
    </form>
  );
};

export default Index2;
