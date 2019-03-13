  class List {
    constructor () {
        this.createHeader();
        this.createPosition();
    }

    createHeader() {
        new Header($("header"),$("#login-model-contanier"),$("#register-model-contanier"),"list");
    }

    createPosition() {
        new PositionList($("#list-container"));
        new PositionAdd();
        new Pagination();
    }
  }

  //为了链式操作（调用完成以后把new List()返回，这样就可以继续调list的方法）
  new List();