import * as React from "react";
import { Grid } from "@mui/material";
import { DATA_PER_PAGE, dataInfo } from "../Utilities/DataExample";
import CardExample from "./CardExample";
import SearchExample from "./SearchExample";
import Pagination from "@mui/material/Pagination";

const GridExample = () => {
  // Este indica la pagina en la que estas actualmente
  const [page, setPage] = React.useState(1);
  // El total de paginas para el paginador
  const [totalPages, setTotalPages] = React.useState(
    Math.ceil(dataInfo.length / DATA_PER_PAGE)
  );

  // Este es el index de donde elige los elementos de la data
  const startIndex = (page - 1) * DATA_PER_PAGE;
  // Esta es la data seleccionada de acuerdo al paginador
  const [selectData, setSelectData] = React.useState(
    dataInfo.slice(startIndex, startIndex + DATA_PER_PAGE)
  );

  // El hook que recibe la lista seleccionada para ser filtrada
  const [filter, setFilter] = React.useState(selectData);

  const handleChange = (event, value) => {
    console.log(value)
    setPage(value);
  };

  // Con esta funcion filtras por cualquier tipo de nombre de la data
  // en mi caso lo ando haciendo por name, pero pueden cambiarle por 
  // algun atributo del arreglo como el email
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#examples
  const filterItems = (query) => {
    setFilter(
      selectData.filter(
        (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  // Este useEffect hace que cambien las paginas cuando das clic al paginador
  React.useEffect(() => {
    setFilter(dataInfo.slice(startIndex, startIndex + DATA_PER_PAGE));
  }, [page]);

  return (
    <>
      <Grid
        container
        direction="col"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 3 }}
      >
        <Grid item sx={12}>
          <SearchExample filtering={filterItems} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {filter.map((e, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <CardExample object={e}/>
            </Grid>
          );
        })}
      </Grid>

      <Grid
        container
        direction="col"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 5 }}
      >
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChange}
        />
      </Grid>
    </>
  );
};

export default GridExample;
