import{Button,Modal} from'react-bootstrap';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Modale extends React.Component {
  constructor()
  {
    super()
    this.state={
      show:false
    }
  } 
  handleModal()
  {
    this.setState({show:!this.state.show})
  }

  render(){
    return (
    <div>
      <Button onClick={()=>{this.handleModal()}}>Enter</Button>
      <Modal show={this.state.show}>
        <Modal.Header>Enter password</Modal.Header>
        <Modal.Body>
        <form> 
            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Password"
                />
            </div>
        </form> 

        <button onClick={()=>{this.handleModal()}} class="btn btn-success mt-4">
            save
          </button>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{this.handleModal()}}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )}
}

export default Modale;