import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../constants";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const loginSuccessful = await login(data.email, data.password);

    if (loginSuccessful) {
      navigate("/app/todo");
    }
  };

  return (
    <div className="container mx-auto flex justify-center mt-40 px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-full max-w-xl flex flex-col gap-6"
      >
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full rounded p-3 bg-zinc-950 text-white"
          placeholder="Email"
          autoComplete="off"
        />

        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full rounded p-3 bg-zinc-950 text-white"
          placeholder="Password"
          autoComplete="off"
        />

        <button
          type="submit"
          className="p-3 font-medium text-sm rounded bg-[#de483a]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
