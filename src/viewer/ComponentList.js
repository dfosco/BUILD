import React /* PropTypes */ from "react";

export default function ComponentList(props) {
  return <aside className="bg-red">{props.children}</aside>;
}

// componentList.propTypes = {
//
// }
