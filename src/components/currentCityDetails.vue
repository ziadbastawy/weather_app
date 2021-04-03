<template>
    <section class="current_city">
        <div class="current_city_details">
            <h1 class="current_city_details_header">new cairo</h1>
            <p class="date">{{cuurentDate|changeDate }}</p>
            <img  class="waether_icon" :src="require(`../assets/${currentWeather.icon}.png`)" :alt="currentWeather.icon"/>
            <p class="status">{{currentWeather.summary}}</p>
        </div>
        <div class="current_city_temp_details">
            <h1 class="current_temp">{{currentWeather.temperature}}<sup>&deg;</sup></h1>
            <p class="temp_range">
                <span> {{changeTemp(fullDayWeather.temperatureHigh)}}&deg; </span> / <span class="lower_temp"> {{changeTemp(fullDayWeather.temperatureLow)}}&deg; </span>
            </p>
            <p class="temp_summary" v-if="fullDayWeather">
                {{fullDayWeather.summary}}
            </p>
        </div>
    </section>
</template>

<script>
export default {
  name:'temperature_details',
  props:['currentWeather', 'fullDayWeather', 'temp_type'],
  data () {
    return {
      cuurentDate: new Date
    }   
  },
  computed:{
    changeTemp () {
      return temp => {
        if (this.temp_type !== 'F') {
          return parseInt((temp - 32) * 5 / 9)
        } else return parseInt(temp)
      }
    }
  }
   
}
</script>

<style>
.current_city {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    flex-wrap: wrap;
}
.current_city .current_city_details_header {
    font-size: 64px;
    line-height: 75px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
}
.current_city .date {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.05em;
}
.current_city .waether_icon {
    max-width: 100px;
}
.current_city .status {
    font-size: 30px;
    line-height: 35px;
}
.current_city .current_temp {
    font-size: 144px;
    line-height: 169px;
    letter-spacing: 0.05em;
    margin: 20px 0px

}

.current_city .temp_range {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.05em;
}
.current_city .temp_range .lower_temp {
    color: rgba(255, 255, 255, 0.75);
}
.current_city .temp_summary {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
}

</style>