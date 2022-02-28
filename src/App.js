import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentStep: 1,
      name: "",
      email: "",
      message: ""
    }
  }
next = () => {
  let currentStep = this.state.currentStep;
  currentStep = currentStep >= 2 ? 3: currentStep + 1;
  this.setState({
    currentStep: currentStep
  });
};
prev = () => {
  let currentStep = this.state.currentStep;
  currentStep = currentStep >= 1 ? 1 : currentStep - 1;
  this.setState({
    currentStep: currentStep
  });
};

// handing the changing
handleChange = (event) => {
  const {name, value} = event.target;
  this.setState({
    [name] : value
  });
}
handleSumbit = (event) => {
  event.preventDefault();
  const {name, email, message} = this.state;
  alert(
    `You're message details: \n 
    name: ${name} \n
    Email:${email} \n
    message:${message}
    
    `
  );
}
// previous and next button 
previousButton(){
  let currentStep = this.state.currentStep;
  if(currentStep > 1){
    return (
      <button 
      className="btn btn-secondary" 
      type="button" 
      onClick={this.prev}>
        previous
      </button>
    )
  } 
  return null;
 }

 nextButton(){
   let currentStep =this.state.currentStep;
   if(currentStep <3){
     return(
       <button
       className="btn btn-primary"
       type="button"
       onClick={this.next}
       >
         Next
       </button>
     )
   }
   return null;
 }
 
  render() {
    
    return (
      <div className="contact">
        <h1>React Contact page</h1>
        <p>Step {this.state.currentStep}</p>
        <form onSubmit={this.handleSumbit} >
          <Step1 currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          email={this.state.name}
          />
          <Step2 currentStep={this.state.currentStep}
           handleChange={this.handleChange}
           email={this.state.email}/>
          <Step3 currentStep={this.state.currentStep}
           handleChange={this.handleChange}
           email={this.state.message}
          />
          {this.previousButton()}
          {this.nextButton()}
         
        </form>
      </div>
    )
  }

}
//  previous step
 
// steps in contact page 
function Step1(props){
  if(props.currentStep !== 1){
    return null;
  }
  return (
    <div className="form-group">
    <label htmlFor="name">Name</label>
    <input
    className="form-control"
    id="name"
    name="name"
    type="text"
    placeholder="Enter you're name"
    value={props.name}
    onChange={props.handleChange}
    />
  </div> 
  );
}
function Step2(props){
  if(props.currentStep !== 2){
    return null;
  }
  return(  <div className="form-group">
  <label htmlFor="name">Email</label>
  <input
  className="form-control"
  id="email"
  name="email"
  type="text"
  placeholder="Enter you're email"
  value={props.email}
  onChange={props.handleChange}
  />
</div>
  );
}
function Step3(props){
  if(props.currentStep !== 3){
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="textbox">Message</label>
        <input
        className="form-control"
        id="message"
        name="message"
        type="text"
        placeholder="Enter you're message"
        value={props.message}
        onChange={props.handleChange}
        />
        <button
        className="btn btn-success float-right"
        >Submit</button>
      </div>
    </React.Fragment>
  );
}
