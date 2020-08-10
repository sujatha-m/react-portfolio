
  
import React from "react"
import Col from "../Col";

function Project(props) {

    console.log("image", props.imgPath);
  return (
    <Col size="md-4 sm-12">
      <div className="button-container">
        <h4 style={{color: "#87d662"}}> {props.projectName} </h4>
        <p>{props.paragraph}</p>
        <img
          className="img-fluid portfolio-pic"
          src={props.imgPath}
          alt={props.name}
        />  
        <button
          type="button"
          className="btn btn-outline-dark btn-lg btn-block deployedBtn"
          onClick={() => window.open(props.linkDeployed)}
        >
          {props.name} (Deployed)
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg btn-block githubBtn"
          onClick={() => window.open(props.linkGithub)}
        >
          {props.name} (Github)
        </button>
      </div>
    </Col>
  );
}



export default Project;