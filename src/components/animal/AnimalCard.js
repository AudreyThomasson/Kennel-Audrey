import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">Name: {animal.name}</h3>
        <h4 className="animal_breed">Breed: {animal.breed}</h4>
        <address className="location__address">Current Kennel: {animal.location.name}</address>
    </section>
)