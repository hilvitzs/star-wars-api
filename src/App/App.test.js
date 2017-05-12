import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import ReactDOM from 'react-dom'
import App from './App';

describe('App', () => {
  afterEach(() => {
    // expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  function resolveAfter1Seconds() {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

    const mocks = () => {

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
            "http://swapi.co/api/people/",
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
        body: mockPeople
      });

      fetchMock.get('http://swapi.co/api/planets/', {
        status: 200,
        body: mockPlanets
      });

      fetchMock.get('http://swapi.co/api/vehicles/', {
        status: 200,
        body: mockVehicles
      });
    }

  it('should render without crashing', () => {
    mocks()

    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })


  it('should have scroll', () => {
    mocks()
    const wrapper = mount(<App />)

    expect(wrapper.state().scroll).toEqual([])
  })

  it('should have people data', async () => {
    mocks()

    const wrapper = mount(<App />)

    await resolveAfter1Seconds()

    expect(wrapper.state().people[0].name).toEqual('Luke Skywalker')
  })

  it('should have planets data', async () => {
    mocks()

    const wrapper = mount(<App />)

    await resolveAfter1Seconds()

    expect(wrapper.state().planets[0].name).toEqual("Alderaan")
  })

  it('should have vehicles data', async () => {
    mocks()

    const wrapper = mount(<App />)

    await resolveAfter1Seconds()

    expect(wrapper.state().vehicles[0].name).toEqual("TIE/LN starfighter")
  })

  it('when people button is clicked cardData is populated', async () => {
    mocks()

    const wrapper = mount(<App />)
    await resolveAfter1Seconds()
    const button = wrapper.find('.btn1')
    button.simulate('click')

    await resolveAfter1Seconds()

    expect(wrapper.state().cardData[0].name).toEqual("Luke Skywalker")
  })

  it('when planets button is clicked cardData is populated', async () => {
    mocks()

    const wrapper = mount(<App />)
    await resolveAfter1Seconds()
    const button = wrapper.find('.btn3')
    button.simulate('click')

    await resolveAfter1Seconds()

    expect(wrapper.state().cardData[0].name).toEqual("Alderaan")
  })

  it('when vehicles button is clicked cardData is populated', async () => {
    mocks()

    const wrapper = mount(<App />)
    await resolveAfter1Seconds()
    const button = wrapper.find('.btn2')
    button.simulate('click')

    await resolveAfter1Seconds()

    expect(wrapper.state().cardData[0].name).toEqual("TIE/LN starfighter")
  })

})
