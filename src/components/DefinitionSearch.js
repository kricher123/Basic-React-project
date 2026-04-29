import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function DefinitionSearch(){
    const [word, setWord] = useState('');
    const navigate = useNavigate();
    return(
        <div className = "bg-gray-300 min-h-screen px-3 py-3">
            <form className = "flex justify-center space-x-2 max-w-[300px]"
            onSubmit={()=>
                navigate('/definition/' + word, {replace : true})
            }
            >
                <input placeholder="Type Here" className="shrink min-w-0 px-2 rounded py-1" type = 'text' onChange={(e)=>{
                    setWord(e.target.value);
                }}>
                </input>
                <button className = "bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded">Search</button>
            </form>
        </div>
    );
}