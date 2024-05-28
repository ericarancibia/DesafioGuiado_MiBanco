import { pool } from "../config/db.js";

const addAccountQueries = async (number, balance) => {
  try {
    const sql = {
      text: "INSERT INTO account (number_account, balance) VALUES ($1, $2) RETURNING *",
      values: [number, balance],
    };
    const response = await pool.query(sql);
    if (response.rowCount > 0) {
      return response.rows;
    } else {
      return new Error("Error al insertar");
    }
  } catch (error) {
    console.log("Error Code: ", error.code, "Error Message: ", error.message);
  }
};

const addTransferQueries = async (
  description,
  amount,
  debit_account,
  credit_account
) => {
  const newTranfer = {
    text: "INSERT INTO transfers (description, amount, debit_account, credit_account) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [description, amount, debit_account, credit_account],
  };

  const updateOrigin = {
    text: "UPDATE account SET balance = balance - $1 WHERE number_account = $2 RETURNING *",
    values: [amount, debit_account],
  };

  const updateDestination = {
    text: "UPDATE account SET balance = balance + $1 WHERE number_account = $2 RETURNING *",
    values: [amount, credit_account],
  };

  try {
    await pool.query("begin");
    const response = await pool.query(newTranfer);
    const debitar = await pool.query(updateOrigin);
    const creditar = await pool.query(updateDestination);
    await pool.query("commit");
    console.log("Transacción realizada correctamente");
    console.log("Última transacción:", response.rows[0]);
  } catch (error) {
    await pool.query("rollback");
    console.error("Error Code:", error.code, "Error Message:", error.message);
  }
};

const getLastTransfers = async (accountNumber) => {
  const sql = {
    text: "SELECT * FROM transfers WHERE debit_account = $1 OR credit_account = $1 ORDER BY id DESC LIMIT 10",
    values: [accountNumber],
  };

  try {
    const response = await pool.query(sql);
    return response.rows;
  } catch (error) {
    console.error("Error al consultar las transferencias:", error.message);
  }
};

const getAccountBalance = async (accountNumber) => {
  const sql = {
    text: "SELECT balance FROM account WHERE number_account = $1",
    values: [accountNumber],
  };

  try {
    const response = await pool.query(sql);
    return response.rows[0].balance;
  } catch (error) {
    console.error("Error al consultar el saldo de la cuenta:", error.message);
  }
};

export { addAccountQueries, addTransferQueries, getLastTransfers, getAccountBalance };
