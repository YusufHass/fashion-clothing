import {Input, Group, FormInputLabel} from "./form-input.styles.js";
const FormInput = ({ label, ...restOfProps }) => {
  return (
    <Group>
        {/* we added the input above the label because the label is the child of the input
        in the .scss styling  */}
        {/* also the form field is shirnkable when we add text  */}
      <Input {...restOfProps} />
      {/* if leble exists then render the label */}
      {label && (
        /* // if in the input feild of otherProps has input value then 
      otherwise back to default
          className={`${
            restOfProps.value.length ? "shrink" : ""
          } form-input-label`} */


          //now we need to pass the shrink as props into the form-input.styles.js so we can distructure it there.
          //the shrink will check the props length here so one the length is true
          //then it will pass to the component
        <FormInputLabel shrink={restOfProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
