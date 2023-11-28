import EmojiData from "./EmojiData.js";
import './App.css';
import {useState,useEffect} from "react";

function App() {

const [search,setSearch]=useState("");
const [data,setData]=useState([]);
  function update(event){
setSearch(event.target.value);
  }  
  useEffect(()=>{
const data=EmojiData.filter(emoji => emoji.name.toLowerCase().includes(search.toLowerCase()));
setData(data);
  },[search])
  return (
   <div className="outer">
    <center>
      <h1 className="emoji-search">emoji search</h1>
      <input type="text" name="search" value={search} onChange={update}/>
    </center>
    {data.map(emoji=>
    <div class="card">
      <div class="card-body">
        {emoji.symbol} {emoji.name}
      </div>
    </div>
    )}
   </div>
  ); 
    }
export default App
