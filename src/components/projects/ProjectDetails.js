import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
       <div className="card-content ">
            <span className="card-title">Project Title {id}</span>
            <p>Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once they have finished scrolling through the current page or are looking for additional information about your website</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
            <p>Posted by the Ethio Plan </p>
            <p className="grey-text">Posted Date 10/12/2018 </p>
        </div>
    </div>
  )
}

export default ProjectDetails
