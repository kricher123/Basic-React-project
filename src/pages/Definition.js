import {useEffect, useState} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import NotFound from '../components/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';

export default function Definition(){

    const [meanings, setMeanings] = useState([]);
    const [notFound, setNotFound] = useState(false);
    let {search} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+search)
        .then((response)=>{
            if(response.status=="404"){
                setNotFound(true);
            }else{         
                return response.json();
            }
        })
        .then((data)=>{
            if(data && data.length>0){
                setMeanings(data[0].meanings);
            }else{
                setNotFound(true);
        }
        }).catch((error) => {
            console.error(error);
        });
    },
    [search, navigate]
    );

    if(notFound === true){
        return (
            <div className = "bg-gray-300 min-h-screen">
                <>
                    <Link to='Dictionary'>Search another word</Link>
                    <NotFound/>
                </>
            </div>
            
        );
    }

    return(
        <div className ="bg-gray-300 min-h-screen">
            <h1>Definition</h1>
            {meanings ? (
                <>
                    {meanings.map((meaning,index)=>{
                        return(
                            <p className="px-2" key={index}>{meaning.partOfSpeech}:{meaning.definitions[0].definition}</p>
                        );
                    })
                    }
                    <p>Search Again:</p>
                    <DefinitionSearch/>
                </>
            ) : (
                <p>no definition found for "{search}"</p>
            )}
        </div>
    );
}