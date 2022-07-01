import { useRouter } from "next/router";
import MainLayout from "../../components/Layouts/MainLayout";

const StateDetailPage = () => {
  const router = useRouter();
  const { stateId } = router.query;
  return (
    <MainLayout className="bg-stone-200">
      <p>Mostrar aqui la info del estado {stateId}</p>
    </MainLayout>
  );
};

export default StateDetailPage;
