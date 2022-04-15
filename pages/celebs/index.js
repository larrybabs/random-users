import styles from '../../styles/celebs.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return { 
        props: {celebs: data} 
}
}

const index = ({celebs}) => {
  return (
    <div>
      <h1>All Celebrities</h1>
      {celebs.map(celeb => (
          <div key={celeb.id}>
              <a className={styles.single}>
                  <h3>{celeb.name}</h3>
              </a>
          </div>
      ))}
    </div>
  );
}

export default index;
