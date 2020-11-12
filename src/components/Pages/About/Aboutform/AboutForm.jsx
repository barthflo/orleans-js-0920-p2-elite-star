import React, {useState, useEffect} from 'react';
import './AboutForm.css';

export default function AboutForm() {
    const [fistName, setFirsName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adress, setAdress] = useState("");
    const [adress1, setAdress1] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState(0);

    





    return (
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputSecondName">Fist Name</label>
                    <input name="fistName" type="text" class="form-control" id="inputName" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputSecondName">Second Name</label>
                    <input name="secondName" type="text" class="form-control" id="inputPassword4" />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input name="email" type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input name="password" type="password" class="form-control" id="inputPassword4" />
                </div>
            </div>

                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input name="adress" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input name="adress1" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input name="city" type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>

                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input name="zip" type="text" class="form-control" id="inputZip" />
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">Check me out</label>
                </div>
        </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    )
}

