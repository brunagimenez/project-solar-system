import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarsystem">
        <Title headline="PLANETAS" />
        <div className="sistemasolar">
          {planets.map(({ name, image }, index) => (
            <PlanetCard
              className={ name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() }
              key={ index }
              planetName={ name }
              planetImage={ image }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
