import React from 'react';

const SecondCompoment = () => {
   const books = [
    "Harry Potter: Y la Piedra Filosofal",
    "Harry Potter: La Camara De Los Secretos",
    "Harry Potter: El Prisionero de Azcaban",
    "Harry Potter: Al Caliz De Fuego",
    "Harry Potter: La Orden Del Fenix",
    "Harry Potter: El Principe Mestizo",
    "Harry Potter: Las Reliquias De La Muerte"
   ]
    
  return (
    <>
    <h1>My SecondComponent</h1>
   <div>
    {/* <ul>
        <li>{books[0]}</li>
        <li>{books[1]}</li>
        <li>{books[2]}</li>
        <li>{books[3]}</li>
        <li>{books[4]}</li>
        <li>{books[5]}</li>
        <li>{books[6]}</li>
    </ul> */
    <ul>
        {
            books.map((book, index) => {
                return <li key={ index }>{book}</li>
            })
        }
    </ul>
    }
   </div>
    </>
  );
};

export default SecondCompoment;