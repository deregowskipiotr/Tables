import {API_URL} from "../config";

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableId = ({ tables}, tableId) => tables.find(table => table.id === tableId);
export const getStatuses = state => state.status;

// actions

const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');
// action creators

export const updateTable = (payload) => ({type: UPDATE_TABLE, payload});
export const editTable = (payload) => ({type: EDIT_TABLE, payload});
export const fetchTable = () => {
  console.log("fetchTable")
  return (dispatch) => {
    fetch(`${API_URL}/table`)
    .then(table => dispatch(updateTable(table)));
  }
};

export const editTableRequest = (editTable) => {
  console.log("editTableRquest")
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(editTable),
    };
    fetch(`${API_URL}/tables/${editTable.id}`, options)
    .then(() => dispatch(editTable(editTable)))
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...statePart, {...action.payload }]
      case EDIT_TABLE:
        return statePart.map(table => table.id === action.payload.id ? {...table, ...action.payload} :table);

     default:
      return statePart;
  };
};

export default tablesReducer;