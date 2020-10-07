import React, { useContext, useRef } from "react"
import { useHistory } from 'react-router-dom';
import { LocationContext } from "../location/LocationProvider"
import "./Location.css"

export const LocationForm = (props) => {
    const { addLocation } = useContext(LocationContext)
    
    const history = useHistory();
    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const address = useRef(null)

    /*
        Get location state and location state on initialization.
    */
    // useEffect(() => {
    //    getLocations()
    // }, [])

    const constructNewLocation = () => {
        /*
            The `location` and `customer` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        // const customerId = parseInt(customer.current.value)


        addLocation({
            name: name.current.value,
            address: address.current.value
        })
            // useHistory is the browser history, this will be auto "clicking" to
            // return to the locations screen
        .then(() => history.push("/locations"))
    }


    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">Location address: </label>
                    <input type="text" id="locationAddress" ref={address} required autoFocus className="form-control" placeholder="Location address" />
                </div>
            </fieldset>
            
            
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewLocation()
                }}
                className="btn btn-primary">
                Add Location
            </button>
        </form>
    )
}