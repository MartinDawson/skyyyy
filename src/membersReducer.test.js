import membersReducer from './membersReducer';

it('should return default state if action not matched', () => {
  const state = membersReducer([], { type: 'INIT' });

  expect(state).toEqual([]);
});

it('should set messages in the store', () => {
    const members = [{
        id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
        name: 'Martin Dawson'
    }]

    const updatedStore = membersReducer([], { type: 'MEMBERS_LOADING_FULFILLED', payload: members });

    expect(updatedStore).toEqual(members);
});

