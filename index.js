const axios = require('axios');

async function Steam() {
    try {
        const steamDealsUrl = 'https://store.steampowered.com/api/featuredcategories?cc=US&l=en';
        const steamResponse = await axios.get(steamDealsUrl);
        const steamDeals = steamResponse.data.specials.items;

        if (steamDeals.length === 0) {
            console.log('No Steam deals found.');
        } else {
            for (const steamDeal of steamDeals) {
                const originalPrice = steamDeal.original_price / 100;
                const discountedPrice = steamDeal.final_price / 100;
                const discountPercent = steamDeal.discount_percent;
                const dealLink = `https://store.steampowered.com/app/${steamDeal.id}`;
                console.log(`New Steam deal: ${steamDeal.name}`);
                console.log(`Original Price: $${originalPrice.toFixed(2)}`);
                console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
                console.log(`Discount: ${discountPercent}% off`);
                console.log(`Link: ${dealLink}`);
                console.log('----------------------------------------');
            }
        }
    } catch (steamError) {
        console.error('An error occurred while fetching Steam deals:', steamError);
    }
}

async function main() {
    console.log('Fetching and posting all deals...');
    await Steam();
}

main();