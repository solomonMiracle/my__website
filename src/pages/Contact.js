import { UilMobileVibrate } from '@iconscout/react-unicons'

const Contact = () => {
    return (
        <>
            <section>

                <div className="container contact__container former">


                    <section>
                        <div className='container contact__container fomix'>
                            <span><h3>LET'S TALK</h3></span>
                            <br />
                            <h1>Please Contact Me</h1>
                            <br />
                            <br />
                            <div className='contact__plug'><p>If you'd like to talk about a project you want help with or need an advice about product design, just drop me a message at <span>miracleagholor1@gmail.com</span>.  I'm currently Available for any design systems projects, dashboard designs or landing pages gigs. Or you may preferably fill out the form and I would get back to you.</p></div>
                            <p> You can Call Me <UilMobileVibrate/> on : +2348065826105</p>
                        </div>
                    </section>


                    <form action="https://formspree.io/f/xayzazqy" method="post">

                        <div className="form__container">


                            <div className="fox">
                                <label for="email">Full Name</label>
                                <input name="full name" id="email" type="full name" />

                                <label for="email">Email</label>
                                <input name="Email" id="email" type="email" />
                            </div>


                            <div className="message">
                                <label for="Message">Your Message</label>
                                <input name="Message" id='message' type="text" />
                            </div>


                            <div className="submit__btn"><input type="submit" value='submit' /></div>
                        </div>

                    </form>

                </div>

            </section>
        </>
    );
}

export default Contact;