import { GithubUser } from '../types/github';

const GithubCard = ({ user }: { user: GithubUser }) => {
  return (
    <div className="item-card">
      <div className="item-card__image">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="item-card__content">
        <p>{user.id}</p>
        <p>{user.login}</p>
      </div>
      <a target="_blank" rel="noreferrer" href={user.html_url} className="btn">
        View profile
      </a>
    </div>
  );
};

export default GithubCard;
