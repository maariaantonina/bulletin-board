import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

const mockData = {
  items: [{ _id: '1' }, { _id: '2' }, { _id: '3' }],
  fetchPublishedPosts: jest.fn(),
};

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomepageComponent {...mockData} />);
    expect(component).toBeTruthy();
  });
});
