const fs = require('fs');

// Read the stats file
const stats = JSON.parse(fs.readFileSync('./stats.json', 'utf8'));

// Extract the sizes of the assets
const assetSizes = stats.assets.map(asset => ({
    name: asset.name,
    size: (asset.size / 1024 / 1024).toFixed(2) + ' MiB',
}));

// Output the sizes
console.log(assetSizes);