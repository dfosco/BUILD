import React /* PropTypes */ from "react";
import { Button, Link } from '../components';

export default function ComponentRenderer(props) {
  return <main className="bg-blue"><Button>Hello</Button>{props.children}</main>;
}

// ComponentRenderer.propTypes = {
//
// }
