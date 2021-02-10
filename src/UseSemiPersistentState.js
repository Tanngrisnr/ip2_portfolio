import { useEffect, useState } from "react";

/* const isSummer = () => {
  const d = new Date();
  const m = d.getMonth();
  if (m >= 3 && m <= 8) {
    return true;
  } else {
    return false;
  }
};
 */
const UseSemiPersistentState = (key, initialState) => {
  let local = localStorage.getItem(key);
  /*    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(key)) || initialState
    );*/
  const [value, setValue] = useState(
    local !== null ? JSON.parse(local) : initialState
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default UseSemiPersistentState;
