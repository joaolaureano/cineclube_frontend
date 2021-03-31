import React from "react";
import { Button } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";

const Login = (): JSX.Element => {
  return (
    <div>
      <Button
        startIcon={<FcGoogle size={30} />}
        variant="contained"
        color="secondary"
      >
        Entrar com Google
      </Button>
    </div>
  );
};

export default Login;
