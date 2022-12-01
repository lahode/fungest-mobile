import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  img?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, img }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      {img &&
        <p>
          <img src={'data:image/png;' + img} alt={name} />
        </p>
      }
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
