import Head from 'next/head'
import { Contact } from '../layouts/home/contact'
import { GoodCoder } from '../layouts/home/goodcoder'
import { Header } from '../layouts/home/header'
import { Positions } from '../layouts/home/positions'
import { QA } from '../layouts/home/qa'
import { Skillset } from '../layouts/home/skillset'

export default function Home() {
  return (
    <>
      <Head>
        <title>
					Kenny Vallejo 👉 Full Stack Developer
				</title>
        <meta 
					name="description" 
					content="Portfolio Site with all my Skillset, Technologies and Job Positions." 
				/>
        <link 
					rel="icon" 
					href="/favicon.svg" 
				/>
      </Head>
			{/* 
				Header, Includes:
				- Navigation Bar
				- Biography
				- Profile Picture
				- Scroll Button 
			*/}
			<Header />

			{/* 
				Positions, Includes: 
				- Section Label
				- Position Card
			*/}
			<Positions />

			{/* 
				Skillset, Includes: 
				- Section Label
				- Skills and Knowledge (Simple List)	
				- Tools and technologies (Complex List)
				- Spoken Languages (Simple List)	
			*/}
			<Skillset />

			{/* 
				Goodcoder, Includes: 
				- Section Label
				- Description
				- Logo
				- More Description
				- Buttons to Social
				- Carousel with Post Images
			*/}
			<GoodCoder />

			{/* 
				Questions and Answers, Includes: 
				- Section Label
				- 3 questions and answers
			*/}
			<QA />

			{/* 
				Contact, Includes: 
				- Section Label
				- Banner to send a message (email link)
				- Social Media
			*/}
			<Contact />
    </>
  )
}
