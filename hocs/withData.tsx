import React from 'react'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'


const withData = (WrappedComponent:any) => {
  const HOC = (pageProps: any) => {
    return (
      <div className="min-h-screen w-full relative bg-slate-100 pb-90 lg:pb-72">
        <Header/>
        <WrappedComponent {...pageProps} />
        <Footer/>
      </div>
    )
  }
  return HOC
}

export default withData