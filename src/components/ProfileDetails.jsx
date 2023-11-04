import React from "react";

const ProfileDetails = ({ data }) => {
  return (
    <div>
      <p className="text-xl">Name: {data.fName + data.lName}</p>
      <p className="text-xl">UserName: {data.userName}</p>
    </div>
  );
};

export default ProfileDetails;
