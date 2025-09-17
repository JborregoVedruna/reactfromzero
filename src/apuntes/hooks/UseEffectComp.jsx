import { useEffect, useState } from 'react'

export default function UseEffectComp() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [test, setTest] = useState(0);

    useEffect(() => {
        // Función que se ejecuta cuando cambia la paginación
        try {
            if (!page) throw new Error("Ha ocurrido un error")
            fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => data.results)
            .then(results => {
                console.log(results)
                setItems(results)
            })
        } catch (error) {
            console.log('Error al obtener los elementos:', error);
        }
    }, [test]);
  
    const handlePageChange = (newPage) => {
      setPage(newPage);
    };
  
    return (
      <div>
        <h1>Lista de elementos</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={() => handlePageChange(page + 1)}>Siguiente</button>
        <button
          onClick={() => {
            setTest(test + 1);
          }}
        >
          Add to test
        </button>
        <p>test: {test}</p>
        <p>pagina: {page}</p>
      </div>
    );
  }