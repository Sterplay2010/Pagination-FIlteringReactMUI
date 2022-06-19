import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchExample = ({ filtering }) => {
  // Este es un hook que cambia mientras escribes
  const [word,setWord] = React.useState("")

  // Este useEffect se ejecuta cada vez que la variable word cambia al escribir
  // Recordar que filtering es un funcion que esta escrita en el componente padre
  // solo se la estoy pasando a este componente para ya no hacer mas lineas de codigo
  React.useEffect(()=>{
    filtering(word);
  },[word])

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: "#1976D2",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Buscar..."
        onChange={(e) => {setWord(e.target.value)}}
        inputProps={{ "aria-label": "buscar ejemplo" }}
      />
      <IconButton sx={{ p: "10px", color: "white" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchExample;
