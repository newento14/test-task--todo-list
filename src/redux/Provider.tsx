import {Provider} from "react-redux";
import {store} from "./store.ts";

interface ProviderProps {
  children: React.ReactNode
}

export const Providers: React.FC<ProviderProps> = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}