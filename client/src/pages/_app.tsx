import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Frame from '@/components/dom/Frame'
import '@/styles/index.css'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

export default function App({ Component, pageProps = { title: 'SEJIN OH' } }) {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Frame ref={ref}>
        <Component {...pageProps} />
      </Frame>
    </>
  )
}
