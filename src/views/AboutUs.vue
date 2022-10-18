<template>
<div class="py-4 card border-0 container" >
  <h1 class="text-center border-bottom  border-success  border-3 mx-auto">關於六角咖啡工廠</h1>
  <div class="row g-3 mb-3">
    <div class="col-lg-6 col-12 text-center">
      <h2>我們的理念</h2>
      <p class="text-start ps-lg-5 fs-3 mt-lg-5"> 
        強調品嚐咖啡的純粹，以及突顯自家的烘焙器材與特調咖啡，從現代的冰釀咖啡到傳統的希臘咖啡都有提供。
      </p>
    </div>
    <div class="col-lg-6 col-10 d-flex justify-content-center mx-auto">
      <img class="w-100" src="https://i.pinimg.com/originals/ff/a9/6e/ffa96ede4039820cdac1185df70b8dc7.gif" alt="街道">
    </div>
  </div>
  <div class="row g-3 d-flex justify-content-center">
    <div class="col-lg-8 col-10">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputName" class="form-label">姓名</label>
          <input type="text" class="form-control" id="inputName">
        </div>
        <div class="col-md-6">
          <label for="inputPhone" class="form-label">電話</label>
          <input type="tel" class="form-control" id="inputPhone">
        </div>
        <div class="col-12">
          <label for="inputEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="輸入電子郵件">
        </div>
        <div class="col-12">
          <label for="message" class="form-label">想告訴我們的話</label>
          <textarea class="form-control" id="message" cols="30" rows="6"></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-success w-100 py-3">發出訊息</button>
        </div>
      </form>
    </div>
    <div class="col-lg-4 col-10">
      <iframe class="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10232.099231591079!2d121.219344477868!3d24.945918556069753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823b34a9a1fa9%3A0xf1307561b4cd8101!2z5paw5Yui5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1665715886666!5m2!1szh-TW!2stw" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>
</template>
