import Head from "next/head";
import { MutatingDots } from  'react-loader-spinner'

export default function Home() {
  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="Make money through proven money making methods" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io" />
        <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="og:image" content="https://i.ibb.co/RPVL0MT/BOSS-Thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io" />
        <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
        <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
        <meta property="twitter:image" content="https://i.ibb.co/RPVL0MT/BOSS-Thumbnail.png" />
      </Head>

      <div className='flex justify-center items-center h-screen'>
        <MutatingDots 
          height="100"
          width="100"
          color="white"
          secondaryColor= '#FEC800'
          radius='12.5'
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  )
}