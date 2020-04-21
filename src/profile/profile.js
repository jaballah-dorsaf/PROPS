import React from "react";
import PropTypes from "prop-types";

export default function Profile(props) {
  Profile.defaultProps = {
    fullname: "jaballah dorsaf",
    bio: "student",
    profession: "dev fullstack"
  };
  Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
  };

  return (
    <div>
      {console.log(props.children)}
      {props.children}
    </div>
  );
}