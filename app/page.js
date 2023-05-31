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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className='text-5xl flex justify-center text-gray-600'>
        <AiFillLinkedin />
        <AiFillGithub />
      </div>

      <div className='relative mx-auto '>
        <Image
          src={soup}
        />
      </div>

      </section>
      
    </main>
  )
}
