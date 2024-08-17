import abstract_icon from "../assets/abstract_icon.jpg";
import {toast} from "react-toastify";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 w-full bg-black text-white px-8">
      <div className="flex items-center">
          <img src={abstract_icon} className="w-8 rounded-lg"></img>
          <p className="ms-1 font-bold">Abstract</p>
          <p className="mx-2">|</p>
        <p>Help Center</p>
      </div>
      <button className="px-2 py-1 bg-stone-800 border border-white rounded-md" onClick={()=>toast("You clicked a BUTTON!!!")}>Submit a request</button>
    </nav>
  )
}
export default Navbar