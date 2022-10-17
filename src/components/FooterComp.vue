<template>
    <footer>
        <div class="ps-5 text-white position-relative" style="overflow:hidden;">
        <div class="d-lg-flex justify-content-start">
            <div class="me-4">
                <h2 class="mb-0 py-3">聯絡方式</h2>
                <ul class="list-unstyled">
                    <li class="fs-5"><i class="bi bi-geo-alt-fill me-1"></i>地址</li>
                    <li class="fs-5"><i class="bi bi-clock-fill me-1"></i>營業時間</li>
                    <li class="fs-5"><i class="bi bi-envelope-fill me-1"></i>mail</li>
                    <li class="fs-5"><i class="bi bi-telephone-fill me-1"></i>電話</li>
                </ul>
            </div>
            <div class="me-4">
                <h2 class="mb-0 py-3">關於本站</h2>
                <ul class="list-unstyled">
                <li class="fs-5"><a href=""><i class="bi bi-caret-right-fill me-1"></i>關於我們</a></li>
                <li class="fs-5"><a href=""><i class="bi bi-caret-right-fill me-1"></i>常見問題</a></li>
                <li class="fs-5"><a href=""><i class="bi bi-caret-right-fill me-1"></i>訂單專區</a></li>
                </ul>
            </div>
            <div class="ms-auto mt-auto position-absolute">
                <p class="text-end" style="font-size: 200px;"><i class="bi bi-cup-hot"></i></p>
            </div>
        </div>
        <p class="text-center py-3">僅個人練習使用．不做商業用途<router-link class="border-start border-2 px-3 mx-3" to="/DashBorder/Product">管理員登入</router-link><router-link class="border-start border-2 px-3" to="/">回首頁</router-link></p>
        </div>
    </footer>
</template>

<style>
    footer{
        background-color: black;
    }
    a{
        text-decoration: none;
        color: white;
    }
    a:hover{
        color: gray;
    }
    .position-absolute{
        bottom: -90px;
        right: -80px;
    }
</style>