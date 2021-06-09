/* eslint-disable prettier/prettier */
export default props => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};
