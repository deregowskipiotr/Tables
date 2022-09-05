import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams,  } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { editTableRequest, getTableId, getStatuses } from "../../redux/tablesRedux";
import { useEffect, useState } from "react";
import { Form, Button} from "react-bootstrap";


const SingleTable = () => {

  const dispatch = useDispatch;
  const Navigate = useNavigate;
  const { register, handleSubmit: validate, formState: {error} } = useForm();

  const { id } = useParams();
  const tableData = useSelector(state => getTableId(state, parseInt(id)));
  console.log("tableData:", tableData);
  if(tableData === undefined) {
    console.log('undefined');
  }

  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill || '0');

  const [status, setStatus] = useState(tableData.status);
  const statuses = useSelector(getStatuses);

  const isFree = status === ("Free");
  const isCleaning = status === ("Cleaning");
  const isBusy = status === ("Busy");

  useEffect(() => {
    if(isFree || isCleaning) {
      setPeopleAmount('0');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  

  const handleSubmit = () => {
    dispatch(editTableRequest({peopleAmount, maxPeopleAmount, bill, id, status, title: tableData.title}));
    Navigate('/');
  }

  if(tableData === undefined ) return <Navigate to="/" />
    return(
      <Form onSubmit={validate(handleSubmit)}>
      <h1>{tableData.title}</h1>
      <div className="d-flex py-2" >
        <h5 className="col-2 col-md-2 col-lg-1">Status</h5>
        <div className="col-4 col-md-3 col-lg-2">
          <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
            <option>Select status...</option>
            {statuses.map(status =>
              <option key={status.statusType}>{status.statusType}</option>)}
          </Form.Select>
        </div>
      </div>
      <div className="d-flex py-2">
        <h5 className="col-2 col-md-2 col-lg-1">People</h5>
        <div className="col-auto d-flex">
          <div className="col-2">
            <Form.Control
              {...register("peopleAmount", { min: 0, max: maxPeopleAmount })}
              value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)} type="number" />
            {error.peopleAmount && <small className="d-block form-text text-danger mt-2">Value must range from 1 to 10, and can't be more that max amount</small>}
          </div>
          <div className="p-1">/</div>
          <div className="col-2">
            <Form.Control
              {...register("maxPeopleAmount", { min: 0, max: 10 })}
              value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} type="number" />
            {error.maxPeopleAmount && <small className="d-block form-text text-danger mt-2">Value can range from 1 to 10</small>}
          </div>
        </div>
      </div>
      {isBusy &&
        <div className="d-flex py-2">
          <h5 className="col-2 col-md-2 col-lg-1">Bill</h5>
          <div className="d-flex col-4 col-md-3 col-lg-2">
            <div className="p-1">$</div>
            <Form.Control type="number" value={bill} onChange={e => setBill(e.target.value)} />
          </div>

        </div>}
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form >
    );

}

export default SingleTable;