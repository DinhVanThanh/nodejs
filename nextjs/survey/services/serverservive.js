import getQuiz from "./quiz";
export const getServerSideProps = async () => {
  const data = getQuiz();
  return { props: { data } };
};
