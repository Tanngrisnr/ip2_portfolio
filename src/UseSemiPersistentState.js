import { useEffect, useState } from "react";

const UseSemiPersistentState = (key, initialState) => {
  let local = localStorage.getItem(key);
  console.log(initialState);
  const [value, setValue] = useState(!local ? JSON.parse(local) : initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default UseSemiPersistentState;
