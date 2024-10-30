document.getElementById('sendButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    const botToken = '7973758732:AAFl28iVF6Aurcm2W9ZU2EQsFfDEb6xM8H8';
    
    // const chatId = '494163141';529381533 390013007
    const chatId = '390013007';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const phoneInput = document.getElementById('phone');
    const nameInput = document.getElementById('name');

    const value = nameInput.value + ', ' + phoneInput.value

    const params = {
      chat_id: chatId,
      text: value
    };


    if(nameInput.value !== '' && phoneInput.value !== '') {
      nameInput.classList.remove('form__input-red')
      phoneInput.classList.remove('form__input-red')
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
         
          phoneInput.value = '';
          nameInput.value = '';
        
          alertify.success('Cпасибо за Вашу заявку!')
        } else {
          alertify.error('Ошибка при отправке сообщения.')
        }
      })
      .catch(error => console.error('Ошибка:', error));
  } else if(nameInput.value === '' && phoneInput.value === '') {
    nameInput.classList.add('form__input-red')
    phoneInput.classList.add('form__input-red')
  } else if(nameInput.value === '' && phoneInput.value !== '' ) {
    nameInput.classList.add('form__input-red')
  } else if(nameInput.value !== '' && phoneInput.value === '') {
    phoneInput.classList.add('form__input-red')
  }
    
});



