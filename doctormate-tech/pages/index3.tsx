import { useState, MouseEvent } from "react";
import { useForm } from "react-hook-form";

type formType = {
  FirstName: string;
  LastName: string;
  Email: string;
  MobileNumber: string;
  Title: string;
  Developer: string;
};

const initialFormState: formType = {
  FirstName: "",
  LastName: "",
  Email: "",
  MobileNumber: "",
  Title: "",
  Developer: "",
};
export default function Index3() {
  const [submittedVal, setSubmittedVal] = useState<formType>(initialFormState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: "100px",
      }}
    >
      <form
        onSubmit={handleSubmit((data) => {
          setSubmittedVal(data as formType);
        })}
      >
        <input
          type="text"
          placeholder="First name"
          {...register("FirstName", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("LastName", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("MobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="Yes"
          onClick={(e: MouseEvent<HTMLInputElement>) => {
            console.log(e.currentTarget.value);
          }}
        />
        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="No"
          onClick={(e: MouseEvent<HTMLInputElement>) => {
            console.log(e.currentTarget.value);
          }}
        />

        <input type="submit" />
      </form>
      <div style={{ color: "red" }}>
        {errors && errors.FirstName && errors.FirstName.type === "required" && (
          <h2>firstName is can not be empty</h2>
        )}

        {errors && errors.LastName && errors.LastName.type === "required" && (
          <h2>lastName is can not be empty</h2>
        )}

        {/* developer error */}
        {errors && errors.Developer && errors.Developer.type === "required" && (
          <h2>developer is can not be empty</h2>
        )}
      </div>
    </div>
  );
}
