import './feed.scss';

const Feed = ({ messages }) => {
  if (!messages.length) return null;
  const formatDate = (unix) => {
    const d = new Date(unix);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month} - ${day} - ${year}`;
  };
  return messages.map(m => (
    <div key={m.date} className="messagelist">
      <span className="sender">{`${formatDate(m.date)}, ${m.name}`}</span>
      <span className="message">{m.message}</span>
    </div>
  ));
};

export default Feed;
