<template>
    <section>
        <div class="tabs"> 
            <button class="tab_btn active" >Hourly</button>
            <button class="tab_btn">Daily</button>
        </div>
        <div class="tabs_cards">
            <div class="card" v-for="i in 12" :key="i">
                <p class="card_time">time</p>
                <img class="card_img" src="../assets/sunny_cloud.svg" alt="">
                <p class="card_temp" >81 &deg; </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name:'tabs'
}
</script>

<style>
.tabs {
    width: 100% ;
    border-bottom: 2px solid rgba(255, 255,255, .5);
}

.tabs .tab_btn {
    background: transparent;
    border: none;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: rgba(255, 255,255, .75);
    min-width: 40px;
    position: relative;
    padding: 10px 20px;
}

.tabs .tab_btn.active{
    color: #fff;
}
.tabs .tab_btn.active::after{
    content: "" ;
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: -2px;
    left: 0px;
}

.tabs_cards {
    width: 100%;
    overflow-x: scroll;
    display: flex ;
}

.tabs_cards .card{
    min-width: calc(100%/9);
    padding: 10px;
    text-align: center;
}

.tabs_cards .card .card_time{
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    display: block;
}
.tabs_cards .card .card_img{
    width: 66px;
}
.tabs_cards .card .card_temp{
    display: block;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.05em;

}
</style>