import { useState } from 'react';
import DocumentationSearch from "./documentation"
export default function Home() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setGreeting(`Bonjour ${name}`);
      setName(''); // Clear the input field
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4">Entrez votre nom</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Votre nom"
        />
        {greeting && (
          <p className="text-xl font-semibold text-blue-700">{greeting}</p>
        )}
      </div>
      <DocumentationSearch/>
    </main>
  );
}
