import "./form-input.styles.scss";
const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
        {/* we added the input above the label because the label is the child of the input
        in the .scss styling  */}
        {/* also the form field is shirnkable when we add text  */}
      <input className="form-input" {...inputOptions} />
      {/* if leble exists then render the label */}
      {label && (
        <label
          // if in the input feild of otherProps has input value then shrink otherwise back to default
          className={`${
            inputOptions.value.lengh ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
