import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="custom-container">
      <div className="w-[500px] space-y-4">
        <div className="flex">
          <button onClick={() => navigate(-1)} className="botaoesq">
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="button">
          <h2 className="text-slat">
            <strong>{title}</strong>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
