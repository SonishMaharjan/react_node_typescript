import NursesList from "../NursesList";

export interface IHomePageProps {}

/**
 * Component for home page.
 * 
 * @returns 
 */
const HomePage: React.FC<IHomePageProps> = () => {
  return (
    <div>
      <NursesList></NursesList>
    </div>
  );
};

export default HomePage;
