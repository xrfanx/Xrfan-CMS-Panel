import "./WidgetLg.css";
import { transactions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Last transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTableTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>

          {transactions.map((transaction, index) => (
            <tr className="widgetLgTr" key={index}>
              <td className="widgetLgUser">
                <img src={transaction.img} className="widgetLgImg" />
                <span className="widgetLgName">{transaction.customer}</span>
              </td>

              <td className="widgetLgDate">{transaction.data}</td>

              <td className="widgetLgAmount">${transaction.amount}</td>
              <td className="widgetLgStatus">
                <Button type={transaction.status} />
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}
