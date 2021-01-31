import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import './style.css';


class  ImageList extends Component {


    //load data from JSON from the URL 
    componentDidMount() {
        fetch('https://picsum.photos/v2/list')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ imageUrl: json
                   });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }

        //the proporties of the coponent
      constructor(props) {
          super(props);
      

          this.handleShowDialog = this.handleShowDialog.bind(this);
  //the state proprties
          this.state =  
      { 
        loader:true,
          imageUrl: [],
          isOpen: false,
        // imageUrlId:[],
          selectedImage:""

      };

        }
  

//to future work
      imageUrlId(e) {
        let imageUrlId = this.state.imageUrlId;
        if (e.currentTarget.dataset.id === 0 || e.currentTarget.dataset.id) {
            imageUrlId = e.currentTarget.dataset.id;
        }
        this.setState({ imageUrlId });
      }
    
    


//handle the show of the modal as dialog
     handleShowDialog =(t)=>  {
        this.setState({ isOpen: !this.state.isOpen,
            selectedImage :t
         });
        console.log(this.state.isOpen);

        console.log("cliked");
      };
    

      //function that open the image modal by click on the image list
      modalOpen(t) {
        this.setState({ isOpen: true,
            selectedImage :t });
      }
    //function that close the image modal by click on the image or the background
      modalClose() {
        this.setState({
          isOpen: false
        });
      }
    
//the render function of what the web page will show the user
    render() { 
        let imageUrl = this.state.imageUrl;            
        let ID = []
        for(let i in this.state.imageUrl ){
            ID.push(imageUrl[i].id); 
        }

        return <React.Fragment>



                    <ul  style={{ listStyle: 'none'}}>

                    {this.state.imageUrl.map((t) => <li key={t.id.toString() }  onClick= {
                       ()=> this.handleShowDialog(t.download_url.toString())}>
                   {  
                   <img  className="click"  key={ t.id.toString(t) }  style={{width:400 }} src={t.download_url.toString()} alt ={t.author.toString()}/> }</li>)}
                      

                    </ul>

            <Modal
             onClick={this.handleShowDialog}
               effect="fadeInUp"               
               show={this.state.isOpen} 
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
                   right: '0',
                   bottom: '0',
                }} src={this.state.selectedImage} alt=""/>

              </Modal>

        </React.Fragment>
        ;
    }

      
}
 


export default ImageList ;