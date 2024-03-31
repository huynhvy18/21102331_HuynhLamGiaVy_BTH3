  function bai3(){
        const name = document.getElementById("input-name").value;
        const phone = document.getElementById("input-phone").value;
        const email = document.getElementById("input-email").value;
        const option = document.getElementById("input-customer-type");
        const optionText = option.options[option.selectedIndex].text;
        const mathe = document.getElementById("input-card").value;   
        const invoiceid = document.getElementById("input-invoice").value;
        const textarea = document.getElementById("input-description").value;
        var currentDate = new Date();
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1; 
        var year = currentDate.getFullYear();
        var formattedDate = day + '/' + month + '/' + year;
        window.alert(" Họ và tên: " + name +"\n Mã thẻ: " + mathe +"\n Số điện thoại: "+ phone +"\n Email: " + email +"\n Loại KH: " + optionText +"\n Nội dung góp ý: "+ textarea
        );
    }