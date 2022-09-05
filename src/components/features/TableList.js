import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";



const TableList = () => {
  const TableList = useSelector(getAllTables);

  if(TableList.lenght === 0) return <div>
    <Spinner animation="border" role="status">
      <span className="visually-hiden">Loading...</span>
    </Spinner>
  </div>
  return (
    <div>
      {TableList.map(table => 
        <div key={table.id} className="d-flex border-bottom py-2">
          <h4 className="col-3 col-md-2">{table.title}</h4>
          <div className="d-flex col-4 col-md-8 pt-1">
          <h6 className="card-subtitle mt-0">Status:</h6>
          <small className="font-weight-normal px-1">{table.status}</small>
        </div>
      <Link key={table.id} to={"/table/" + table.id}>
        <button type="button" className="btn btn-primary">Show more</button>
      </Link>
    </div>
      )}
    </div>
  );
}

export default TableList;