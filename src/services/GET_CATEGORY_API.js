const URL_BASE = 'https://opentdb.com/api_category.php';

const GET_CATEGORY_API = async () => {
  const response = await fetch(URL_BASE);
  const json = await response.json();
  return (response.ok ? Promise.resolve(json) : Promise.reject(json));
};

export default GET_CATEGORY_API;
