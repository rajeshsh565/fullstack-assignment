import { useState } from "react";
import customFetch from "../utils/customFetch";
import { toast } from 'react-toastify';

const SearchForm = ({setSearchCard}) => {
  const [searchText, setSearchText] = useState('');
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const searchStr = searchText.trim();
    if(!searchStr) {
      return toast.warning("Title can not be Empty!")
    }
    try {
      const {data} = await customFetch.get(`/cards/${searchText}`);
      setSearchCard(data.card);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="bg-violet-100 h-72 w-full flex flex-col items-center justify-center">
        <h3 className="text-5xl md:text-7xl font-semibold">How can we help?</h3>
        <div className="md:w-1/3 mt-4 md:mt-8 flex justify-center">
        <input placeholder="Search" className="px-2 h-10 border border-black border-r-0 w-3/4" value={searchText} onChange={(e)=>setSearchText(e.target.value)} required></input>
        <button className="bg-white h-10 w-10 border border-black border-s-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mx-auto" stroke="currentColor" strokeWidth="1.5">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
</svg>
</button>
        </div>
    </form>
  )
}
export default SearchForm;