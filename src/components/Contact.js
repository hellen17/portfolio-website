
import { FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Contact(){
    return(
        <div className="flex lg:flex-row flex-col lg:px-32 p-8 mt-20" id='contact'>

            <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold mb-5" style={{color:'var(--primary-color)'}}>Connect with me:</h2>
                <p>Satisfied with me? Please contact me.
                </p>
                <div className='flex gap-5 my-8 animate-pulse transition delay-150 duration-300 ease-in-out'>
                    <a href="https://github.com/hellen17" target="_blank" rel="noopener">
                        <FaGithub size={32} color='pink' />
                    </a>
                    <a href="https://www.linkedin.com/in/hellenkokach/" target="_blank" rel="noopener">
                        <FaLinkedin size={32} href='' color='pink' />
                    </a>
                    <a href="https://hellenkokach.medium.com/" target="_blank" rel="noopener">
                        <FaMedium size={32} color='pink' />
                    </a>




                </div>

            </div>
            <div className="lg:w-1/2">
                <h3 className='text-2xl'>Contact me, let’s make magic together</h3>

                <form className="flex flex-col gap-5 mt-5">
                    <input type="text" placeholder="Name" className="p-2 rounded-md" style={{ backgroundColor: '#31313F' }} />
                    <input type="email" placeholder="Email" className="p-2 rounded-md" style={{ backgroundColor: '#31313F' }} />
                    <textarea placeholder="Message" className="p-2 rounded-md" style={{ backgroundColor: '#31313F' }} />
                    <button className="p-2 rounded-md w-1/3" style={{ backgroundColor: 'var(--primary-color)' }}>Send</button>
                </form>
            </div>

        </div>
    )
}