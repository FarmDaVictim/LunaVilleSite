import './TuftedHeading.css';

export default function TuftedHeading({ as: Tag = 'h1', children, className = '' }) {
  return (
    <Tag className={`tufted-heading ${className}`}>
      {children}
    </Tag>
  );
}
