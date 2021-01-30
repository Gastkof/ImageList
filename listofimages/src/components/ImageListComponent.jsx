import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import './style.css';
//import Loader from 'react-loaders'

//let loader = <Loader type="pacman" />
// let obj = 
// let list =[];

//  for(let i in obj){
//      console.log(i);
//         list.push(i);

//  }
//const [show, setShow] = useState(false);

//const handleClose = () => setShow(false);
//const handleShow = () => setShow(true);

class  ImageList extends Component {

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
    

        this.handleShowDialog = this.handleShowDialog.bind(this);

        this.state =  
     { 
       loader:true,
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
    
    



     handleShowDialog =(t)=>  {
        this.setState({ isOpen: !this.state.isOpen,
            selectedImage :t
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

  
       

        //let imageUrlId = this.state.imageUrlId.bind()  ;
     
        // React.createElement('h1')
        return <React.Fragment>

    
          
                
                <span  className={this.getBadgeClasses()}>{this.formatCount() } </span>

                    <ul  style={{ listStyle: 'none'}}>

                    {this.state.imageUrl.map((t) => <li key={t.id.toString() }  onClick= {
                       ()=> this.handleShowDialog(t.download_url.toString())}>
                   {  
                   <img  className="click"  key={ t.id.toString(t) }  style={{width:400 }} src={t.download_url.toString()} alt ={t.author.toString()}/> }</li>)}
                      

                    </ul>

            <button className ="btn btn-secondary btn-sm">Increment </button>

            <Modal
             onClick={this.handleShowDialog}
           ///    className="modal"

              // visible={this.state.visible}
             //  width="90%"
              // height="90%"
               effect="fadeInUp"
               
             //  onClickAway={this.handleShowDialog()}
              show={this.state.isOpen} 
          //   handleClose={}
        
          //      size="lg"
             //   aria-labelledby="contained-modal-title-vcenter"
             animation={true}
             onHide={this.handleShowDialog}
                centered
                style ={{
                  backgroundColor:'rgba(255,255,255,0.5)',
                }}
              >
     
            

                   <img style={{width:'600px',height:'600px',
                   left: '0',
                   top: '0',
                   backgroundColor: 'rgba(0, 0, 0, 0.8)',
                   touchaction: 'none',
                   overflow: 'hidden',
                  // opacity: '1',
                  // transition: opacity '225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            
                   right: '0',
                   bottom: '0',
                   // eslint-disable-next-line no-dupe-keys
                   touchaction: 'none',
                }} src={this.state.selectedImage} alt=""/>


                
         

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
 


export default ImageList ;