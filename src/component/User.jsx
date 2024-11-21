const User = (props) => {
  const { img, name, age, id, getId } = props;
  const handleClick = () => getId(id);
  return (
    <article>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h2>{age}</h2>
      <button onClick={handleClick}>Remove</button>
    </article>
  );
};

export default User;
