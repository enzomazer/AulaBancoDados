import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadMmusicas() {
  const [musicas, setMusicas] = useState([]);


  useEffect(() => {
    const fetchMusicas = async () => {
      try {
        const response = await fetch('http://localhost:5000/musicas');
        const data = await response.json();
        setMusicas(data);
      } catch (error) {
        console.error('Erro ao buscar as musicas:', error);
      }
    };

    fetchMusicas();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/musicas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setMusicas(musicas.filter((musica) => musica._id !== id));
        alert('Musica excluída com sucesso!');
      } else {
        alert('Erro ao excluir musica.');
      }
    } catch (error) {
      console.error('Erro ao excluir musica:', error);
    }
  };

  return (
    <div className='container'>
      <div id="curtidas">
        <div id="imga">
        </div>
        <h2 id="tituloa">Músicas Curtidas</h2>
      </div>
      

      <div id="carregados">
        <div id="titus">
          <p id="nomem">Titulo</p>
          <p id="artista">Artista</p>
          <p id="album">Album</p>
          <p id="idd">ID</p>
          <p id="remover">Remover</p>
        </div>
        {musicas.map((musica) => (
            <div class="musga">
              <p id="nomem">{musica.musica}</p>
              <p id="artista">{musica.artista}</p>
              <p id="album">{musica.album}</p>
              <p id="idd">{musica._id}</p>
              <div class="remover">
                <a onClick={() => handleDelete(musica._id)}>
                  <div class="remova" >

                </div></a>
                
              </div>
            </div>
          ))}
        <div>

        </div>
      </div>

    </div>
  );
}
