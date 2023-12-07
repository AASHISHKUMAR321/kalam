"use client";

// import { Button } from "@repo/ui/button";
// import { useEffect, useState } from "react";

// const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";

// export default function Web() {
//   const [name, setName] = useState<string>("");
//   const [response, setResponse] = useState<{ message: string } | null>(null);
//   const [error, setError] = useState<string | undefined>();

//   useEffect(() => {
//     setResponse(null);
//     setError(undefined);
//   }, [name]);

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
//     setName(e.target.value);

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const result = await fetch(`${API_HOST}/message/${name}`);
//       const response = await result.json();
//       setResponse(response);
//     } catch (err) {
//       console.error(err);
//       setError("Unable to fetch response");
//     }
//   };

//   const onReset = () => {
//     setName("");
//   };

//   return (
//     <div>
//       <h1 className="text-red-400">Web</h1>
//     </div>
//   );
// }

import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

const home = () => {
  return (
    <div className="">
      <Navbar />
      <Intro />
    </div>
  );
};

export default home;
