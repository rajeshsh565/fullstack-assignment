import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import customFetch from "./utils/customFetch";
import Card from "./components/Card";
import FooterComp from "./components/FooterComp";
import {toast} from "react-toastify";

const App = () => {
  const [cards, setCards] = useState();
  const setSearchCard = (card) => {
    setCards([card]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await customFetch.get("/cards");
        setCards(data.cards);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.msg);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <SearchForm setSearchCard={setSearchCard}/>
      <div className="min-h-64 py-8 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 place-items-center relative">
        {!cards ? (
          <div className="loading flex gap-2 absolute top-8 left-8">
            <div className="item-1 h-2 w-2 bg-black rounded-full"></div>
            <div className="item-2 h-2 w-2 bg-black rounded-full"></div>
            <div className="item-3 h-2 w-2 bg-black rounded-full"></div>
          </div>
        ) : (
          (cards.length==0) ? <div className="absolute top-8 left-8 text-5xl">No Cards Found!!!</div> : cards?.map((data)=>{
            const {title, description, _id} = data;
            return <Card description={description} title={title} key={_id}></Card>
          })
        )}
      </div>
      <FooterComp/>
    </div>
  );
};
export default App;
