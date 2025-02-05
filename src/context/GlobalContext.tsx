import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
interface GlobalContextProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: Dispatch<SetStateAction<boolean>>;
  targetBlogDiv: MutableRefObject<HTMLDivElement | null>; // Allowing a ref
  targetAboutDiv: MutableRefObject<HTMLDivElement | null>; // Allowing a ref
  targetSupportDiv: MutableRefObject<HTMLDivElement | null>; // Allowing a ref
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
  const blogRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const supportRef = useRef<HTMLDivElement | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        isMobileNavOpen,
        setIsMobileNavOpen,
        targetBlogDiv: blogRef,
        targetAboutDiv: aboutRef,
        targetSupportDiv: supportRef,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, useGlobalContext };
