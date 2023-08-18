// import PropTypes from 'prop-types';
import React from 'react';
// import css from './TransactionHistory.module.css';
import {
  TransactionHistoryTabl,
  Tablthead,
  Tabltr,
  TablTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ item }) => {
  console.log(item);
  return (
    <TransactionHistoryTabl>
      <Tablthead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Tablthead>

      <tbody>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <Tabltr key={id}>
              <TablTd>{type}</TablTd>
              <TablTd>{amount}</TablTd>
              <TablTd>{currency}</TablTd>
            </Tabltr>
          );
        })}
      </tbody>
    </TransactionHistoryTabl>
  );
};

// TransactionHistory.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.number.isRequired,
//     currency: PropTypes.string.isRequired,
//   }),
// };

//// css on modules/////

// export const TransactionHistory = ({ item }) => {
//   return (
//     <table className={css.transactionHistory}>
//       <thead className={css.thead}>
//         <tr className={css.trHead}>
//           <th className={css.th}>Type</th>
//           <th className={css.th}>Amount</th>
//           <th className={css.th}>Currency</th>
//         </tr>
//       </thead>

//       <tbody className={css.bodyTabl}>
//         {item.map(({ id, type, amount, currency }) => {
//           return (
//             <tr className={css.trBody} key={id}>
//               <td className={css.td}>{type}</td>
//               <td className={css.td}>{amount}</td>
//               <td className={css.td}>{currency}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

//  };
