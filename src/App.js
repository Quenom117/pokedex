import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../src/components/card";
import { BarraDeNavegacao } from "./components/barradenavegacao";
import Modal from "react-bootstrap/Modal";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [page, setPage] = useState(1);

  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = () => {
    axios
      .get(
        `https://pokedex20201.herokuapp.com/users/${username}
    `
      )
      .then((response) => setUser(response.data))
      .catch(() => setErrorMessage("Usuario não encontrado"));
  };

  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
      .then((response) => {
        setPokemons(response.data.data);
      });
  }, [page]);

  return (
    <>
      <BarraDeNavegacao>
        <button className="Entrar" onClick={handleShow}>
          Entrar
        </button>
      </BarraDeNavegacao>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entrar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Usuario:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="Entrar" onClick={handleLogin}>
            Entrar
          </button>
          {errorMessage && <p>{errorMessage}</p>}
        </Modal.Body>
      </Modal>
      <div className="Lista">
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>Proxima pagina</button>
      {page > 1 ? (
        <button onClick={() => setPage(page - 1)}>Pagina anterior</button>
      ) : null}
    </>
  );
}

export default App;
