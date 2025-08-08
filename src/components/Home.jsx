import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPaste } from '../redux/pasteSlice';
import { updateToPaste } from '../redux/pasteSlice';


const Home = () => {

  const [title,setTitle] = useState("");
  const [value,setValue] = useState("");
  const [searchParams,setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();


  function createPaste(){
    const paste = {
      title: title,
      content: value,
      createdAt: new Date().toDateString(),
      _id: pasteId || crypto.randomUUID()
    }
    if(pasteId){
        dispatch(updateToPaste(paste));
    }else{
      dispatch(addToPaste(paste));
    }

    // After creation or updation 
    setTitle('');
    setValue('');
  }


  return (
    <div>
      <div>
      <input 
      type="text" 
      placeholder='Enter Title'
      className='rounded-2xl mt-5 p-2'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <button 
      onClick={createPaste}
      className='rounded-2xl ml-2'>
      
      {
        pasteId ? "Update Paste" : "Create Paste"
      }
      </button>
      </div>
      

      <textarea 
      placeholder='Enter Content'
      className='mt-6 rounded-2xl min-w-[700px] p-2'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      rows={23}
      >

      </textarea>
    </div>
  )
}

export default Home


// http://localhost:5173/?pasteId=abc123