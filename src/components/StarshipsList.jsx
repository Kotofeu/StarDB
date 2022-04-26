import React from 'react'
import Error from './Error';
import StarshipsItem from './StarshipsItem';
export default function StarshipsList({ starships }) {
    if (!starships.length) {
        return (
            <Error message={"No starships found"}></Error>
        )
    }

    return (
        <div className="starships__grid">
            {starships.map(starship =>
                <StarshipsItem key={starship.name} props={starship}></StarshipsItem>
            )}
        </div>
    );
}
