import PropTypes from 'prop-types';

import { ConteinerButton } from './styles';

export function Button({ children, ...props }) {
  return <ConteinerButton {...props}>{children}</ConteinerButton>;
}

Button.propTypes = {
  children: PropTypes.string,
};
