export default function Home() {
  return (
    <main style={{
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '5rem',
      background: '#f0f8ff',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#0066cc' }}>
        Hello from Next.js! 🚀
      </h1>
      <p style={{ fontSize: '1.5rem' }}>
        Deployed successfully with Docker + GitHub Actions + AWS EC2
      </p>
      <p>Time: {new Date().toLocaleString()}</p>
    </main>
  );
}