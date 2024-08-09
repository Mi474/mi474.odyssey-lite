document.getElementById('exploreButton').addEventListener('click', () => {
    document.getElementById('output').textContent = 'You are exploring a mysterious land!';
});

document.getElementById('craftButton').addEventListener('click', () => {
    document.getElementById('output').textContent = 'You are crafting a new item!';
});

document.getElementById('auctionButton').addEventListener('click', () => {
    document.getElementById('output').textContent = 'You are participating in an auction!';
});
