'use client'

import Image from 'next/image'
import authorImage from '@/public/images/authors/moi.png'
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from 'react'

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/danndieulouard/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/DannDieulouard',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    )
  },
]

export default function Intro() {
  return (
    <>
        <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 sm:items-start md:flex-row min-h-full'>
      <div className='mt-2 flex-1 md:mt-0 text-center sm:text-left'>
        <h1 className='title no-underline'>Hey, I&#39;m Dann.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a full-stack developer based in Bordeaux, France. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          Actually open to new opportunities.
        </p>
      </div>
      <div className='relative'>
  <Image
    className='flex-1 rounded-lg grayscale'
    src={authorImage}
    alt='Dann Dieulouard'
    width={175}
    height={175}
    priority
  />
</div>
    </section>
    <div className='mt-9 mb-9 text-center'>
      <p className='mt-3'>Soft skills</p>
      <p className='mt-3 font-light text-muted-foreground'>Communication, problem-solving, teamwork. Adaptive, curious and fast learner.</p>
      <p className='mt-3'>Front-end</p>
      <p className='mt-3 font-light text-muted-foreground'>React.js, Next.js, TypeScript, ES6 JavaScript, Tailwind, SCSS.</p>
      <p className='mt-3'>Back-end</p>
      <p className='mt-3 font-light text-muted-foreground'>Node.js, Express, Sequelize and database management such as mySQL/MariaDB.</p>
      <p className='mt-3'>Cherry on the cake</p>
      <p className='mt-3 font-light text-muted-foreground'>Agile software development, Figma UI/UX design, Heroku/Vercel deployments.</p>
      <div className='mt-10 flex justify-center space-x-10 md:order-2'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          </div>
          <div className='mt-6 flex justify-center'>
          <a
                href="\images\authors\Dann-Dieulouard-CV.pdf"
                download="Dann-Dieulouard-CV.pdf"
                className='text-muted-foreground hover:text-foreground'
              >
                <Button variant="outline">CV Resume</Button>
              </a>
        </div>
        </div>
    </>
  )
}