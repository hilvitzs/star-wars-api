import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock'
import People from './People';

describe('People', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  function resolveAfter1Second() {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  it('should have a name', async () => {
    const mockPlanets = {"results": [
    { name: "Tatooine",
      climate: "arid",
      terrain: "desert",
      population: "200000",
      residents: [
        "http://swapi.co/api/people/5/",
      ]
    }]}

    const mockPeople = {
      name: 'Luke Skywalker',
      homeworld: 'http://swapi.co/api/planets/1',
      species: 'http://swapi.co/api/species/1'
    }

    const mockSpecies = {
      name: 'Human'
    }

   fetchMock.get('http://swapi.co/api/people/1/', {
    status: 200,
    body: mockPeople
   })

   fetchMock.get('http://swapi.co/api/species/1', {
     status: 200,
     body: {
       mockSpecies
     }
   })

   fetchMock.get('http://swapi.co/api/planets/1', {
     status: 200,
     body: mockPlanets
   })

    const wrapper = mount(<People personInfo={mockPeople}/>)
    await resolveAfter1Second()

    expect(wrapper.state().name).toEqual('Luke Skywalker')
    expect(wrapper.state().species).toEqual('Human')
  })
})
