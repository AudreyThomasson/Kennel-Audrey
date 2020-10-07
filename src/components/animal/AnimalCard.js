import React from "react"
import "./Animal.css"
import {Link} from "react-router-dom"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/detail/${animal.id}`}>
                { animal.name }
            </Link>
        </h3>
        <h4 className="animal_breed">Breed: {animal.breed}</h4>
        <address className="location__address">Current Kennel: {animal.location.name}</address>
    </section>
)