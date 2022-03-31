import "./form-input.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
        {/* we added the input above the label because the label is the child of the input
        in the .scss styling  */}
      <input className="form-input" {...otherProps} />
      {/* if leble exists then render the label */}
      {label && (
        <label
          // if in the input feild of otherProps has input value then shrink otherwise back to default
          className={`${
            otherProps.value.lengh ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
