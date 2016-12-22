$('#relaceText').on('click','a',function(){
    var $this = $(this);
    $('#Text').find(".spanText").text($this.text());
});