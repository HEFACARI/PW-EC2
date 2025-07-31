/* 
    AUTOR: HECTOR FABIO CAEZ RIVAS
    ALIAS: HEFACARI
    FECHA: 14/07/2025
    DESCRIPCION: - Define una forma estandarizada de enviar solicitudes HTTP al backend, especialmente para pagos.
    - Incluye automáticamente la URL base y un header de autenticación.
    - Es útil para centralizar y reutilizar configuraciones en un proyecto con axios
*/

import axios from 'axios'

//Crea y exporta una instancia personalizada de axios
export const makePaymentRequest = axios.create({ 
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
}); 