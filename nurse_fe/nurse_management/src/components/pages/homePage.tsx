import NursesList from "../NursesList";

export interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = () => {
  return (
    <div>
      <NursesList></NursesList>
    </div>
  );
};

export default HomePage;
