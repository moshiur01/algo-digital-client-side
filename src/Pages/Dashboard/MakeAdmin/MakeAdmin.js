import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const confirm = window.confirm(`Do you want to Make ${email} as a Admin`);
    if (confirm) {
      const user = { email };
      fetch("https://cryptic-fortress-14110.herokuapp.com/users/admin", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Admin Added");
            document.getElementById("admin-form").reset();
          } else {
            alert(`${email} is Already an Admin`);
            document.getElementById("admin-form").reset();
          }
        });
    }
  };
  return <div>make me Admin</div>;
};

export default MakeAdmin;
