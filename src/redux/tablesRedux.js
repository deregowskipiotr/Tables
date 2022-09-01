

//selectors

// actions

const createActionName = actionName => `app/tables/${actionName}`;
const ADD_TABLE = createActionName('ADD_TABLE');
// action creators

export const addTable = (payload) => ({type: ADD_TABLE, payload});


const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...statePart, {...action.payload }]

    default:
      return statePart;
  };
};
export default tablesReducer;