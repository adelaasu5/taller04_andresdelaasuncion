import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../Componentes/Contenedor/Inicio";
import { CancionCrear } from "../../Componentes/Canciones/CancionCrear";
import { CancionListar } from "../../Componentes/Canciones/CancionListar";
import { CancionesActualizar } from "../../Componentes/Canciones/CancionActualizar";
import { CancionAdmin } from "../../Componentes/Canciones/CancionAdmin";
import { NoEncontrado } from "../../Componentes/Contenedor/NoEncontrado";


export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/cancre" element={< CancionCrear/>}/>
            <Route path="/canlis" element={< CancionListar/>}/>
            <Route path="/canadmin" element={< CancionAdmin/>}/>

            <Route path="/canactu" element={< CancionesActualizar/>}/>

            <Route path="*" element={< NoEncontrado/>}/>


        </Routes>
    )
}