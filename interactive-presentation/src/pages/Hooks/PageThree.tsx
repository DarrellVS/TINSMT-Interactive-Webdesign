import { Box, Image, Heading, Button } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import CustomList from "../../components/List/CustomList";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function HooksPageThree() {
  const [notifications, setNotifications] = useState<string[]>([]);
  const [state, setState] = useState(0);

  const incrementState = useCallback(() => {
    setState((value) => value + 1);
  }, []);

  useEffect(() => {
    if (state !== 0)
      setNotifications((value) => [
        `useEffect is called, state is now: ${state}`,
        ...value,
      ]);
  }, [state]);

  return (
    <SlideWrapper>
      <PageHeading query="belangrijkste">
        Voorbeeld van de belangrijkste hooks
      </PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          Voorbeeldje!
        </Heading>
        <Image src="/images/important hooks.png" rounded="7.5px" mt="1rem" />

        <Box position="relative">
          <Button onClick={incrementState} mt="3rem" colorScheme="blue">
            Increment State
          </Button>

          <CustomList position="absolute">
            {notifications.map((notification, index) => (
              <Box key={index}>{notification}</Box>
            ))}
          </CustomList>
        </Box>
      </Box>
    </SlideWrapper>
  );
}
