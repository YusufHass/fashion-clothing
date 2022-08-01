import {
  BaseButtonContainer,
  InvertedButton,
  GoogleSignIn,
} from "./button.styles.js";

{
  /*
three button types on the application
default button

inverted

google sign in
*/
}

export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButtonContainer,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignIn,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
export default Button;
