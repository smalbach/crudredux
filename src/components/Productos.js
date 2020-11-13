import React, { Fragment, useEffect } from "react";
import Producto from "./Producto";
import Swal from "sweetalert2";

//REDUX
import { obtenerProductosAction } from "../actions/productoActions";
import { useDispatch, useSelector } from "react-redux";

const Productos = () => {
  const dispatch = useDispatch();

  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const productos = useSelector((state) => state.productos.productos);

  useEffect(() => {
    showLoading();

    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();

    // Consultar la api

    // eslint-disable-next-line
  }, []);

  const showLoading = function () {
    Swal.fire({
      title: "Cargando informacion",
      allowEscapeKey: false,
      allowOutsideClick: false,
      background: "#fff",
      showConfirmButton: false,
      onOpen: () => {
        Swal.showLoading();
      },

      // timer: 3000,
      // timerProgressBar: true
    });
  };

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : (
        Swal.close()
      )}

      {cargando ? <p className="text-center">Cargando....</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
