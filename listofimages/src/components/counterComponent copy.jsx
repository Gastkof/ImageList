import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

// let obj = 
// let list =[];

//  for(let i in obj){
//      console.log(i);
//         list.push(i);

//  }
//const [show, setShow] = useState(false);

//const handleClose = () => setShow(false);
//const handleShow = () => setShow(true);

class  Counter extends Component {

    componentDidMount() {
        fetch('https://picsum.photos/v2/list')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ imageUrl: json,
                imageUrlId: json.id   });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }


    constructor(props) {
        super(props);
    
        this.state =
     { 
        imageUrl: [],
        isOpen: false,
        imageUrlId:[],
        selectedImage:""

     };
     //this.selectedImage = this.imageUrlId.bind(this);

      }
 


      imageUrlId(e) {
        let imageUrlId = this.state.imageUrlId;
        if (e.currentTarget.dataset.id === 0 || e.currentTarget.dataset.id) {
            imageUrlId = e.currentTarget.dataset.id;
        }
        this.setState({ imageUrlId });
      }
    
    



     handleShowDialog =()=>  {
        this.setState({ isOpen: !this.state.isOpen
         });
        console.log(this.state.isOpen);

        console.log("cliked");
      };
    
      modalOpen(t) {
        this.setState({ isOpen: true,
            selectedImage :t });
      }
    
      modalClose() {
        this.setState({
          isOpen: false
        });
      }
    


     styles = {

        fontSize: 50,
        fontWeight:"bold"
        
     }

 
    //  openModal = () => this.setState({ isOpen: true });
    //  closeModal = () => this.setState({ isOpen: false });

    render() { 
        let imageUrl = this.state.imageUrl;            
        let ID = []
        for(let i in this.state.imageUrl ){
            ID.push(imageUrl[i].id); 
        }

    //    console.log(ID);

    

       

        //let imageUrlId = this.state.imageUrlId.bind()  ;
     
        // React.createElement('h1')
        return <React.Fragment>

                <span  className={this.getBadgeClasses()}>{this.formatCount() } </span>

                    <ul  style={{ listStyle: 'none'}}>

                    {this.state.imageUrl.map((t) => <li key={t.id.toString() }  onClick= {
                        this.handleShowDialog}>
                    <img  key={ t.id.toString() }  style={{width:400 }} src={t.download_url.toString()} alt ={t.author.toString()}/> </li>)}
                      

                    </ul>

            <button className ="btn btn-secondary btn-sm">Increment </button>

            <Modal
               
              show={this.state.isOpen} 
             handleClose={this.handleShowDialog}
        
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header >
                  <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
 
                   <img src={this.state.selectedImage} alt=""/>

                   <Button onClick={this.handleShowDialog}></Button>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>

        </React.Fragment>
        ;
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const{ count} =this.state;
            return count === 0? 'Zero'  :count; 

        }


     
       

}
 
export default Counter ;