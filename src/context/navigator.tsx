import { createContext, ReactNode, useContext, useState } from "react";

const NavContext = createContext<{
  offset: number;
  setOffset: (offset: number) => void;
}>({
  offset: 0,
  setOffset: () => {},
});

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [offset, setOffset] = useState(0);
  const value = { offset, setOffset };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNav = () => {
  return useContext(NavContext);
};
