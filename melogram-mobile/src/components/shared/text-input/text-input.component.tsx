import { Input } from "native-base";

export default function TextInputComponent(props: any) {
  return (
    <Input
      placeholder={props.placeholder}
      fontSize={14}
      variant={"filled"}
      bg={"#1A202C"}
      width={props.width}
      borderColor={"transparent"}
      color={"white"}
      _input={{
        selectionColor: "white",
        cursorColor: "white",
      }}
      _focus={{
        borderColor: "gray.700",
      }}
      height="45px"
      borderRadius="5"
      InputLeftElement={props.inputLeftElement}
    />
  );
}
