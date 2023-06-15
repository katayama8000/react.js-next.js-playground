import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const GENDER = ["男性", "女性"];

type Input = {
  gernder: typeof GENDER;
};
const schema = yup
  .object({
    gernder: yup.array().required("性別を選択してください"),
  })
  .required();

const MultipleCheckBoxes: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Input>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Input> = async ({ gernder }) => {
    console.log(gernder);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.gernder)}>
        <FormLabel>性別</FormLabel>
        <Controller
          name="gernder"
          control={control}
          render={({ field }) => {
            return (
              <CheckboxGroup {...field}>
                {GENDER.map((v) => {
                  return (
                    <Checkbox key={v} value={v} name="elements">
                      {v}
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
            );
          }}
        />
        <FormErrorMessage>
          {errors.gernder && errors.gernder.message}
        </FormErrorMessage>
      </FormControl>
      <Button isLoading={isSubmitting} type="submit">
        送信
      </Button>
    </form>
  );
};

export default MultipleCheckBoxes;
