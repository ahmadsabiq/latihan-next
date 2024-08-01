// Client Side Rendering

"use client";

import Card from "./card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfileCard() {
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    // cara manual pake js
    // fetch("https://api.dimentorin.cloud/api/v1/users")
    //   .then((res) => res.json())
    //   .then((data) => setResponse(data));

    // cara pake axios
    axios.get("https://api.dimentorin.cloud/api/v1/users").then((res) => {
      setResponse(res.data);
    });
  }, []);

  console.log(response);

  return (
    <>
      {response &&
        response.data.map((pengguna: any) => (
          <Card
            name={pengguna.name}
            description={pengguna.email}
            key={pengguna.user_id}
          />
        ))}
    </>
  );
}
