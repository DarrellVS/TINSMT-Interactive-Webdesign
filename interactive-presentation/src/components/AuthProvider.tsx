import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

function LoginInputs({ onSubmit }: { onSubmit: (password: string) => void }) {
  const [pass, setPass] = useState("");

  return (
    <Flex h="100vh" direction="column" align="center" justify="center">
      <Flex direction="column" w="300px" m="auto">
        <Input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSubmit(pass)}
          mb="1rem"
        />
        <Button onClick={() => onSubmit(pass)} colorScheme="blue">
          Login
        </Button>
      </Flex>
    </Flex>
  );
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuth, setIsAuth] = useState(false);

  const onSubmit = useCallback((pass: string) => {
    if (pass === "chungus") {
      setIsAuth(true);
    }
  }, []);

  return <>{isAuth ? children : <LoginInputs onSubmit={onSubmit} />}</>;
}
