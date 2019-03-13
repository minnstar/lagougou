  class PositionList {
      constructor(container) {
          this.container = container;
          this.createDOM().then($.proxy(this.bindEvents,this));
      }

      createDOM(){
          return new Promise(resolve =>{
              this.container.load("/html/component/list/positionList.html",resolve);
          })
      }

      bindEvents() {
          this.container.on("click","button",{list : this},function(e){
          //第三个参数传进来的{list: this}可以通过时间对象e.data得到
          let $tr = $(this).parents("tr");
          if($(this).hasClass("editBtn")){
              //编辑按钮
              e.data.list.handleEditBtnClick($tr);
          }else if($(this).hasClass("okBtn")){
              //确定按钮
              e.data.list.handleOkBtnClick($tr);
          }else if($(this).hasClass("cancelBtn")){
              //取消按钮
              e.data.list.handleCancelBtnClick($tr);
          }else if($(this).hasClass("delBtn")){
              e.data.list.handleDelBtnClick($tr);
          }
          })
      }

      handleEditBtnClick($tr) {
          //把span的值给对应的input.value
          $tr.addClass("edit").find("span").each(function(index,span){
              $(span).next().val($(span).html());
          })
      }

      handleOkBtnClick($tr) {
          $tr.removeClass("edit").find("span").each((index,span) =>{
              $(span).html($(span).next().val())})
      }

      handleCancelBtnClick($tr) {
          $tr.removeClass("edit");
      }

      handleDelBtnClick($tr) {
          if(confirm("确定删除？")){
              $tr.remove();
          }
      }
  }