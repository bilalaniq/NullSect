import { useTheme } from '../contexts/ThemeContext';

const PortfolioPage = () => {
  const { isRetro } = useTheme();

  return (
    <div className={`min-h-[83vh] p-4 ${
      isRetro 
        ? 'font-press-start bg-black text-purple-200' 
        : 'bg-yellow-50 text-gray-800'
    }`}
    >
      <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
      <p>My work samples go here...</p>
    </div>
  );
};

export default PortfolioPage;