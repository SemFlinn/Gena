var lazyLoad=new LazyLoad({elements_selector:".lazy"});const form=document.querySelector(".form"),telSelector=form.querySelector('input[type="tel"]'),inputMask=new Inputmask("+7 (999) 999-99-99");inputMask.mask(telSelector),new window.JustValidate(".form",{rules:{tel:{required:!0,function:()=>{const e=telSelector.inputmask.unmaskedvalue();return Number(e)&&10===e.length}}},colorWrong:"#ff0f0f",messages:{name:{required:"Введите имя",minLength:"Введите 3 и более символов",maxLength:"Запрещено вводить более 15 символов"},email:{email:"Введите корректный email",required:"Введите email"},tel:{required:"Введите телефон",function:"Здесь должно быть 10 символов без +7"}},submitHandler:function(e){let t=new FormData(e),n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&console.log("Отправлено")},n.open("POST","mail.php",!0),n.send(t),e.reset()}});