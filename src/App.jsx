import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import Header from "./components/header";
import Footer from "./components/footer";

const data = [
  { id: 1, Imagen: ".//img/rm.png", Producto: "Rotomartillo", Marca: "Truper", Precio: "$2,000" },
  { id: 2, Imagen: ".//img/pint.png", Producto: "Pintura", Marca: "Berel", Precio:"$500" },
  { id: 3, Imagen: ".//img/mt.png", Producto: "Martillo", Marca: "Truper", Precio:"$110" },
  { id: 4, Imagen: ".//img/pdr.png", Producto: "Puntas destornillador", Marca: "Truper", Precio:"$300" },
  { id: 5, Imagen: ".//img/fl.png", Producto: "Foco Led", Marca: "Ecosmart", Precio:"$200"},
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Imagen: "",
      Producto: "",
      Precio: "",
      Marca: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].Producto = dato.Producto;
        arreglo[contador].Marca = dato.Marca;
        arreglo[contador].Precio = dato.Precio;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Header/>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>
                    {dato.Imagen && <img src={dato.Imagen} alt={`Imagen de ${dato.Producto}`} className="img-fluid max-width-100" style={{ maxWidth: '200px', height: 'auto' }}  />}
      
                  </td>
                  <td>{dato.Producto}</td>
                  <td>{dato.Marca}</td>
                  <td>{dato.Precio}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Footer/>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="Producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Producto}
              />
            </FormGroup>

            <FormGroup>
              <label>Precio</label>
              <input
                className="form-control"
                name="Precio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Precio}  
              />

            </FormGroup>
            
            <FormGroup>
              <label>
                Marca: 
              </label>
              <input
                className="form-control"
                name="Marca"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Marca}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Añadir producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Producto: 
              </label>
              <input
                className="form-control"
                name="Producto"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Marca: 
              </label>
              <input
                className="form-control"
                name="Marca"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="Precio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
