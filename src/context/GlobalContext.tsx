import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
interface GlobalContextProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>;
}
interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ isMobileNavOpen, setIsMobileNavOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, useGlobalContext };
