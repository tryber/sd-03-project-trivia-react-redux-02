const GET_QUESTIONS_API = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&encode=url3986&token=${token}`);
  const json = await response.json();
  return (response.ok ? Promise.resolve(json) : Promise.reject(json));
};

export default GET_QUESTIONS_API;
