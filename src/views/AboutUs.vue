<template>
<div class="py-4 card border-0 container" >
  <h1 class="text-center border-bottom  border-success  border-3 mx-auto">關於六角咖啡工廠</h1>
  <div class="row g-3 mb-3">
    <div class="col-lg-6 col-12 text-center">
      <h2>我們的理念</h2>
      <p>「 秋日薄暮，用菊花煮竹葉青，人與海棠俱醉 」</p>
      <p class="text-start ps-lg-5"> 林清玄在《溫一壺月光下酒》中寫到，在秋日薄暮時分，<br>
          來點小酒，人和海棠花皆醉了。<br>
          這樣的場景僅在腦海里一閃而過，就不禁陶醉其中。<br>
          我們致力於打造一個舒適的飲酒場景，<br>
          希望客人在我們店裡只有愜意沒有拘謹。</p>
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
