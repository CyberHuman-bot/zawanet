import { Link } from 'react-router-dom';

export default function Button({ text, to }) {
  return (
    <button className="button">
      <span>
      <Link to={to} className="button">
        {text}
      </Link>
      </span>
    </button>
  );
}
