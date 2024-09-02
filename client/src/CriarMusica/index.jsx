import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateMusica() {
  const [musica, setMusica] = useState('');
  const [artista, setArtista] = useState('');
  const [album, setAlbum] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMusica = { musica, artista, album };

    try {
      const response = await fetch('http://localhost:5000/musicas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMusica),
      });
      if (response.ok) {
        alert('Musica criada com sucesso!');
        setMusica('');
        setArtista('');
        setAlbum('');
        navigate("/musicas");
      } else {
        alert('Erro ao criar musica.');
      }
    } catch (error) {
      console.error('Erro ao criar musica:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
    <h2 class="add">Adicionar Musica</h2>
      <input  
        type="text"
        placeholder="Musica"
        value={musica}
        onChange={(e) => setMusica(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artista"
        value={artista}
        onChange={(e) => setArtista(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        required
      />
      <button type="submit">Adicionar Musica</button>
    </form>
    </div>
  );
}
