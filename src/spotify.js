// send the user to authenticate to spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUrl = "http://localhost:3000/";
const redirectUrl = String(window.location.href);
// const redirectUrl = "http://gauravkumar1539.github.io/spotify-app/";

// 1. user is directed to spotify authorization page.Spotify takes care of the authorzation and redirects the user back to our app.

const clientId = "adf61154c8764e238dedc961d903e78e";
// defining the permissions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
];

// after authorisation we are redirected to our app with a link that contains access token so we have to get the access token now from that url.
//  Ex of accesstoken url= http://localhost:3000/#access_token=BQDhbi7ybyxzZ1Kwhrvsj9OazZn8lkZdtRrc1PH06MvE1BKfeWb8dmvnpYRKnnanLuY68jXx8NMc3aeOAlqWGK53hJamYiPc0eyTx93NOqPkLdgVzj8MoZWb6D7BVR_98BBenNLZIR4hsu6S-yAWiKHSjNHHQJ7pLiBPHpc2jkUOUw6CKZiOuQl1HEtZnDs&token_type=Bearer&expires_in=3600
export const getToken = () => {
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        let parts=item.split('=');
        // decodeURI is inbuilt
        initial[parts[0]]= decodeURIComponent(parts[1]);
        return initial;
    }, {});
}
// "%20" is ascii code for space
// this is the login url for spotify
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;

