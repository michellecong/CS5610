import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function TaskDetail() {
  const { id } = useParams();

  return <div>TaskDetail id: {id}</div>;
}
