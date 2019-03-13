  class Register {
    constructor (container) {
      this.container = container;
      this.creteDOM().then($.proxy(this.init, this));
    }

    creteDOM () {
      return new Promise(resolve => {
        this.container.load("/html/component/common/register.html", resolve);
      })
      
    }

    init () {
      
    }

  }