import { SubmitHandler, useForm } from "react-hook-form";
import { IUserData, signup } from "../constants";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    const username = `${data.firstName} ${data.lastName}`;
    const userData: IUserData = { username };
    const registerSuccessful = await signup(
      data.email,
      data.password,
      userData
    );

    if (registerSuccessful) {
      navigate("/auth/login");
    }
  };

  return (
    <div className="container mx-auto flex justify-center mt-40 px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-full max-w-xl flex flex-col gap-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col relative">
            <input
              type="text"
              {...register("firstName", { required: true })}
              className="w-full rounded p-3 bg-zinc-950 text-white"
              placeholder="First Name"
              autoComplete="off"
            />
          </div>

          <input
            type="text"
            {...register("lastName", { required: true })}
            className="w-full rounded p-3 bg-zinc-950 text-white"
            placeholder="Last Name"
            autoComplete="off"
          />
        </div>

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
          Signup
        </button>
      </form>
    </div>
  );
}
