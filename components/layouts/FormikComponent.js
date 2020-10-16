import {
  FormControl,
  FormLabel,
  Textarea
} from "@chakra-ui/core";

function FormikComponents(props) {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="review">{props.title}</FormLabel>
      <Textarea id="review" name="review" onKeyUp={props.handleChange}/>
    </FormControl>
  );
}

export default FormikComponents;