const useWorkYears = () => {
  const now = new Date();
  const startWork = new Date(2019, 6, 18);
  const year = 1000 * 60 * 60 * 24 * 365;

  const difference = Math.floor(now.getTime() - startWork.getTime());

  return Math.floor(difference / year);
};

export default useWorkYears;
