import * as consts from './consts';

// Converts the local storage data from string - 'city1-key#city1-name/city2-key#city2-name'
// to and array - [['city1-key','city1-name']['city2-key','city2-name']]
export const getFavorites = () => {
    const favoritesStr = localStorage.getItem(consts.LOCAL_STORAGE_FAVORITES_NAME);
    if (favoritesStr)
        return favoritesStr.split('/').map(cityStr => {
            const [key, name] = cityStr.split("#");
            return {key, name};
        });
    else
        return [];

};

// Converts an array - [['city1-key','city1-name']['city2-key','city2-name']]
// to a string - 'city1-key#city1-name/city2-key#city2-name' and saves it to the local storage.
// If there is no items in the array, removes the item from the local storage.
export const saveFavorites = favorites =>
    favorites.length === 0 ?
        localStorage.removeItem(consts.LOCAL_STORAGE_FAVORITES_NAME) :
        localStorage.setItem(consts.LOCAL_STORAGE_FAVORITES_NAME, favorites.map(({key, name}) => `${key}#${name}`).join('/'));

