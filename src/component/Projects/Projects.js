import React from 'react';
import './Projects.css';
import creative from '../../images/projectImage/creative.png';
import travel from '../../images/projectImage/Voluanter.png';
import volunteer from '../../images/projectImage/travel.png';
import hotGadgets from '../../images/projectImage/hotGadgets.JPG';
import pandaCommerce from '../../images/projectImage/pandaCommerce.JPG';
import Project from './Project';

const Projects = () => {

    const allProjects=[
        {id:'01',img:""+creative, title:"Creative Agency", description:"A fullstack creative agency website.",
         gitHub:"https://github.com/rabbism/creative-agency-clinte", liveLink:"https://creative-agency-200b7.web.app/"},

         {id:'02',img:""+volunteer, title:"Volunteer-Network", description:"A fullstack hot volunteer network  website.",
         gitHub:"https://github.com/rabbism/volunteer-network-client", liveLink:"https://volunteer-network-5b947.web.app/"},

         {id:'03',img:""+travel, title:"Travel Guru", description:"A fullstack travel guru website.",
         gitHub:"https://github.com/rabbism/travel-guru", liveLink:"https://distracted-varahamihira-1c0a00.netlify.app/"},

         {id:'04',img:""+hotGadgets, title:"Hot Gatgets", description:"A front-end E-commerce website.",
         gitHub:"https://github.com/rabbism/hot-gadget", liveLink:"https://rabbism.github.io/hot-gadget/"},

         {id:'05',img:""+pandaCommerce, title:"Panda Commerce", description:"A front-end Panda Commerce website.",
         gitHub:"https://github.com/rabbism/panda-commerce-site", liveLink:"https://rabbism.github.io/panda-commerce-site/"}
    ]


    return (
        <div id="project-section" className="container skill">
            <div  className="back-line d-flex align-items-center skill-title">
                <div className="front-box d-flex align-items-center">
                    <p className="d-flex align-items-center">Projects</p>
                </div>
            </div>

            <div className="row">
                {
                    allProjects.map(project=><Project key={project.id} project={project} ></Project>)
                }
            </div>

        </div>
    );
};

export default Projects;