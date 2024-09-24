import React from 'react'
import ProjectCard from "../components/ProjectCard"

const Projects = ({ projects }) => {
    return (
        <div>
            <h1 className='mt-8 text-2xl md:text-4xl text-center font-extrabold'>Projects</h1>
            {
                projects.map(project => {
                    return (
                        <ProjectCard key={project.title} project={project} />
                    )
                })
            }
        </div>
    )
}

export default Projects