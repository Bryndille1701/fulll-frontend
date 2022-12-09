export const getGithubUser = async (searchInput: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchInput}`
    );
    const data = await response.json();
    if (response.status === 200) {
      return data;
    } else if (response.status === 403) {
      return {
        message: 'Accès refusé',
      };
    } else {
      return {
        message: data.message,
      };
    }
  } catch (error) {
    console.log('error : ', error);
    return {
      message: 'Une erreur est survenue',
    };
  }
};
