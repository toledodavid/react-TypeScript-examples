import { useForm } from '../hooks/useForm';


interface FormData {
  postal: string;
  ciudad: string;
  edad: number;
}


const Formulario2 = () => {
 
  const {formulario, handleInputChange} = useForm<FormData>({
    postal: '28400',
    ciudad: 'Coquimatlan',
    edad: 27
  });

  const {postal, ciudad, edad} = formulario;

  return(
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Codigo postal:</label>
        <input type="text"
              className="form-control"
              name="postal"
              value={postal}
              onChange={handleInputChange}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input type="text"
              className="form-control"
              name="ciudad"
              value={ciudad}
              onChange={handleInputChange}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input type="number"
              className="form-control"
              name="edad"
              value={edad}
              onChange={handleInputChange}/>
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
}

export default Formulario2;