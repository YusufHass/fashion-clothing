/* this section is difficult part of using the style components.
we added css so we can incapsulatae some of styling that are difficult usinig styled components
also we use regulaar javascript functions so we can use some pervilages that we cannot use using 
the styled  */ 
import styled,{css} from 'styled-components'
// the following styles converted into a variable and we can use the 
//variable to inject into another component
// $sub-color: grey;
// $main-color: black;

const subColor= 'grey';
const mainColor= 'brown';

/* @mixin shrinkLabel {
  top: -14px;
  font-size: 12px;
  color: $main-color;
} */

const shrinkLabelStyles=css`
top: -14px;
font-size: 12px;
color: ${mainColor};
`
export const FormInputLabel= styled.label`
color: ${subColor};
font-size: 16px;
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
top: 10px;
transition: 300ms ease all;

/* &.shrink {
  @include shrinkLabel();
} */

${({shrink})=> shrink && shrinkLabelStyles }
` 
 
export const Input= styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

 /*  &:focus ~ .form-input-label {
    @include shrinkLabel();
  } */
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`
export const Group=styled.div`
position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`
/* 

group {
  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $sub-color;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      @include shrinkLabel();
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      @include shrinkLabel();
    }
  }
}
 */