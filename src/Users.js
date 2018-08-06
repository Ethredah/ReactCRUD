import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './bootstrap.css';
import API from './api';


import Modal from './Modal';

 class Users extends React.Component {

 	constructor(props)
 	{
 		super(props);
 		this.state = {
      users: [],
      showmodal: false,
      name:'',
      email:'',
      id:''
    }

    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // this.handleDelete = this.handleDelete.bind(this);
	
	 	}

	 showModal = () => {
	 	this.setState({
	 		showmodal:true
	 	});
	 	// console.log(this.state.showmodal);
	 };

	 hideModal = () => {
	 	this.setState({
	 		showmodal:false
	 	});
	 }


 	componentDidMount()
 	{
 		// Make Http Request with Axios
 		axios.get(this.apiUrl)
 		.then((res) => {
 			// Set State with results
 			const users = res.data;

        	this.setState({ users });

 		});

 	}

 	handleNameChange = event => {
 		this.setState({name: event.target.value});
 	}

 	handleEmailChange = event =>{
 		this.setState({email: event.target.value});
 	}

 	 handleChange = event => {
    this.setState({ id: event.target.value });
  }

 	

    handleDelete = event => {
  event.preventDefault();

  this.setState({
  	id: event.target.value
  });

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
};

 	handleSubmit = event => {
 		event.preventDefault();

 		const user = {
 			name: this.state.name,
 			email: this.state.email
 		};

 		axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })


 	}


 	render()
 	{
 		  	

			var rows = this.state.users.map(function(user, index){
			 return <tbody>
				    <tr>
				      <th key={user.id} scope="row">{user.id}</th>
				      <td key={user.id} >{user.name}</td>
				      <td key={user.id} >{user.email}</td>

				      <td>
				      {/*onSubmit={this.handleDelete}*/}
				      {/*<input type="hidden" name="id" value={user.id}/>*/}
			          <button type="submit" onClick={() => this.handleDelete(user.id)}><img src="./bin.ico" style={{maxHeight:10, maxWidth:10}} title="Delete" /></button>
			          </td>

				    </tr>
				  </tbody>

			 });
			 	
        


 		return (


 			<div className="container">

 			<h2>Manage Users</h2>
 			<button type="button" className="btn btn-info" onClick={this.showModal} style={{float: 'right'}}>Add User</button>
		
			<Modal show={this.state.showmodal} >
	          

	          <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title">Add A New User</h5>
			      </div>
			      <div class="modal-body">
			        <p>Enter User Details Below:</p>	

			        <form onSubmit={this.handleSubmit}>

					  <div className="form-group">
					    <input type="text" class="form-control" id="Names" onChange={this.handleNameChange} aria-describedby="emailHelp" placeholder="Enter names" required />
					  </div>

					  <div className="form-group">
					    <input type="email" class="form-control" id="Email1"  onChange={this.handleEmailChange} aria-describedby="emailHelp" placeholder="Enter email" required />
					  </div>

					  <button type="submit" class="btn btn-primary">Add User</button>
					  
					</form>

			      </div>
			      <div class="modal-footer">
			        
			        <button type="button" onClick={this.hideModal} class="btn btn-secondary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>


	        </Modal>

 			<row>

 			<div className="col-10">
 			<table className="table table-bordered responsive">
			  <thead>
			    <tr>
			      <th scope="col">id</th>
			      <th scope="col">Names</th>
			      <th scope="col">email</th>
			    </tr>
			  </thead>
			  		{rows}  
			</table>
			<br/>
			  <nav aria-label="..." style={{float: 'right'}}>
			  <ul className="pagination">
			    <li className="page-item disabled">
			      <a className="page-link" href="#" tabindex="-1">Previous</a>
			    </li>
			    <li className="page-item active"><a class="page-link" href="#">1</a></li>
			    <li className="page-item">
			      <a className="page-link" href="#">2 <span class="sr-only">(current)</span></a>
			    </li>
			    <li className="page-item"><a class="page-link" href="#">3</a></li>
			    <li className="page-item">
			      <a className="page-link" href="#">Next</a>
			    </li>
			  </ul>
			</nav>
			  
			</div>

			</row>

 			</div>
 			);
 	}

}

const container = document.createElement("div");
document.body.appendChild(container);


export default Users;