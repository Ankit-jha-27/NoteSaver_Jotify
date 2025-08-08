import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const[search,setSearch] = useState('');

  const dispatch = useDispatch();

  const filteredData = pastes.filter(
    (paste) => 
      paste.title.toLowerCase().includes(search.toLowerCase())
  )

  function handleDelete(pasteId){
      dispatch(removeFromPaste(pasteId))
  }

  function handleCopy(paste){
    navigator.clipboard.writeText(paste.content);
    toast.success("Copied");
  }

  return (
    <div>
      <input 
      type="search" 
      placeholder='Search here'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='mt-5 p-1.5 rounded-2xl'
      />

      <div className='flex flex-col'>

        {
            filteredData.length > 0 && 
            filteredData.map((paste) =>
            {
              return(
                <div className='border mt-5'> 
                  <div>{paste.title}</div>
                  <div>{paste.content}</div>
                  <div className='flex gap-8 place-content-evenly p-3'>
                    <button>Edit</button>
                    <button>View</button>
                    <button onClick={() => handleDelete(paste)}>Delete</button>
                    <button onClick={() => handleCopy(paste)}>Copy</button>
                  </div>
                  <div>{paste.createdAt}</div>
                </div>
              ) 
            }
             
            )
        }
          

          
      </div>
    </div>
  )
}

export default Pastes