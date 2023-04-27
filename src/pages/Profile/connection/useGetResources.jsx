import { useState } from "react";

export default function useGetResources() {
  const [activeResources, setActiveResources] = useState([1.1, 1.2, 2.3]);
  return [activeResources, setActiveResources];
}
