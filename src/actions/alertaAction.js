import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

//MUESTRA UNA ALERTA

export function mostrarAlerta(alerta) {
  return (dispatch) => {
    dispatch(mostrarAlertaError(alerta));
    setTimeout(() => {
      dispatch(ocultarAlerta());
    }, 5000);
  };
}

export function ocultarAlertaAction(alerta) {
  return (dispatch) => {
    dispatch(ocultarAlerta());
  };
}

const mostrarAlertaError = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
});

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
});
