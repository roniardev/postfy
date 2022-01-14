import Routes from "routes/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "stores";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Provider>
  );
}
