"use client";

import { useState } from "react";

type Props = {};

const AuthForm = (props: Props) => {
  const [variant, setVariant] = useState<"LOGIN" | "REGISTER">("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  return <div>AuthForm</div>;
};

export default AuthForm;
