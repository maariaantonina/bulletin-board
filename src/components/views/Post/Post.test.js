import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';

const mockData = {
  title: 'Lorem',
  photo: 'Lorem',
  description: 'Lorem',
  author: 'Lorem',
  date_publ: 'Lorem',
  location: 'Lorem',
  email: 'Lorem',
  phone: 'Lorem',
};

describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
