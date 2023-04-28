import { UilStar } from '@iconscout/react-unicons'
import { UilPlusCircle } from '@iconscout/react-unicons'
import { UilPagelines } from "@iconscout/react-unicons";
import { UilJavaScript } from "@iconscout/react-unicons";
import { UilWrench } from "@iconscout/react-unicons";
import { UilMobileVibrate } from '@iconscout/react-unicons'


import Head from 'next/head';
import Link from 'next/link';

const Home = () => {

    return (
        <>
            <Head>
                <title>Solomon Miracle - Homepage</title>
                <meta name='description' content='My is Miracle Agholor, and am a web developer'/>
            </Head>

    

            <header>
                <div className="container header__container">
          
                    <div className="title">
                        <span>Hi, my name is</span>
                        <br />
                        <br/>
                        <h1>Miracle Agholor</h1>
                        
                        <br />
                        <h2>Web Developer<UilStar/></h2>
                        <br />
                        <div className='header__intro'><p>I'm a full stack Computer Software Engineer with two years of experience  as a Web Developer in the MERN stack Technology.</p></div>
                        <br />
                        <br />
                    </div>
                        
                    
                    <div className='image__container'>
                        <img src="/dev__pics.png" alt="develop's image"/>
                    </div>



                    
                    <div className="title__three">
                        <div className='download__btn'><Link href='/my_resume.pdf' download='my_resume.pdf' className='Download'> Download CV  </Link></div>
                    </div>
                    
                </div>


            </header>






            <section>
        <div className="container contact__container" id='About'>
          <span>
            <h3>What's About Me</h3>
          </span>
          <br />
          <h1>About</h1>
          <br />
          <br />
          <div>
            <p>
            I was born in Agbor, Delta State, Nigeria. I studied<span> Computer Engineering at Delta State Polytechnic Otefe-Oghara</span> for my National and Higher National Diploma. My jouney as a web developer has been slow, painful, interesting and valuable and because of that, I have harnessed great interpersonal skills that has made me relevant in this field wherever I find myself. I am also open to other Tech Stacks, such as Laravel, ruby on rails and lots more. Most importantly I am undergoing the path to learning newer technogies that can help me master the art of web and mobile app Development.
            </p>
          </div>
        </div>

        <div className="container about__container">
          <div className="card">
            <div className="title">
              <h2>Frontend</h2>
            </div>
            <br />
            <div className="icon">
              <UilPagelines />
            </div>
            <br />
            <div className="explanation">
              <p>HTML & CSS.</p>
              <p>Javascript.</p>
              <p>React</p>
              <p>Vue</p>
              <p>TypeScript.</p>
              <p>Frameworks and Libraries.</p>
              <p>CSS Preprocessors.</p>
              <p>Responsive Design.</p>
              <p>Cross-Browser Compatibility.</p>
              <p>Version Control.</p>
            </div>
          </div>

          <div className="card">
            <div className="title">
              <h2>Backend</h2>
            </div>
            <br />
            <div className="icon">
              <UilJavaScript />
            </div>
            <br />

            <div className="explanation">
              <p> PHP and Javascript with Node Js.</p>
              <p>Express Js.</p>
              <p>Data Structures and Algorithms.</p>
              <p>Familiarity with Servers.</p>
              <p>Knowledge of APIs.</p>
              <p>Version Control and Version Control Systems.</p>
              <p>Problem-solving.</p>
            </div>
          </div>

          <div className="card">
            <div className="title">
              <h2>Engineering</h2>
            </div>
            <br />
            <div className="icon">
              <UilWrench />
            </div>
            <br />
            <div className="explanation__tag">
              <br />
              <p>Understanding of coding and programming languages.</p>
              <p>Experience with database design and data modeling.</p>
              <p>Knowledge of the software development process and
                corresponding technologies.
              </p>
              <p>
                    Understanding of design patterns and architectural
                styles.
              </p>
            </div>
          </div>
        </div>
      </section>

     
            <section>
                <div className='container contact__container'>
                    <span><h3>SKILLS</h3></span>
                    <br />
                    <h1>Graphic Design, Interface Design & User Experience</h1>
                    <br />
                    <br />
                    <div className='contact__plug'><p>I specialize in building complex web applications, working with
                                                    front-end and back-end teams, designing digital product and developing
                                                    visual design systems. I enjoy creating effortless user experience. The entire process of
                                                    going from a concept to release and gathering user’s feedback on
                                                    either client’s or my own products is what makes me wake up
                                                    everyday. I hope to seek new opportunities for cooperation on
                                                    projects around interesting dashboards, design systems or landing
                                                    pages. Lets us create something awesome together, and I am hoping
                                                    to work with clients from all around the world from early startups
                                                    to well-established companies.</p>
                </div>
                </div>
            </section>



            






            <section id='process__container'>
                <h1 className='process__title'>Design Process <UilPlusCircle id='process__icon' /></h1>
                <br />
                <div className='container process__container'>
                    <div className='process'>
                        <h2>Preprocess</h2>
                        <br />
                        <p>Collect Informations</p>
                        <p>Personas</p>
                        <p>SetUp Goals</p>
                        <p>Project Folder + Moodboard</p>
                    </div>

                    <div className='process'>
                        <h2>Low Fidelity</h2>
                        <br />
                        <p>Whiteboard</p>
                        <p>Maps Screen Info</p>
                        <p>Possible States</p>
                        <p>First Diagram</p>
                    </div>

                    <div className='process'>
                        <h2>Work/ Design</h2>
                        <br />
                        <p>Moodboard</p>
                        <p>First Diagram</p>
                        <p>Write your copy</p>
                        <p>Intern Test</p>
                    </div>



                </div>
            </section>







            <section>
                <div className='container contact__container'>
                    <span><h3>WHAT'S NEXT</h3></span>
                    <br />
                    <h1>Let's Work Together</h1>
                    <br />
                    <br />
                    <div className='contact__plug'><p>If you'd like to talk about a project you want help with or need an advice about product design, just drop me a message at <span>miracleagholor1@gmail.com</span>.  I'm currently Available for any design systems projects, dashboard designs or landing pages gigs.</p></div>
                    <p> You can Call Me <UilMobileVibrate/> on : +2348065826105</p>
                </div>
            </section>


        </>

    );
}

export default Home;