import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import Vehicles from './Vehicles';

describe('Vehicles', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  const mockVehicles = {
    name: 'Landspeeder',
    model: 'Landspeeder',
    vehicle_class: 'speeder',
    passengers: '1'
  }

  it('should return a vehicle card', () => {
    const wrapper = mount(<Vehicles vehicleInfo={mockVehicles}/>)

    expect(wrapper.find('.card')).toHaveLength(1)
  })

})
