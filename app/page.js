import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import  { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import soup from '../public/soup.jpg'

export default function Home() {
  return (
    <main className='bg-white px-10'>
      <section className='min-h-screen'>
      {/* Nav Section */}
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className='text-xl'>davidcam</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
          </li>
          <li><a className='bg-indigo-800 text-white px-4 py-2 rounded-md ml-8'href='#'>Resume</a></li>
        </ul>
      </nav>

      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-indigo-700 font-medium'>David Campbell</h2>
        <h3 className='text-2xl py-2'>Full-Stack Developer.</h3>
        <p className='text-md py-3 leading-8'>
        Recent graduate with a passion for web design and clean code. 
        </p>
      </div>

      <div className='text-5xl gap-16 py-3 flex justify-center text-gray-600'>
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
  
      <div className='p-1 bg-gradient-to-tr from-indigo-700 to-fuchsia-700 rounded-full w-80 h-80 mt-10 mx-auto relative'>
      <div className='rounded-full overflow-hidden w-full h-full'>
        <Image
          src={soup}
          width={320}
          height={320}
          className='object-cover'
        />
         </div>

      </div>
      </section>
        <h3 className='text-2xl py-5'>Technologies I'm Familiar With:</h3>
        <div className=""></div>
        <p></p>
      <section>
      <div>

      </div>

      </section>
      
    </main>
  )
}
