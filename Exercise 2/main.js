function Calculate() {
    // Input: khai báo biến 
    let name = +document.getElementById("name").value;
    let Kw = +document.getElementById("Kw").value;
  
      // Process
      // Kiểm Tra Thông tin mà khách hàng nhập vào
    if (!Kw || Kw < 0 || Kw <= -Kw) {
      alert("Số Kw không hợp lệ!  Vui lòng nhập lại");
      document.getElementById("alertKw2").innerHTML = "Họ Tên: " + name + " , " + "Tiền Điện: " + "0" + "vnd";
      return;
    };
  
    
    let currentFormat = new Intl.NumberFormat("vn-VN");
    // Gọi Hàm
      charge = calcPrice (Kw, 500, 650, 850, 1100, 1300);
  
    // Đầu ra
    document.getElementById("informKw").innerHTML = "Họ Tên: " + name + " , " + "Tiền Điện: " + currentFormat.format(charge) +  "vnd";
  }
  
  // Tính Tiền Điện 
  function calcPrice (Kw, onekw, twokw, threekw, fourkw, fivekw ) {
    let price = 0;
    if (Kw <= 50) {
      price = Kw * oneKw; 
    } else if (Kw <= 100) {
      price = (50 * onekw) + (Kw  - 50) * twokw;
    } else if (Kw <= 200) {
      price = (50 * onekw) + 50 * twokw + (Kw - 100) * threekw;
    } else if (Kw <= 350) {
      price = (50 * onekw) + 50 * twokw + 100 * threekw + (Kw - 200) * fourkw;
    } else {
      price = (50 * onekw) + 50 * twokw + 100 * threekw + 150 * fourkw + (Kw - 350) * fivekw;
    } 
    return price
  };
  