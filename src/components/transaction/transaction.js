import { Table, Head, HeadItem, BodyItem } from './transaction.styled';

export const Transaction = ({ transactions }) => {
  return (
    <Table>
      <Head>
        <tr>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </tr>
      </Head>
      {transactions.map(transaction => (
        <tbody key={transaction.id}>
          <tr>
            <BodyItem>{transaction.type}</BodyItem>
            <BodyItem>{transaction.amount}</BodyItem>
            <BodyItem>{transaction.currency}</BodyItem>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};
