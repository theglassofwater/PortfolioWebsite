function SkillsList({icon, name}) {
  return (
    <span>
        <img src={icon} alt={name} />
        <p>{name}</p>
    </span>
  );
}

export default SkillsList;