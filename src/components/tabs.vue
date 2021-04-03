<template>
    <section>
        <div class="tabs">
            <button class="tab_btn" :class="{'active' : viewedData == 'houlry' }"
                @click="changeViewedData('houlry')">Hourly</button>
            <button class="tab_btn" :class="{'active' : viewedData == 'daily' }"
                @click="changeViewedData('daily')">Daily</button>
        </div>
        <div class="tabs_cards" v-if="viewedData === 'houlry' ">
            <div class="card" v-for="(item , index) in hourlyWeather" :key="index">
                <p class="card_time" v-if="index !== 0">{{item.time|changetime}}</p>
                <p class="card_time" v-else>Now</p>
                <img class="card_img" :src="require(`../assets/${item.icon}.png`)" :alt="item.icon">
                <p class="card_temp">{{item.temperature}}&deg; </p>
            </div>
        </div>
        <div class="tabs_cards" v-else>
            <div class="card daily_card" v-for="(item , index) in dailyWeather" :key="index">
                <p class="card_time" v-if="index !== 0">{{changeDateFromTime(item.time)}}</p>
                <p class="card_time" v-else>Today</p>
                <img class="card_img" :src="require(`../assets/${item.icon}.png`)" :alt="item.icon">
                <p class="card_temp">{{item.temperature}}&deg; </p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'tabs',
  props: ['hourlyWeather', 'dailyWeather'],
  data () {
    return {
      viewedData: 'houlry',
      days: ['SUN', 'MON', 'TUE', 'WED ', 'THU', 'FRI', 'SAT']
    }
  },
  computed: {
    changeDateFromTime () {
      return time => {
        return new Date(time * 1000).toLocaleString('en-us', {  weekday: 'short' }) 
      }
    }

  },
  methods: {
    changeViewedData (data) {
      this.viewedData = data
    }
  }
}
</script>
<style>
    .tabs {
        width: 100%;
        border-bottom: 2px solid rgba(255, 255, 255, .5);
    }

    .tabs .tab_btn {
        background: transparent;
        border: none;
        font-weight: bold;
        font-size: 22px;
        line-height: 26px;
        color: rgba(255, 255, 255, .75);
        min-width: 40px;
        position: relative;
        padding: 10px 20px;
        outline: none;
        cursor: pointer;
    }

    .tabs .tab_btn.active {
        color: #fff;
    }

    .tabs .tab_btn.active:focus {
        outline: none;
    }

    .tabs .tab_btn.active::after {
        content: "";
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
        display: flex;
    }

    .tabs_cards .card {
        min-width: calc(100%/9);
        padding: 10px;
        text-align: center;
    }

    .tabs_cards .daily_card {
        min-width: calc(100%/8);
    }

    .tabs_cards .card .card_time {
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        display: block;
    }

    .tabs_cards .card .card_img {
        width: 66px;
    }

    .tabs_cards .card .card_temp {
        display: block;
        font-size: 36px;
        line-height: 42px;
        letter-spacing: 0.05em;
    }
</style>