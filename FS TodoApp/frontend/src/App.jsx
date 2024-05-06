import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import './App.css'
import { Outlet } from 'react-router-dom';
import TodoItemsProvider from './store/todo-items-store';



function App() {

  return (
    <>
      <TodoItemsProvider>
        <div className="app-container">
          <SideBar></SideBar>
          <div className="content">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
        </div>
      </TodoItemsProvider>

    </>
  )
}

export default App
