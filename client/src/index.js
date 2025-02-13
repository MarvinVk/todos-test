import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { TodoContextProvider } from './context/todos';

const queryClient = new QueryClient();

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <QueryClientProvider client={queryClient}>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </QueryClientProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
