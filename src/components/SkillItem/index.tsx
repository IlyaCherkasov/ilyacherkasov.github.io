import { ReactComponent as CheckSvg } from 'assets/check.svg';

import styles from './styles.module.css';

interface Props {
  name: string;
  level: string;
}

const SkillItem = ({ name, level }: Props) => (
  <div className={styles.container}>
    <CheckSvg />
    <div className={styles.textContainer}>
      <h4>{name}</h4>
      <h5>{level}</h5>
    </div>
  </div>
);

export default SkillItem;
