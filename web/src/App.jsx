import React from 'react'
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto flex items-center gap-3 p-4">
          <div className="w-8 h-8 rounded-2xl bg-navy-900" />
          <h1 className="text-xl font-semibold text-navy-900">Osint Investigator</h1>
          <span className="ml-auto text-sm text-slate-500">Foundation & Guardrails — Step 1</span>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-6xl mx-auto p-4">
          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <h2 className="text-lg font-medium">Welcome</h2>
            <p className="mt-2 text-slate-600">
              Starter shell is running. Next: tabs layout, progress bar, and login/2FA.
            </p>
            <div className="mt-4 flex gap-3">
              <a className="btn" href="http://localhost:8000/health" target="_blank" rel="noreferrer">Check backend health</a>
              <button className="btn-secondary" onClick={() => alert('Progress SSE goes here.')}>Progress demo</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="max-w-6xl mx-auto p-4 text-sm text-slate-500">
          © {new Date().getFullYear()} Osint Investigator
        </div>
      </footer>
    </div>
  )
}
