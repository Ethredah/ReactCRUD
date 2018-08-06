## REACT CRUD APPLICATION

#### Using API Endpoints, this application demonstrates how to use make http requests (GET, POST, etc..) using axios.



*The app uses sample user data for demonstration*

_Feel free to use different data for your application_

##### Sample Users.js Code 

```jsx

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



```


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
