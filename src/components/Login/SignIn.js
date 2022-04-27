import { Button, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

const SignIn = () => {
  const handleUrl = () => {
    window.open("", "_blank");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container tab-content">
      <div id="sign-in" className="auth-form form-validation pt-3 pb-1">
        <form className="form-validate">
          <div className="form-group mb-6">
            <div>
              {/* <input
                {...register("usuario", { required: true })}
                type="text"
                className="form-control input-tr4iner"
                placeholder="Usuario"
              /> */}
              <TextField
                {...register("usuario", { required: true })}
                className="form-control"
                id="outlined-basic"
                label="Usuario"
                variant="outlined"
              />
            </div>
            {errors.usuario && (
              <div className="text-danger fs-12 mt-1">
                El usuario es requerido
              </div>
            )}
          </div>
          <div className="form-group mb-3">
            {/* <input
              {...register("clave", { required: true })}
              type="password"
              className="form-control input-tr4iner"
              placeholder="Contraseña"
            /> */}
            <TextField
              {...register("clave", { required: true })}
              className="form-control"
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
            />

            {errors.clave && (
              <div className="text-danger fs-12 mt-1">
                La contraseña es requerida
              </div>
            )}
          </div>
          <div className="text-center form-group mb-3">
            <Button variant="outlined" type="submit" >Ingresar</Button>
            {/* <button>Entrar</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
