const getAge = () => {
  const date = Date.now() - new Date('2003, 09, 11').getTime();
  const age = new Date(date);

  return Math.abs(age.getUTCFullYear() - 1970);
};
 
export default getAge;