# Steam Deals Fetcher

This script fetches and displays information about the latest Steam deals using the Steam API.

## Prerequisites

- Node.js installed on your machine
- Axios library (`axios` package) installed (`npm install axios`)

## Usage

1. Clone or download the repository.
2. Install dependencies by running `npm install`.
3. Run the script using `node index.js`.

## Description

The script retrieves the latest Steam deals from the Steam API and displays details about each deal including its name, original price, discounted price, discount percentage, and link to the deal page.

## Example Output

```sh
Fetching and posting all deals...
New Steam deal: Deal Name
Original Price: $19.99
Discounted Price: $9.99
Discount: 50% off
Link: https://store.steampowered.com/app/12345
----------------------------------------
New Steam deal: Another Deal Name
Original Price: $29.99
Discounted Price: $14.99
Discount: 50% off
Link: https://store.steampowered.com/app/54321
----------------------------------------
