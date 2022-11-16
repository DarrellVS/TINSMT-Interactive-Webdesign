import { Button, Grid, Input } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import CustomList from "../List/CustomList";
import CustomListItem from "../List/CustomListItem";
import { BiChevronRight } from "react-icons/bi";

export default function ExampleList() {
  const [listItems, setListItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addItem = useCallback(() => {
    // Is er een waarde ingevuld?
    if (inputValue.length === 0) return;

    // Voeg de string toe aan de array met listItems
    setListItems((prev) => [...prev, inputValue]);

    // Reset de input value
    setInputValue("");
  }, [inputValue]);

  const onInputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // Zet de input value naar de waarde van de input
      setInputValue(event.target.value);
    },
    []
  );

  return (
    <>
      <Grid templateColumns="3fr 1fr" gap="2rem">
        {/* De input om een string in te voeren */}
        <Input value={inputValue} onChange={onInputValueChange} />

        {/* De knop om de string aan de array toe te voegen */}
        <Button onClick={addItem}>Add</Button>
      </Grid>

      {/* De lijst met strings */}
      <CustomList mt="1rem">
        {/* Loop over iedere item in de array */}
        {listItems.map((item, index) => (
          // Render een ListItem met de string als child
          <CustomListItem icon={<BiChevronRight />} key={index}>
            {item}
          </CustomListItem>
        ))}
      </CustomList>
    </>
  );
}
