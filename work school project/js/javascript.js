  document.forms[0].onsubmit = function(e) {
    e.preventDefault();

    if (!this.name.value || !this.email.value || !this.phone.value || !this.message.value) {
      alert('Please fill in all fields.');
      return;
    }

    alert('Message sent!');
    this.reset();
  };

