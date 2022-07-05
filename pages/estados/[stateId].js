import { useRouter } from "next/router";
import MainLayout from "../../components/Layouts/MainLayout";

const StateDetailPage = () => {
  const router = useRouter();
  const { stateId } = router.query;
  return (
    <MainLayout>
      <h1>Mostrar aqui la info del estado {stateId}</h1>
    </MainLayout>
  );
};

export default StateDetailPage;
