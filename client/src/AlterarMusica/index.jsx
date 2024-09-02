import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateMusica() {
  const [id, setId] = useState('');
  const [musica, setMusica] = useState('');
  const [artista, setArtista] = useState('');
  const [album, setAlbum] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { musica, artista, album };

    try {
      const response = await fetch(`http://localhost:5000/musicas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Musica atualizada com sucesso!');
        navigate("/musicas");
      } else {
        alert('Erro ao atualizar musica.');
      }
    } catch (error) {
      console.error('Erro ao atualizar musica:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2 class="add">Atualizar Musica</h2>
      <input
        type="text"
        placeholder="ID da Musica"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
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
      <button type="submit">Atualizar Musica</button>
    </form>
    </div>
  );
}
