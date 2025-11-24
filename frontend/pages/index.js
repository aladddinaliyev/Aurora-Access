import Head from 'next/head'
import AuroraAccess from '../components/AuroraAccess'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Aurora Access</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="hero">
        <img src="/banner.png" alt="Aurora" className="banner" />
        <h1>Aurora Access</h1>
        <p className="tag">
          Freedom is not a feature — it’s a right written in light.
        </p>

        <div className="content">
          <AuroraAccess />
        </div>
      </main>

      <style jsx>{`
        .page {
          font-family: Inter, system-ui, Segoe UI, Roboto, 'Helvetica Neue', Arial;
          color: #e6f0ff;
          background: #05061a;
          min-height: 100vh;
        }
        .banner {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          filter: brightness(0.7);
        }
        .hero {
          padding: 2rem;
          text-align: center;
        }
        h1 {
          font-size: 2.4rem;
          margin: 1rem 0;
        }
        .tag {
          opacity: 0.8;
        }
        .content {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  )
}
