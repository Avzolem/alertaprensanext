import { useRouter } from "next/router";

const StateDetailPage = () => {
  const router = useRouter();
  const { stateId } = router.query;
  return <p>Mostrar aqui la info del estado {stateId}</p>;
};

export default StateDetailPage;