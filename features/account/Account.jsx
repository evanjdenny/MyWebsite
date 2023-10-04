import { useState } from "react";
import { setInfo } from "./accountSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Account() {
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [middleName, setMiddleName] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);

    function handleFirst(event) {
        setFirstName(event.target.value);
    }
    function handleLast(event) {
        setLastName(event.target.value);
    }
    function handleMiddle(event) {
        setMiddleName(event.target.value);
    }
    function handleDOB(event) {
        setDateOfBirth(event.target.value);
    }
    function handleCity(event) {
        setCity(event.target.value);
    }
    function handleState(event) {
        setState(event.target.value);
    }
    function handleCountry(event) {
        setCountry(event.target.value);
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="card-header display-4">Account</h1>
                <ul className="list-group card-body">
                    <li className="list-group-item">
                        <input className="form-control" type="text" id="first" placeholder={account.info.firstName} value={firstName} onChange={handleFirst} />
                        <label htmlFor="first" className="form-floating">First Name</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-control" type="text" id="last" placeholder={account.info.lastName} value={lastName} onChange={handleLast} />
                        <label htmlFor="last" className="form-floating">Last Name</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-control" type="text" id="middle" placeholder={account.info.middleName} value={middleName} onChange={handleMiddle} />
                        <label htmlFor="middle" className="form-floating">Middle Name</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-control" type="text" id="dob" placeholder={account.info.dateOfBirth} value={dateOfBirth} onChange={handleDOB} />
                        <label htmlFor="dob" className="form-floating">Date of Birth</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-control" type="text" id="city" placeholder={account.info.city} value={city} onChange={handleCity} />
                        <label htmlFor="city" className="form-floating">City</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-control" type="text" id="state" placeholder={account.info.state} value={state} onChange={handleState} />
                        <label htmlFor="state" className="form-floating">State</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-control" type="text" id="country" placeholder={account.info.country} value={country} onChange={handleCountry} />
                        <label htmlFor="country" className="form-floating">Country</label>
                    </li>
                </ul>
                <button onClick={() => {
                    if (firstName !== "")
                        dispatch(setInfo({type: "firstName", info: firstName}));
                    if (lastName !== "")
                        dispatch(setInfo({type: "lastName", info: lastName}));
                    if (middleName !== "")
                        dispatch(setInfo({type: "middleName", info: middleName}));
                    if (dateOfBirth !== "")
                        dispatch(setInfo({type: "dateOfBirth", info: dateOfBirth}));
                    if (city !== "")
                        dispatch(setInfo({type: "city", info: city}));
                    if (state !== "")
                        dispatch(setInfo({type: "state", info: state}));
                    if (country !== "")
                        dispatch(setInfo({type: "country", info: country}));
                }}>Save Changes</button>
                <button onClick={() => {
                    setFirstName("");
                    setLastName("");
                    setMiddleName("");
                    setDateOfBirth("");
                    setCity("");
                    setState("");
                    setCountry("");
                }}>Cancel</button>
            </div>
        </div>
    );
}