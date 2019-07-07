import { get } from 'axios';

import { GOOGLE_API_KEY } from 'main/config';

const GOOGLE_PLACES_API_URL =
    'https://maps.googleapis.com/maps/api/place/autocomplete/json';

export function getPlaceDescriptions(searchText) {
    return getPlaceSuggestions(searchText)
        .then(response => {
            return response.data
                ? response.data.predictions.map(p => p.description)
                : [];
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

const getPlaceSuggestions = searchText => {
    return get(
        `${GOOGLE_PLACES_API_URL}?input=${searchText}&key=${GOOGLE_API_KEY}`
    );
};
