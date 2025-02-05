let friends = [];

function addFriend() {
    // Capturar o valor do campo de entrada
    let friendName = document.getElementById('amigo').value;

    // Validar a entrada
    if (friendName.trim() === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Prevenir duplicatas
    if (friends.includes(friendName)) {
        alert('Esse nome já foi adicionado.');
        return;
    }

    // Atualizar o array de amigos
    friends.push(friendName);

    // Atualizar a lista de amigos exibida
    updateFriendList();

    // Limpar o campo de entrada
    document.getElementById('amigo').value = '';
}

function updateFriendList() {
    let friendList = document.getElementById('friendList');
    friendList.innerHTML = '';

    for (let i = 0; i < friends.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = friends[i];
        friendList.appendChild(listItem);
    }
}

function selectRandomFriend() {
    if (friends.length === 0) {
        alert('Nenhum amigo disponível para selecionar.');
        return;
    }

    let randomIndex = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[randomIndex];
    document.getElementById('selectedFriend').innerHTML = `Amigo selecionado: ${selectedFriend}`;
}
