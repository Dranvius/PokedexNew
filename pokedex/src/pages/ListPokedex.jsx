import Axios from 'axios';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';


export const ListPokedex = () =>{
 

    let [datos, setDatos] = useState([]);

    useEffect(() =>{

        const tenerDATOS = async() => {

            try {
                let pokemon = await Axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');

                setDatos(pokemon.data.results);
            } catch (error) {
                console.log(error)
            }


        }

        tenerDATOS();

    },[])

    console.log(datos)

    
    return(
        <>
    <div id='presentacion'>
    <h1 style={{color:"white",height:"50px"}}>POKEDEX</h1>
    </div>
        

        <table className="table" >
          <thead className="bg-danger">
            <tr>
              <td style={{color:"white"}}>ID</td>
              <td scope="col" style={{color:"white"}}>Nombre</td>
              <td style={{color:"white"}}>Ver pokemon</td>
              <td></td>
              

            </tr>
          </thead>
          <tbody>
     
            {datos.map((valor,key) =>(
                <tr key={key+1} >
                <th>{key+1}</th>
                <td>{valor.name.toUpperCase()}</td>
                
                <td>                        
                    <Link className="btn btn-danger" to={`/profile/${valor.url.substring((valor.url.length-1) - 2)}`} style={{color:'white'}}>
                          Ver pokemon
                    </Link>
                    </td>
                    <td><img src="../src/img/pokeball.png" alt="" width="50px" height="50px" /></td>
                </tr>
            ))}
          </tbody>
        </table>
        
        </>
    )


}