export interface ILoaderSpinnerProps {}

const LoaderSpinner: React.FC<ILoaderSpinnerProps> = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      Loading...
    </div>
  );
};

export default LoaderSpinner;
