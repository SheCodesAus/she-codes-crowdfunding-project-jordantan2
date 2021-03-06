import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PledgeForm from "../components/PledgeForm/PledgeForm"

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();

    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    .then((results) => {
    return results.json();
    })
    .then((data) => {
    console.log(data)
    setProjectData(data);
    });
}, []);

    return (
        <div>
            <h2>{projectData.title}</h2>
            <h3>{projectData.description}</h3>
            <h3>Created at: {projectData.created_at}</h3>
            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
            <h3>Pledges: none</h3>
            {/* <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul> */}
            {/* <PledgeForm /> */}
        </div>
    );
}

export default ProjectPage;