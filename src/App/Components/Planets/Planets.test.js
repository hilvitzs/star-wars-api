import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Planets from './Planets';

describe('Planets', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  function resolveAfter1Second() {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  it('should have resident data', async () => {
    const mockPlanets = {
      name: "Alderaan",
      climate: "temperate",
      terrain: "grasslands, mountains",
      population: "2000000000",
      residents: [
        "http://swapi.co/api/people/5/",
      ]
    }

    const mockResidents = {
      name: 'Leia Organa'
    }

   fetchMock.get('http://swapi.co/api/people/5/', {
    status: 200,
    body: {
      name: mockResidents.name
    }
   });

    const wrapper = mount(<Planets planetInfo={mockPlanets}/>)
    await resolveAfter1Second()

    expect(wrapper.state().residents).toEqual(['Leia Organa'])
  })
})
