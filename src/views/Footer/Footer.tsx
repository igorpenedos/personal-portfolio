import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full flex justify-center">&copy;{year} Igor Penedos</div>
  );
}
