import React from 'react';
// import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import {
  StatisticSection,
  Title,
  StatList,
  ItemList,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ItemList key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </ItemList>
          );
        })}
      </StatList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

///// css on modules//////

// export const Statistics = ({ title, stats }) => {
//   return (
//     <section className={css.statistics}>
//       {title && <h2 className={css.title}>{title}</h2>}
//       <ul className={css.statList}>
//         {stats.map(({ id, label, percentage }) => {
//           return (
//             <li
//               className={css.itemList}
//               key={id}
//               style={{ background: getRandomHexColor() }}
//             >
//               <span className={css.label}>{label}</span>
//               <span className={css.percentage}>{percentage}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };
