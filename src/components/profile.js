export const Profile = ({ data }) => {
  return (
    <div>
      <img src={data.avatar} alt=" " />
      <p>{data.username}</p>
      <p>{data.tag}</p>
      <p>{data.location}</p>
      <ul>
        <li>Followers {data.stats.followers}</li>
        <li>Views {data.stats.views}</li>
        <li>Likes {data.stats.likes}</li>
      </ul>
    </div>
  );
};
