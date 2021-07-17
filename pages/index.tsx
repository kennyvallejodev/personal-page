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
				<html lang="en" />
        <title>
					Kenny Vallejo | Full Stack Developer
				</title>
				<meta name="viewport" content="width=device-width,initial-scale=1" />

				{/* Basic MetaData */}
				<meta property="og:title" content="Kenny Vallejo | Full Stack Developer" />
				<meta 
					property="og:description" 
					content="Portfolio Site with all my Skillset, Technologies and Job Positions." 
				/>
				<meta property="og:image" content="https://kennyvallejo.com/photo.jpg" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:image:width" content="1024" />
				<meta property="og:image:height" content="1024" />
				<meta property="og:image:alt" content="Kenny Vallejo's Selfie" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://kennyvallejo.com/" />

				{/* Twitter MetaData */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://kennyvallejo.com/" />
				<meta name="twitter:title" content="Check My Personal Site!" />
				<meta name="twitter:description" content="Here you can find all the 
				information about my professional career." />
				<meta name="twitter:image" content="https://kennyvallejo.com/photo.jpg" />


        <meta 
					name="description" 
					content="Portfolio Site with all my Skillset, Technologies and Job Positions." 
				/>
        <link 
					rel="icon" 
					href="/favicon.svg" 
				/>
        <link 
					rel="icon" 
					href="/favicon.ico" 
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
