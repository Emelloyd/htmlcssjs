import React from "react";

const invoice = {
  invoiceTo: "Juan Dela Cruz",
  date: "2023-04-15",
  address1: "810 Oroquieta Street Sta Cruz 1000",
  address2: "Manila, Metro Manila, Philippines",
  invoiceNumber: "6845",
  paymentMode: "COD",
};

const invoiceItems = [
  { description: "Mouse", Qty: 3, unitPrice: 200 },
  { description: "Keyboard", Qty: 3, unitPrice: 400 },
  { description: "Monitor", Qty: 6, unitPrice: 5400 },
  { description: "CPU Tower Case", Qty: 3, unitPrice: 1200 },
  { description: "Headset", Qty: 3, unitPrice: 500 },
  { description: "UPS", Qty: 1, unitPrice: 4000 },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const formattedDate = `${day}/${month}/${date.getFullYear()}`;
  return formattedDate;
};

const Invoice = () => {
  let subtotal = 0;

  const tableRows = invoiceItems.map((item, index) => {
    const amount = item.Qty * item.unitPrice;
    subtotal += amount;

    return (
      <tr>
        <td>
          <input type="text" name="" id="" defaultValue={item.description} />
        </td>
        <td>
          <input type="number" defaultValue={item.Qty} />
        </td>
        <td>
          <input type="number" defaultValue={item.unitPrice} />
        </td>
        <td>{amount}</td>
      </tr>
    );
  });

  return (
    <>
    <h1>INVOICE DETAILS</h1>
      <div className="container">
        <div className="card">
          <p className="text">
            Invoice To: {invoice.invoiceTo}
          </p>
          <p className="text">
            Address: {`${invoice.address1}, ${invoice.address2}`}
          </p>
          <p className="text">
            Invoice Number: {invoice.invoiceNumber.padStart(10, "0")}
          </p>
          <p className="text">Date: {formatDate(invoice.date)}</p>
          <p className="text">Payment Mode: {invoice.paymentMode}</p>
        </div>
        <table id="invoice-table" className="table ">
          <thead className="table-success">
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total Amount</td>
              <td>{subtotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Invoice;