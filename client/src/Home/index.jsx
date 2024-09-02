import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <div id="curtidas">
        <div id="imga">
        </div>
        <h2 id="tituloa">Músicas Curtidas</h2>
      </div>
            <div className="card-container">
                <Link to="/musicas/cadastrar" className="card">
                    <div>Registrar Música</div>
                </Link>
                <Link to="/musicas/alterar" className="card">
                    <div>Alterar Música</div>
                </Link>
                <Link to="/musicas">
                    <div id="play"></div>
                </Link>
            </div>
        </div>
    );
}
