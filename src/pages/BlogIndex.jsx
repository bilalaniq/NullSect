import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const BlogIndexPage = () => {
  const { isRetro } = useTheme();

  return (
    <div className={`min-h-[83vh] p-4 ${
      isRetro 
        ? 'font-press-start bg-black text-purple-200' 
        : 'bg-yellow-50 text-gray-800'
    }`}
    >
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        <li>
          <Link to="/blog/post1" className="hover:underline">Blog Post 1</Link>
        </li>
        <li>
          <Link to="/blog/post2" className="hover:underline">Blog Post 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogIndexPage;