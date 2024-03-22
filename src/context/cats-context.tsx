import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

type CatsContextType = {
  cats: Cat[];
  create: () => void;
  update: () => void;
  remove: (id: Cat["id"]) => void;
};

type CatsContextProviderProps = {
  children: ReactNode;
};

const INITIAL_CONTEXT = {
  cats: [],
  create: () => {},
  update: () => {},
  remove: () => {}
} satisfies CatsContextType;

// create context
const CatsContext = createContext<CatsContextType>(INITIAL_CONTEXT);

// provide context
export const CatsContextProvider = ({ children }: CatsContextProviderProps) => {
  const [cats, setCats] = useState<Cat[]>([]);

  // to prevent refetching every time this component re-render
  useEffect(() => {
    const getCats = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const data: Cat[] = await response.json();

      setCats(data);
    };

    getCats();
  }, []);

  const create = () => {
    // create new one
  };
  const update = () => {
    // update existing one
  };
  const remove = (id: Cat["id"]) => {
    // remove existing one
    setCats((prevState) => {
      return prevState.filter((cat) => cat.id !== id);
    });
  };

  return (
    <CatsContext.Provider value={{ cats, create, remove, update }}>
      {children}
    </CatsContext.Provider>
  );
};

// use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useCatsContext = () => useContext(CatsContext);
