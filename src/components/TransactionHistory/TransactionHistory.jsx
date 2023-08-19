import PropTypes from 'prop-types';
import React from 'react';
// import css from './TransactionHistory.module.css';
import {
  TransactionHistoryTabl,
  Thead,
  TrBody,
  TablBody,
  TablTh,
  TablTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ item }) => {
  return (
    <TransactionHistoryTabl>
      <Thead>
        <tr>
          <TablTh>Type</TablTh>
          <TablTh>Amount</TablTh>
          <TablTh>Currency</TablTh>
        </tr>
      </Thead>

      <TablBody>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <TrBody key={id}>
              <TablTd>{type}</TablTd>
              <TablTd>{amount}</TablTd>
              <TablTd>{currency}</TablTd>
            </TrBody>
          );
        })}
      </TablBody>
    </TransactionHistoryTabl>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

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
