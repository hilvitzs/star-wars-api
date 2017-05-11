import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import ReactDOM from 'react-dom'
import App from './App';

describe('App', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  function resolveAfter2Seconds() {
    return new Promise( resolve => {
      setTimeout() => {
        resolve();
      }, 2000);
    }
  }

  const mockCrawl1 = "It is a period of civil war"
  const mockCrawl2 = "It is a period of civil war"
  const mockCrawl3 = "It is a period of civil war"
  const mockCrawl4 = "It is a period of civil war"
  const mockCrawl5 = "It is a period of civil war"
  const mockCrawl6 = "It is a period of civil war"
  const mockCrawl7 = "It is a period of civil war"

  const mockPlanets = {"results": [
        {
            "name": "Alderaan",
            "climate": "temperate",
            "terrain": "grasslands, mountains",
            "population": "2000000000",
            "residents": [
                "http://swapi.co/api/people/5/",
                "http://swapi.co/api/people/68/",
                "http://swapi.co/api/people/81/"
            ]
        }]}

  const mockVehicles = {"results": [
    {
            "name": "TIE/LN starfighter",
            "model": "Twin Ion Engine/Ln Starfighter",
            "passengers": "0",
            "vehicle_class": "starfighter",
        }
  ]}

  const mockPeople =  {"results": [
      {
          "name": "Luke Skywalker",
          "homeworld": "http://swapi.co/api/planets/1/",
          "species": [
              "http://swapi.co/api/species/1/"
          ]
      }
    ]}

  it('should render without crashing', () => {

    fetchMock.get('http://swapi.co/api/films/1', {
        status: 200,
        body: {
          "opening_crawl": mockCrawl1,
        }
      })

    fetchMock.get('http://swapi.co/api/films/2', {
      status: 200,
      body: {
        "opening_crawl": mockCrawl2,
      }
    })

    fetchMock.get('http://swapi.co/api/films/3', {
      status: 200,
      body: {
        "opening_crawl": mockCrawl3,
      }
    })

    fetchMock.get('http://swapi.co/api/films/4', {
      status: 200,
      body: {
        "opening_crawl": mockCrawl4,
      }
    })


    fetchMock.get('http://swapi.co/api/films/5', {
      status: 200,
      body: {
        "opening_crawl": mockCrawl5,
      }
    })

    fetchMock.get('http://swapi.co/api/films/6', {
      status: 200,
      body: {
        "opening_crawl": mockCrawl6,
      }
    })

    fetchMock.get('http://swapi.co/api/films/7', {
      status: 200,
      body: {
        "opening_crawl": mockCrawl7,
      }
    })

    fetchMock.get('http://swapi.co/api/people/', {
      status: 200,
      body: {
        mockPeople
      }
    });

    fetchMock.get('http://swapi.co/api/planets/', {
      status: 200,
      body: {
        mockPlanets
      }
    });

    fetchMock.get('http://swapi.co/api/vehicles/', {
      status: 200,
      body: {
        mockVehicles
      }
    });

    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })


  it('should have scroll', () => {
    const wrapper = mount(<App />)

    expect(wrapper.state().scroll).toEqual([])
  })

  it('should have people data', async () => {
    fetchMock.get('http://swapi.co/api/people/', {
      status: 200,
      body: {
        mockPeople
      }
    });

    const wrapper = mount(<App />)

    await resolveAfter2Seconds()

    expect(wrapper.state().people[0].name).toEqual('Luke Skywalker')
  })

})
