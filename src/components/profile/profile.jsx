import css from './profile.module.css'

function Profile({name, tag, location, image, stats}) {

  return (
    <div className={css.container}>
        <div className={css.main}>
            <img className={css.img} src={image} alt="User avatar"/>
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.list}>
  <li className={css.statItem}>
    <span>Followers</span>
    <span className={css.stats}>{stats.followers}</span>
  </li>
  <li className={css.statItem}>
    <span>Views</span>
    <span className={css.stats}>{stats.views}</span>
  </li>
  <li className={css.statItem}>
    <span>Likes</span>
    <span className={css.stats}>{stats.likes}</span>
  </li>
</ul>
    </div>
  )
}

export default Profile;
