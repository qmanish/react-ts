import MyRouter from './routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

function App() {
  return (
    <>
      <MyRouter />
      <ToastContainer autoClose={1000} closeButton={false} hideProgressBar />
    </>
  );
}

export default App;
