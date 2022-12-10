import { GithubUserResponse } from '../types/github';

// Merge GithubUserResponse with a new interface, with an added message property
interface GetGithubUserResponse extends GithubUserResponse {
  message?: string;
}

// Get a github user from the Github API, using the search endpoint
export const getGithubUser = async (
  searchInput: string
): Promise<GetGithubUserResponse> => {
  try {
    // Fetch the data from the Github API
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchInput}`
    );
    // Parse the response as JSON
    const data = await response.json();
    if (response.status === 200) {
      // If the response is 200, return the data
      return data;
    } else if (response.status === 403) {
      // If the response is 403, return a specific message (used for rate limiting)
      return {
        message: 'Accès refusé',
      };
    } else {
      // If the response is anything else, return the message from the response !
      return {
        message: data.message,
      };
    }
  } catch (error) {
    // If there is an error, return a generic message
    console.log('error : ', error);
    return {
      message: 'Une erreur est survenue',
    };
  }
};
