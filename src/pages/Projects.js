import Link from 'next/link';
const Projects = () => {
    return ( 
        <section>
            <div className="container proj__container">
                    <h1>Please check on my recent project or follow me on my Git Hub Profile on: <Link className='project__link' href={'https://github.com/solomonMiracle'} >solomonMiracle</Link> </h1>
            </div>
        </section>
     );
}

export default Projects;