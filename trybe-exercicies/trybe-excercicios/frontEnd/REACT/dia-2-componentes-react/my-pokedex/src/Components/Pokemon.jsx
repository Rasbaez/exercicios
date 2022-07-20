import React from 'react';


class Pokemon extends React.Component {
  render() {

  const { pokemon } = this.props
  const { name, type, averageWeight, image } = pokemon
  const kg = averageWeight.measurementUnit;
  const weigth = averageWeight.value

   return(
      <>
      <section className='card'>
          <h1>{name}</h1>
          <img src={image} alt={name}/>
          <p>{type}</p>
          <p>{`averageWeight: ${weigth} ${kg}`}</p>
      </section>
      </>
   );

  }

};

export default Pokemon;