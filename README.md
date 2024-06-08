# CLI-Based ATM Project

## Overview

This project is a Command-Line Interface (CLI) based ATM system developed using Node.js and the Inquirer.js library. It simulates basic banking operations such as balance inquiry, deposits, withdrawals, and providing a simple yet effective tool for understanding the mechanics of ATM transactions.

## Features

- **Balance Inquiry**: Users can check their current account balance.
- **Deposits**: Users can deposit money into their account.
- **Withdrawals**: Users can withdraw money from their account, with error handling for insufficient funds.
- **User-Friendly Interface**: The application uses Inquirer.js to create an intuitive and interactive command-line interface.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for the backend logic of the ATM system.
- **Inquirer.js**: A collection of common interactive command-line user interfaces, used to prompt users and handle their input.
- **NPM (Node Package Manager)**: Used to manage dependencies and scripts for the project.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/zainkhan1726/Project02_ATM.git
   cd Project02_ATM
   ```

2. **Install Dependencies**:
   ```bash
   npm install zain-1726-atm
   ```

3. **Run the Application**:
   ```bash
   node index.js
   ```

## Usage

Upon running the application, users will be prompted with a series of options to navigate through the ATM functionalities. The main menu includes options for balance inquiry, deposits, withdrawals. Each action will guide the user through the necessary steps and display the relevant information.

## Example

```bash
$ node index.js
Welcome!
? Select one (Use arrow keys)
> Withdraw
  Deposit
  Fast Cash
  Check Balance
  Quit


## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to discuss potential improvements or report bugs.

## License

This project is licensed under the MIT License.

---
