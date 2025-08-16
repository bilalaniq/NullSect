import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isRetro, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className={`px-3 py-1 text-sm rounded-none border-2 ${
        isRetro 
          ? 'border-purple-400 bg-purple-900 text-purple-200 hover:bg-purple-800' 
          : 'border-yellow-600 bg-yellow-400 text-gray-800 hover:bg-yellow-300'
      }`}
    >
      {isRetro ? 'Switch to Yellow' : 'Switch to Retro'}
    </button>
  );
};

export default ThemeToggle;