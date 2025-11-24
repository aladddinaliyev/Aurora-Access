import { useState } from 'react';

export default function AuroraAccess() {
  const [user, setUser] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleConnect() {
    setLoading(true);
    try {
      const res = await fetch('/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: 'Connection failed. Try again later.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter your username"
        className="p-2 rounded bg-gray-800 border border-gray-600 text-white w-64 mb-4 text-center"
      />
      <button
        onClick={handleConnect}
        disabled={loading || !user}
        className="px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 disabled:bg-gray-700"
      >
        {loading ? 'Connecting...' : 'Generate Aurora Key'}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-gray-800 rounded-xl shadow-lg text-center max-w-lg">
          {response.error ? (
            <p className="text-red-400">{response.error}</p>
          ) : (
            <>
              <p className="text-green-400 font-semibold mb-2">
                {response.message}
              </p>
              {response.key && (
                <p className="text-sm text-gray-300">🔑 {response.key}</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

