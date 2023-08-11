'use client'

import {useState, useEffect} from 'react';
import CardTopCitiesNquality from './CardTopCitiesNquality';

const GetTopCitiesNquality = () => {


const [data, setData] = useState([]);

useEffect (()=> {
fetch('https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?conformite_limites_bact_prelevement=N&conformite_limites_pc_prelevement=N')
    .then((response) => response.json())
    .then((res) => setData(res.data))
    .catch(() => console.error(err))

}, [])


    return (
        <>
        <ul className='flex flex-wrap max-w-full w-3/4 mx-auto '>
        {data
        .map((el) => {
            return(
              
                <CardTopCitiesNquality key={el.id} id={el.id} nom_commune={el.nom_commune} nom_departement={el.nom_departement} />

            )

        })

           
        }

    </ul>
        
        </>
        
        
    );
};

export default GetTopCitiesNquality;