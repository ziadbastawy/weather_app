<template>
  <div class="home">
    <div class="container">
      <navbar @changeType="changeTempType"/>
      <current-city-details :currentWeather="filteredCurrentWeather" :fullDayWeather="dailyWeather.data[0]" :temp_type="temp_type" /> 
      <tabs :hourlyWeather="filteredHourlyWeather" :dailyWeather="filteredDailyWeather" /> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    navbar: () => import('../components/navbar'),
    currentCityDetails: () => import('../components/currentCityDetails'),
    tabs: () => import('../components/tabs') 
  },
  data () {
    return {
      currentLocation:{},
      apiKey:'a177f8481c31fa96c3f95ad4f4f84610',
      currentlyWeather:{},
      dailyWeather:{
        data:[]
      },
      hourlyWeather:{},
      temp_type:'F'
    }
  },
  computed: { 
    filteredHourlyWeather () {
      if (this.hourlyWeather.data) {
        const filteredArr = this.hourlyWeather.data.map(item => {
          const data = {
            temperature:parseInt(item.temperature),
            time:item.time,
            icon:item.icon
          }
          if (this.temp_type !== 'F') {
            data.temperature = parseInt((data.temperature - 32) * 5 / 9)
          }
          return data
        })
        return filteredArr.splice(23)
      } else {
        return []
      }
    }, 
    filteredDailyWeather () {
      if (this.dailyWeather.data) {
        const filteredArr = this.dailyWeather.data.map(item => {
          const averageTemp = (item.temperatureHigh + item.temperatureLow) / 2
          const data = {
            temperature:parseInt(averageTemp),
            time:item.time,
            icon:item.icon
          }
          if (this.temp_type !== 'F') {
            data.temperature = parseInt((data.temperature - 32) * 5 / 9)
          }
          return data
        })
        return filteredArr
      } else {
        return []
      }
    }, 
    filteredCurrentWeather () {
      const data = Object.assign({}, this.currentlyWeather)
      if (this.temp_type !== 'F') {
        data.temperature = (data.temperature - 32) * 5 / 9
      }
      data.temperature = parseInt(data.temperature) 
      return data    
    }
  },
  async created () {
    this.getCurrentLocation()
  },
  methods: {
    getWeatherInformation () {
      return new Promise(resolve => {
        this.$axios.get(`https://api.darksky.net/forecast/${this.apiKey}/${this.currentLocation.lat},${this.currentLocation.lng}`).then(res => {
          const {currently, daily, hourly} = res.data
          this.currentlyWeather = currently
          this.dailyWeather = daily
          this.hourlyWeather = hourly
          resolve(res)
        })
      })
    },
    getCurrentLocation () {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          this.getWeatherInformation()
        },
        () => {
          alert('Please enable your GPS position feature from setting.')
        }, {
          enableHighAccuracy: true
        }
      )
    },
    changeTempType (type) {
      this.temp_type = type
    }
  }
}
</script>

<style>
.home {
  height: 100vh;
  width: 100%;
  background-image: url("./../assets/Background.png");
  background-position: center;
  background-size: cover;

}
.container{ 
  margin: auto;
  width: 75%;
  /* background: #f00; */
  height: 50vh;
  
}
</style>
