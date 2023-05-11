import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import  Axios  from "axios";

export const Pokedex = () => {

    
    let param = useParams();

    let indice = param.index;


  let [data, setDatos] = useState([]);
  let [load,setLoad] = useState(true);

  const peticion = async(indice) =>{

    console.log(indice);

    return await Axios.get(`https://pokeapi.co/api/v2/pokemon/${indice}`)

  }



  useEffect(() =>{

    const tenerDATOS = async() => {

        let dats = await peticion(indice);
        
        setDatos(dats.data);
        console.log(dats);
        setLoad(false);

    }

    tenerDATOS();

},[])


  return (
    <>

    {load ? ( <> <h1>cargando</h1> </>):(<>
    <div className="Pokedex">
    <div className="card" style={{borderRadius:"50%", display:"flex",flexDirection:"row"}}>
      <img
        
        src={data.sprites.other.dream_world.front_default}
        alt="Card image cap"
      />

    </div>

    <div className='textArea'>
        <h1 style={{fontSize:"70px"}}>{data.name.toUpperCase()}</h1>
        <p> Tipo : {data.types[0].type.name.toUpperCase()} </p>
        <p> Peso : {data.weight} LB </p>

      </div>


    </div>

    <div className='moves'>

        <h1>MOVIMIENTOS :</h1>




    <table className="table table-dark  table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td scope="col">Movimientos</td>
              <td scope="col">Aprendido en el nivel </td>
              
              

            </tr>
          </thead>
          <tbody>
     
          {data.moves.map((valor,key) =>(
             <tr key={key+1} >
             <th>{key+1}</th>
             <td>{valor.move.name}</td>
             <td>LVL : {valor.version_group_details[0].level_learned_at}</td>
             </tr>
            
        
        ))}
          </tbody>
        </table>

    </div>
    
  </>)}
  </>
  )
};
