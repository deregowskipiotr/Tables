//selectors

export const getStatuses = state => state.status;

//action creators

const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default statusReducer;