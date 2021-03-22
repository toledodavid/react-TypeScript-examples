import { ChangeEvent, useState } from 'react';


const Formulario = () => {

  const [formulario, setFormulario] = useState({
    email: '',
    name: ''
  });

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    
    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  return(
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" onChange={handleInputChange}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input type="text" className="form-control" name="nombre" onChange={handleInputChange}/>
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
}


export default Formulario;